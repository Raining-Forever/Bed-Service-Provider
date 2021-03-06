import React, { useEffect, useState } from "react";
import styles from "../Reserve.module.css";
import { Button, Table, Tag, Space } from "antd";
import { useAuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Swal from "sweetalert2";
import moment from "moment";

export default function Reserve() {
  const { auth, authLoaded, roleCheck } = useAuthContext();
  const [submitUpdate, setSubmitUpdate] = useState(false);
  useEffect(() => {
    roleCheck(["patient"], "/accessdenied");
  }, [authLoaded]);
  const columns = [
    {
      title: "ชื่อสถานพยาบาล",
      dataIndex: "hosname",
      key: "hosname",
    },
    {
      title: "วันที่จอง",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "เวลาที่จอง",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "สถานะ",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            let color = tag.length > 9 ? "green" : "geekblue";
            if (tag === "ยกเลิกการจอง") {
              color = "volcano";
            } else if (tag === "จองเตียงสำเร็จ") {
              color = "green";
            } else {
              color = "geekblue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const columns2 = [
    {
      title: "ชื่อสถานพยาบาล",
      dataIndex: "hosname",
      key: "hosname",
    },
    {
      title: "จำนวนเตียงคงเหลือ",
      dataIndex: "numOfbed",
      key: "numOfbed",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "เบอร์โทรศัพท์",
      key: "tel",
      dataIndex: "tel",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={async () => {
              await Swal.fire({
                title: "ท่านต้องการจองเตียง",
                icon: "warning",
                html: "ท่านต้องการจองเตียง",
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: " ยืนยัน",
                confirmButtonAriaLabel: "ปฏิเสธการของรับการรักษาสำเร็จ",
                cancelButtonText: "ยกเลิก",
                cancelButtonAriaLabel: "ยกเลิกการปฏิเสธการของรับการรักษาสำเร็จ",
              }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  await axios.post(
                    "https://bed-service-provider.herokuapp.com/api/phr",
                    {
                      patient_id: auth.user_info.id,
                      hospital_id: record.hospital_id,
                      reservation_id: record.id,
                      status: 2,
                    }
                  );
                  const test1 = await axios.put(
                    `https://bed-service-provider.herokuapp.com/api/hospital/${record.hospital_id}`,
                    {
                      bed_occupied: record.bed_occupied - 1,
                    }
                  );
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "จองเตียงสำเร็จ",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setSubmitUpdate(!submitUpdate);
                } else {
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "ยกเลิกการจองเตียง",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            }}
          >
            จองเตียง
          </Button>
        </Space>
      ),
    },
  ];
  const [reserve, setReserve] = useState({});
  const [freeHospital, setFreeHospital] = useState({});
  const [isLoading, setisLoading] = useState(true);
  let newformatfreehos = [];
  let newformatmyHospital = [];
  const statusArray = [
    "รอลงทะเบียน",
    "รอการยืนยัน",
    "จองเตียงสำเร็จ",
    "ยกเลิกการจอง",
  ];
  async function fetchReserve() {
    if (auth.user_info?.id) {
      const myHospitalQueue = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/phr/`,
        {
          patient_id: auth.user_info.id,
          status: 2,
        }
      );
      const freeHospitalData = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/reservation/`,
        {
          status: 1,
        }
      );
      console.log("myHospitalQueue.data[0]", myHospitalQueue.data[0]);
      console.log("freeHospitalData.data[0]", freeHospitalData.data[0]);
      newformatmyHospital = myHospitalQueue.data.map((v) => ({
        //     id: "1",
        // hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
        // date: "22/9/2564",
        // time: "17.00.53",
        // status: ["อยู่ระหว่างดำเนินการ"],
        id: v.id,
        hosname: v.hospitalinfo.hospital_name,
        date: moment(v.created_at)
          .utcOffset("+0700")
          .format()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/"),
        time: moment(v.created_at)
          .utcOffset("+0700")
          .format()
          .split("T")[1]
          .split("+")[0]
          .split(".")[0]
          .split(":")
          .slice(0, -1)
          .join("."),
        status: [statusArray[v.status - 1]],
      }));
      newformatfreehos = freeHospitalData.data.map((v) => ({
        id: v.id,
        hosname: v.hospitalinfo.hospital_name,
        numOfbed: v.hospitalinfo.bed_occupied + "/" + v.hospitalinfo.bed_total,
        province: v.hospitalinfo.province,
        tel: v.hospitalinfo.tel,
        hospital_id: v.hospitalinfo.id,
        bed_occupied: v.hospitalinfo.bed_occupied,
      }));
      setReserve(newformatmyHospital);
      setFreeHospital(newformatfreehos);
      setisLoading(false);
    } else console.log("no user_info.id");
  }
  useEffect(() => {
    if (authLoaded) {
      fetchReserve();
    }
  }, [authLoaded, submitUpdate]);
  const data = [
    {
      id: "1",
      hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
      date: "22/9/2564",
      time: "17.00.53",
      status: ["อยู่ระหว่างดำเนินการ"],
    },
  ];

  const data2 = [
    {
      id: "1",
      hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
      numOfbed: "10/100",
      province: "กรุงเทพมหานคร",
      tel: "081-574-9281",
    },
    {
      id: "2",
      hosname: "โรงพยาบาล B",
      numOfbed: "10/850",
      province: "กรุงเทพมหานคร",
      tel: "081-123-1234",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการจองเตียงของฉัน</h2>
        <div className={styles.box}>
          {isLoading ? (
            <div className={styles.loadcontainer}>
              <Oval
                height="100"
                width="100"
                color="#1890ff"
                secondaryColor="gray"
              />
              Loading
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={reserve}
              pagination={{
                defaultPageSize: 5,
              }}
            />
          )}
        </div>
        <h2 className={styles.header}>ค้นหาและจองเตียง</h2>
        <div className={styles.box}>
          {isLoading ? (
            <div className={styles.loadcontainer}>
              <Oval
                height="100"
                width="100"
                color="#1890ff"
                secondaryColor="gray"
              />
              Loading
            </div>
          ) : (
            <Table
              columns={columns2}
              dataSource={freeHospital}
              pagination={{
                defaultPageSize: 5,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

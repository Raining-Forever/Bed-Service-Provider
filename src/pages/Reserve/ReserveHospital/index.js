import React, {
  useEffect,
  useState,
} from "react";
import styles from "../Reserve.module.css";
import { Button, Table, Tag, Space } from "antd";
import { useAuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function ReserveHospital() {
  const columns = [
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      key: "province",
    },

    {
      title: "เบอร์โทรศัพท์",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <a>ดูข้อมูลเพิ่มเติม {">"}</a>
        </Space>
      ),
    },
  ];
  const { auth, authLoaded } = useAuthContext();
  const [patientReserve, SetPatientReserve] =
    useState({});
  const [isLoading, setisLoading] =
    useState(true);
  const navigate = useNavigate();
  let newformatPatientReserve = [];
  async function fetchPatientReserve() {
    if (auth.user_info?.id) {
      const myPatientQueue = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/phr/`,
        {
          hospital_id: auth.user_info.id,
          status: 1,
        }
      );
      newformatPatientReserve =
        myPatientQueue.data.map((v) => ({
          id: v.id,
          patname:
            v.patientinfo.firstname +
            " " +
            v.patientinfo.lastname,
          province: v.patientinfo.province,
          tel: v.patientinfo.tel,
        }));
      console.log(myPatientQueue.data);
      SetPatientReserve(newformatPatientReserve);
      setisLoading(false);
    }
  }
  // console.log("reserve");
  useEffect(() => {
    if (authLoaded) {
      fetchPatientReserve();
    }
  }, [authLoaded]);
  const data = [
    {
      id: "1",
      patname: "นางสมหมาย เก่งมาก",
      province: "นครศรีธรรมราช",
      tel: "081-574-9281",
    },
    {
      id: "2",
      patname: "นายสมศักดิ์ เก่งมาก",
      province: "กรุงเทพมหานคร",
      tel: "081-123-1234",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>
          รายชื่อผู้เข้ารับการรักษา
        </h2>
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
              dataSource={patientReserve}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (e) => {
                    navigate(
                      `/appoint/${record.id}`
                    );
                  },
                };
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./DoctorAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function DoctorAppoint() {
  const { auth, authLoaded, roleCheck } = useAuthContext();
  useEffect(() => {
    roleCheck(["patient"], "/accessdenied");
  }, [authLoaded]);
  const [appoint, setAppoint] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [newArray, setNewArray] = useState([]);
  const [freeDoctor, setFreeDoctor] = useState([]);
  const [submitUpdate, setSubmitUpdate] = useState(false);

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "ช่วงเวลา",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "รายชื่อแพทย์",
      dataIndex: "docname",
      key: "docname",
    },
    {
      title: "สถานะ",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            let color = tag.length > 9 ? "green" : "geekblue";
            if (tag === "ยกเลิกนัด") {
              color = "volcano";
            } else if (tag === "ปรึกษาสำเร็จ") {
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
      title: "วันที่",
      dataIndex: "date",
      key: "date",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "ช่วงเวลา",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "รายชื่อแพทย์",
      dataIndex: "docname",
      key: "docname",
    },
    {
      title: "เพศ",
      key: "sex",
      dataIndex: "sex",
      render: (sex) => (
        <>
          {sex.map((tag) => {
            let color = tag.length;
            if (tag === "ชาย") {
              color = "geekblue";
            } else if (tag === "หญิง") {
              color = "volcano";
            } else {
              color = "green";
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
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <div className={styles.wrapappointbut}>
            <Button
              type="primary"
              onClick={async () => {
                await axios.put(
                  `https://bed-service-provider.herokuapp.com/api/appointment/${record.id}`,
                  { patient_id: auth.user_info.id, status: 2 }
                );
                alert("จองสำเร็จ");
                setSubmitUpdate(!submitUpdate);
              }}
              className={styles.appointbutton}
            >
              ปรึกษาแพทย์
            </Button>
          </div>
        </Space>
      ),
    },
  ];

  const statusArray = [
    "รอลงทะเบียน",
    "รอให้คำปรึกษา",
    "ปรึกษาสำเร็จ",
    "ยกเลิกนัด",
  ];

  const data = [
    {
      id: "1",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "21",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "141",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "212341234",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "1123412341",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "212341234",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
    {
      id: "2123412344",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "TESTESTESETE",
      status: ["รอให้คำปรึกษา"],
    },
  ];

  const data2 = [
    {
      id: "1",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      docname: "นพ.สมชาย เก่งมาก",
      sex: ["ชาย"],
    },
    {
      id: "2",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
      sex: ["หญิง"],
    },
  ];

  let nArray = [];
  let freeDocArray = [];

  async function fetchAppoint() {
    if (auth.user_info?.id) {
      const result = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/appointment/`,
        { patient_id: auth.user_info.id, status: 2 }
      );

      nArray = result.data.map((v) => ({
        id: v.id,
        date: v.starttime.split("T")[0].split("-").reverse().join("/"),
        period:
          v.starttime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join(".") +
          " - " +
          v.endtime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join("."),
        docname:
          v.doctorinfo.title +
          v.doctorinfo.firstname +
          " " +
          v.doctorinfo.lastname,
        status: [statusArray[v.status - 1]],
      }));

      const freeDoctorData = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/appointment/`,
        {
          status: 1,
        }
      );
      freeDocArray = freeDoctorData.data.map((v) => ({
        id: v.id,
        date: v.starttime.split("T")[0].split("-").reverse().join("/"),
        period:
          v.starttime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join(".") +
          " - " +
          v.endtime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join("."),
        docname:
          v.doctorinfo.title +
          v.doctorinfo.firstname +
          " " +
          v.doctorinfo.lastname,
        sex: [v.doctorinfo.gender],
      }));

      console.log(nArray);

      setAppoint(result.data);
      setNewArray(nArray);
      setFreeDoctor(freeDocArray);
      setisLoading(false);
    } else console.log("no user_info.id");
  }

  useEffect(() => {
    if (authLoaded) {
      fetchAppoint();
    }
  }, [authLoaded, submitUpdate]);


  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการปรึกษาแพทย์ของฉัน</h2>
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
              dataSource={newArray}
              pagination={{
                defaultPageSize: 5,
                showSizeChanger: true,
                pageSizeOptions: ["5", "10", "20"],
              }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (e) => {
                    navigate(`/appoint/${record.id}`);
                  },
                };
              }}
            />
          )}
        </div>
        <h2 className={styles.header}>
          นัดปรึกษาแพทย์
        </h2>
        <div className={styles.box}>
          <Table
            columns={columns2}
            dataSource={freeDoctor}
            pagination={{
              defaultPageSize: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./HistoryAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function DoctorHistoryAppoint() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();
  useEffect(() => {
    roleCheck(["doctor"], "/accessdenied");
  }, [authLoaded]);

  const [isLoading, setisLoading] =
    useState(true);
  const [dataArray, setDataArray] = useState([]);

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
      render: (text) => <a>{text}</a>,
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
            let color =
              tag.length > 9
                ? "green"
                : "geekblue";
            if (tag === "ยกเลิกนัด") {
              color = "volcano";
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

  const data = [
    {
      id: "1",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["ปรึกษาสำเร็จ"],
    },
    {
      id: "2",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
      status: ["ยกเลิกนัด"],
    },
  ];

  const statusArray = [
    "รอลงทะเบียน",
    "รอให้คำปรึกษา",
    "ปรึกษาสำเร็จ",
    "ยกเลิกนัด",
  ];
  let nArray = [];
  async function fetchHistory() {
    if (auth.user_info?.id) {
      const result = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/appointment/`,
        { doctor_id: auth.user_info.id }
      );

      nArray = result.data.map((v) => ({
        id: v.id,
        date: v.starttime
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/"),
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

      console.log(nArray);
      setDataArray(nArray);
      setisLoading(false);
    }
  }

  useEffect(() => {
    if (authLoaded) {
      fetchHistory();
    }
  }, [authLoaded]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>
          ประวัติการให้ปรึกษา
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
              dataSource={dataArray}
            />
          )}
        </div>
      </div>
    </div>
  );
}

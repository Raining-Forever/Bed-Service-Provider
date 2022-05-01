import React, {
  useEffect,
  useState,
} from "react";
import styles from "./HistoryPatient.module.css";
import { Button, Table, Tag, Space } from "antd";
import { useAuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function HistoryPatient() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();
  useEffect(() => {
    roleCheck(["hospital"], "/accessdenied");
  }, [authLoaded]);
  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
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
  const statusArray = [
    "รอลงทะเบียน",
    "รอการยืนยัน",
    "จองเตียงสำเร็จ",
    "ยกเลิกการจอง",
  ];
  const [historyReserve, SetHistoryReserve] =
    useState({});
  const [isLoading, setisLoading] =
    useState(true);
  let newformatMyHistory;

  async function fetchHistoryReserve() {
    if (auth.user_info?.id) {
      const myHistory = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/phr/`,
        {
          hospital_id: auth.user_info.id,
        }
      );
      newformatMyHistory = myHistory.data.map(
        (v) => ({
          id: v.id,
          patname: `${v.patientinfo.firstname} ${v.patientinfo.lastname}`,
          date: v.created_at
            .split("T")[0]
            .split("-")
            .reverse()
            .join("/"),
          time: v.created_at
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join("."),
          status: [statusArray[v.status - 1]],
        })
      );
      SetHistoryReserve(newformatMyHistory);
      console.log(
        "myHistory.data",
        myHistory.data
      );
      setisLoading(false);
    }
  }
  useEffect(() => {
    if (authLoaded) {
      fetchHistoryReserve();
    }
  }, [authLoaded]);
  // const data = [
  //   {
  //     id: "1",
  //     date: "22/9/2564",
  //     patname: "นางสมหมาย เก่งมาก",
  //     status: ["สำเร็จ"],
  //   },
  //   {
  //     id: "2",
  //     date: "21/9/2564",
  //     patname: "นายสมศักดิ์ เก่งมาก",
  //     status: ["อยู่ระหว่างดำเนินการ"],
  //   },
  //   {
  //     id: "3",
  //     date: "20/9/2564",
  //     patname: "นายสมชาย เก่งมาก",
  //     status: ["ยกเลิกการจอง"],
  //   },
  // ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>
          ประวัติการจองเตียงของฉัน
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
              dataSource={historyReserve}
            />
          )}
        </div>
      </div>
    </div>
  );
}

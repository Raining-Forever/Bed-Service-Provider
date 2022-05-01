import styles from "./HistoryReserve.module.css";

import { Button, Table, Tag, Space } from "antd";
import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { Oval } from "react-loader-spinner";
import { useAuthContext } from "../../../../context/AuthContext";

export default function HistoryReserve() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();

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
  const data = [
    {
      id: "1",
      hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
      date: "22/9/2564",
      time: "15.10.03",
      status: ["สำเร็จ"],
    },
    {
      id: "2",
      hosname: "โรงพยาบาล B",
      date: "21/9/2564",
      time: "15.10.09",
      status: ["อยู่ระหว่างดำเนินการ"],
    },
  ];
  const [historyReserve, SetHistoryReserve] =
    useState({});
  const [isLoading, setisLoading] =
    useState(true);
  let newformatMyHistory = [];
  const statusArray = [
    "รอลงทะเบียน",
    "รอการยืนยัน",
    "จองเตียงสำเร็จ",
    "ยกเลิกการจอง",
  ];

  async function fetchHistoryReserve() {
    if (auth.user_info?.id) {
      const myHistory = await axios.put(
        `https://bed-service-provider.herokuapp.com/api/phr/`,
        {
          patient_id: auth.user_info.id,
        }
      );
      newformatMyHistory = myHistory.data.map(
        (v) => ({
          id: v.id,
          hosname: v.hospitalinfo.hospital_name,
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
      // console.log(
      //   "myHistory.data",
      //   myHistory.data
      // );
      setisLoading(false);
    }
  }
  useEffect(() => {
    if (authLoaded) {
      fetchHistoryReserve();
    }
  }, [authLoaded]);
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

import React, { useEffect, useState } from "react";
import styles from "./ManageAppoint.module.css";
import { Table, Tag, Space } from "antd";
import axios from "axios";

export default function ManageAppoint() {
  const [appoints, setAppoints] = useState([]);
  const columns = [
    {
      title: "ชื่อแพทย์",
      dataIndex: "docname",
      key: "docname",
    },
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
    },
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "เวลา",
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
            if (tag === "ยกเลิกนัด") {
              color = "volcano";
            } else if (tag == "ปรึกษาสำเร็จ") {
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
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <a> {">"} </a>
        </Space>
      ),
    },
  ];

  let data = [
    {
      id: "1",
      docname: "นพ.สมหมาย เก่งมาก",
      patname: "นางสมหมาย เก่งมาก",
      date: "21-09-2564",
      time: "15.10.19",
      status: ["ปรึกษาสำเร็จ"],
    },
    {
      id: "2",
      docname: "นพ.สมชาย เก่งมาก",
      patname: "นายสมศักดิ์ เก่งมาก",
      date: "22-09-2564",
      time: "15.30.13",
      status: ["รอให้คำปรึกษา"],
    },
  ];

  const statusArray = [
    "รอลงทะเบียน",
    "รอให้คำปรึกษา",
    "ปรึกษาสำเร็จ",
    "ยกเลิกนัด",
  ];

  let temp = [];
  async function fetchData() {
    const appoint = await axios.put(
      `https://bed-service-provider.herokuapp.com/api/appointment/`
    );
    console.log(appoint.data);
    temp = appoint.data.map((v) => ({
      id: v.id,
      docname:
        v.doctorinfo.title +
        v.doctorinfo.firstname +
        " " +
        v.doctorinfo.lastname,
      patname:
        v.patientinfo.title +
        v.patientinfo.firstname +
        " " +
        v.patientinfo.lastname,
      date: v.created_at.split("T")[0].split("-").reverse().join("-"),
      time: v.created_at
        .split("T")[1]
        .split("Z")[0]
        .split(".")[0]
        .split(":")
        .slice(0, -1)
        .join("."),
      status: [statusArray[v.status - 1]],
    }));
    console.log(temp);
    setAppoints(temp);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการให้คำปรึกษากับผู้ป่วย</h2>
        <div className={styles.box}>
          <Table
            columns={columns}
            dataSource={appoints}
            pagination={{
              defaultPageSize: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

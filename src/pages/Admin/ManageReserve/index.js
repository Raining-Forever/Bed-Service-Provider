import React, { useEffect, useState } from "react";
import styles from "./ManageReserve.module.css";
import { Table, Tag } from "antd";
import axios from "axios";

export default function ManageReserve() {
  const [reserves, setReserves] = useState([]);
  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "ชื่อสถานพยาบาล",
      dataIndex: "hosname",
      key: "hosname",
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
    /*{
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <a>></a>
        </Space>
      ),
    },*/
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
      date: "21-09-2564",
      hosname: "โรงพยาบาล A",
      patname: "นางสมหมาย เก่งมาก",
      status: ["สำเร็จ"],
    },
    {
      id: "2",
      date: "22-09-2564",
      hosname: "โรงพยาบาล B",
      patname: "นายสมชาย เก่งมาก",
      status: ["อยู่ระหว่างดำเนินการ"],
    },
  ];

  let temp = [];
  async function fetchData() {
    const reserve = await axios.put(
      `https://bed-service-provider.herokuapp.com/api/phr/`
    );
    console.log(reserve.data);
    temp = reserve.data.map((v) => ({
      id: v.id,
      hosname: v.hospitalinfo.hospital_name,
      patname:
        v.patientinfo.title +
        v.patientinfo.firstname +
        " " +
        v.patientinfo.lastname,
      date: v.created_at.split("T")[0].split("-").reverse().join("-"),
      status: [statusArray[v.status - 1]],
    }));
    console.log(temp);
    setReserves(temp);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการการจองเตียง</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={reserves} />
        </div>
      </div>
    </div>
  );
}

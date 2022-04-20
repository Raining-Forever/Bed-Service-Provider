import React from "react";
import styles from "../../DoctorAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManageAppoint() {
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
  ];

  const columns2 = [
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
  ];

  const data = [
    {
      id: "1",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      patname: "นายสมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
  ];

  const data2 = [
    {
      id: "1",
      date: "1/9/2564",
      period: "15.00 - 15.30",
      patname: "นางสมหมาย เก่งมาก",
      status: ["ปรึกษาสำเร็จ"],
    },
    {
      id: "2",
      date: "1/9/2564",
      period: "15.30 - 16.00",
      patname: "นายสมศักดิ์ เก่งมาก",
      status: ["ยกเลิกนัด"],
    },
    {
      id: "3",
      date: "2/9/2564",
      period: "17.00 - 17.30",
      patname: "นายสมชาย เก่งมาก",
      status: ["รอให้คำปรึกษา"],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <h2 className={styles.header}>รายการที่ต้องให้คำปรึกษา</h2>
          <Button type="primary">ลงทะเบียนให้คำปรึกษา</Button>
        </div>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
        <h2 className={styles.header}>ประวัติการให้คำปรึกษาผู้ป่วย</h2>
        <div className={styles.box}>
          <Table columns={columns2} dataSource={data2} />
        </div>
      </div>
    </div>
  );
}

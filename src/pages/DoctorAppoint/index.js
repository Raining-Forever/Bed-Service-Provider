import React from "react";
import styles from "./DoctorAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function DoctorAppoint() {
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
            } else if (tag == "หญิง") {
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
          <a>ปรึกษา</a>
        </Space>
      ),
    },
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
      id: "2",
      date: "3/9/2564",
      period: "14.00 - 14.30",
      docname: "นพ.สมชาย เก่งมาก",
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

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการปรึกษาแพทย์ของฉัน</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
        <h2 className={styles.header}>นัดปรึกษาแพทย์</h2>
        <div className={styles.box}>
          <Table columns={columns2} dataSource={data2} />
        </div>
      </div>
    </div>
  );
}
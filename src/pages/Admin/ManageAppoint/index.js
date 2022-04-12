import React from "react";
import styles from "./ManageAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManageAppoint() {
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

  const data = [
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

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการให้คำปรึกษากับผู้ป่วย</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

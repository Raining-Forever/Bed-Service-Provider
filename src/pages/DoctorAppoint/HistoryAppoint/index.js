import React from "react";
import styles from "./HistoryAppoint.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function HistoryAppoint() {
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

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ประวัติการปรึกษาแพทย์</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

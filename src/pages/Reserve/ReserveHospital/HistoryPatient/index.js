import React from "react";
import styles from "./HistoryPatient.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function HistoryPatient() {
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
            let color = tag.length > 9 ? "green" : "geekblue";
            if (tag === "ยกเลิกการจอง") {
              color = "volcano";
            } else if (tag == "สำเร็จ") {
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
      date: "22/9/2564",
      patname: "นางสมหมาย เก่งมาก",
      status: ["สำเร็จ"],
    },
    {
      id: "2",
      date: "21/9/2564",
      patname: "นายสมศักดิ์ เก่งมาก",
      status: ["อยู่ระหว่างดำเนินการ"],
    },
    {
      id: "3",
      date: "20/9/2564",
      patname: "นายสมชาย เก่งมาก",
      status: ["ยกเลิกการจอง"],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ประวัติการจองเตียงของฉัน</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

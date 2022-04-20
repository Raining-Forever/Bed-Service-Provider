import React from "react";
import styles from "./HistoryReserve.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function HistoryReserve() {
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
            let color = tag.length > 9 ? "green" : "geekblue";
            if (tag === "ยกเลิกนัด") {
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

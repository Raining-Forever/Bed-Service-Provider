import React from "react";
import styles from "./ManageReserve.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManageReserve() {
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

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการการจองเตียง</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

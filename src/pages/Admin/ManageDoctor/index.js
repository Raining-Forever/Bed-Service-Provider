import React from "react";
import styles from "./ManageDoctor.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManageDoctor() {
  const columns = [
    {
      title: "ชื่อแพทย์",
      dataIndex: "docname",
      key: "docname",
    },

    {
      title: "เลขที่ใบประกอบวิชาชีพ",
      dataIndex: "docid",
      key: "docid",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          {/* <a>ระงับบัญชี</a> */}
          <div className={styles.box2}>
            <div className={styles.box2_button_text}>ระงับบัญชี</div>
          </div>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      docname: "นพ.สมหมาย เก่งมาก",
      docid: "100001",
    },
    {
      id: "2",
      docname: "นพ.สมศักดิ์ เก่งมาก",
      docid: "100002",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีแพทย์</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./ManagePatient.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManagePatient() {
  const columns = [
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
    },

    {
      title: "อีเมล์",
      dataIndex: "email",
      key: "email",
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
      patname: "นางสมหมาย เก่งมาก",
      email: "test01@gmail.com",
    },
    {
      id: "2",
      patname: "นายสมศักดิ์ เก่งมาก",
      email: "test02@gmail.com",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีผู้ป่วย</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./ManageHospital.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ManageHospital() {
  const columns = [
    {
      title: "รายชื่อสถานพยาบาล",
      dataIndex: "hosname",
      key: "hosname",
    },

    {
      title: "รหัสสถานพยาบาล",
      dataIndex: "hosid",
      key: "hosid",
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
      hosname: "โรงพยาบาล A",
      hosid: "100001",
    },
    {
      id: "2",
      hosname: "โรงพยาบาล B",
      hosid: "100002",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีสถานพยาบาล</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

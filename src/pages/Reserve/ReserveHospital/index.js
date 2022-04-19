import React from "react";
import styles from "../Reserve.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function ReserveHospital() {
  const columns = [
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      key: "province",
    },

    {
      title: "เบอร์โทรศัพท์",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <a>ดูข้อมูลเพิ่มเติม {">"}</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      patname: "นางสมหมาย เก่งมาก",
      province: "นครศรีธรรมราช",
      tel: "081-574-9281",
    },
    {
      id: "2",
      patname: "นายสมศักดิ์ เก่งมาก",
      province: "กรุงเทพมหานคร",
      tel: "081-123-1234",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายชื่อผู้เข้ารับการรักษา</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

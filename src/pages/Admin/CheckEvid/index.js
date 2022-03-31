import React from "react";
import styles from "./CheckEvid.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function CheckEvid() {
  const columns = [
    {
      title: "ชื่อผู้ป่วย",
      dataIndex: "patname",
      key: "patname",
    },
    {
      title: "วันที่สมัคร",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "เวลาที่สมัคร",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "ประเภทหลักฐาน",
      dataIndex: "typeEvi",
      key: "typeEvi",
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
      patname: "นางสมหมาย เก่งมาก",
      date: "21-09-2564",
      time: "15.10.19",
      typeEvi: "ATK",
    },
    {
      id: "2",
      patname: "นายสมศักดิ์ เก่งมาก",
      date: "22-09-2564",
      time: "15.30.13",
      typeEvi: "RT-PCR",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ตรวจสอบหลักฐานการตรวจ COVID-19</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
}

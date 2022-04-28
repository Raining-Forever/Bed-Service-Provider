import React, { useEffect, useState } from "react";
import styles from "./ManageDoctor.module.css";
import { Table, Space } from "antd";
import axios from "axios";

export default function ManageDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [submitDelete, setSubmitDelete] = useState(false);
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
            <div
              className={styles.box2_button_text}
              onClick={async () => {
                await axios.delete(
                  `https://bed-service-provider.herokuapp.com/api/doctor/${record.id}`
                );
                alert("ลบบัญชีแล้ว");
                setSubmitDelete(!submitDelete);
              }}
            >
              ระงับบัญชี
            </div>
          </div>
        </Space>
      ),
    },
  ];

  // const data = [
  //   {
  //     id: "1",
  //     docname: "นพ.สมหมาย เก่งมาก",
  //     docid: "100001",
  //   },
  //   {
  //     id: "2",
  //     docname: "นพ.สมศักดิ์ เก่งมาก",
  //     docid: "100002",
  //   },
  // ];

  let temp = [];
  async function fetchData() {
    const doctor = await axios.get(
      `https://bed-service-provider.herokuapp.com/api/doctor/`
    );
    temp = doctor.data.map((v) => ({
      id: v.id,
      docname: v.title + v.firstname + " " + v.lastname,
      docid: v.licensenumber,
    }));
    setDoctors(temp);
  }

  useEffect(() => {
    fetchData();
  }, [submitDelete]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีแพทย์</h2>
        <div className={styles.box}>
          <Table
            columns={columns}
            dataSource={doctors}
            pagination={{
              defaultPageSize: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

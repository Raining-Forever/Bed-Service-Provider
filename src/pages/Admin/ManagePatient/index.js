import React, { useEffect, useState } from "react";
import styles from "./ManagePatient.module.css";
import { Table, Space } from "antd";
import axios from "axios";

export default function ManagePatient() {
  const [patients, setPatients] = useState([]);
  const [submitDelete, setSubmitDelete] = useState(false);

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
            <div
              className={styles.box2_button_text}
              onClick={async () => {
                await axios.delete(
                  `https://bed-service-provider.herokuapp.com/api/patient/${record.id}`
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
  //     patname: "นางสมหมาย เก่งมาก",
  //     email: "test01@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     patname: "นายสมศักดิ์ เก่งมาก",
  //     email: "test02@gmail.com",
  //   },
  // ];

  let temp = [];
  async function fetchData() {
    const patient = await axios.get(
      `https://bed-service-provider.herokuapp.com/api/patient/`
    );
    temp = patient.data.map((v) => ({
      id: v.id,
      patname: v.title + v.firstname + " " + v.lastname,
      email: v.email,
    }));
    setPatients(temp);
  }

  useEffect(() => {
    fetchData();
  }, [submitDelete]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีผู้ป่วย</h2>
        <div className={styles.box}>
          <Table
            columns={columns}
            dataSource={patients}
            pagination={{
              defaultPageSize: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./ManageHospital.module.css";
import { Table, Space } from "antd";
import axios from "axios";

export default function ManageHospital() {
  const [hospitals, setHospitals] = useState([]);
  const [submitDelete, setSubmitDelete] = useState(false);
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
            <div
              className={styles.box2_button_text}
              onClick={async () => {
                await axios.delete(
                  `https://bed-service-provider.herokuapp.com/api/hospital/${record.id}`
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
  //     hosname: "โรงพยาบาล A",
  //     hosid: "100001",
  //   },
  //   {
  //     id: "2",
  //     hosname: "โรงพยาบาล B",
  //     hosid: "100002",
  //   },
  // ];

  let temp = [];
  async function fetchData() {
    const hospital = await axios.get(
      `https://bed-service-provider.herokuapp.com/api/hospital/`
    );
    console.log(hospital.data);
    temp = hospital.data.map((v) => ({
      id: v.id,
      hosname: v.hospital_name,
      hosid: v.hospital_number,
    }));
    setHospitals(temp);
  }

  useEffect(() => {
    fetchData();
  }, [submitDelete]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>หน้าจัดการบัญชีสถานพยาบาล</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={hospitals} />
        </div>
      </div>
    </div>
  );
}

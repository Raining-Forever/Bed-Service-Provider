import React from "react";
import styles from "../Reserve.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function Reserve() {
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
      render: (text) => <a>{text}</a>,
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

  const columns2 = [
    {
      title: "ชื่อสถานพยาบาล",
      dataIndex: "hosname",
      key: "hosname",
    },
    {
      title: "จำนวนเตียง",
      dataIndex: "numOfbed",
      key: "numOfbed",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "เบอร์โทรศัพท์",
      key: "tel",
      dataIndex: "tel",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">จองเตียง</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
      date: "22/9/2564",
      time: "17.00.53",
      status: ["อยู่ระหว่างดำเนินการ"],
    },
  ];

  const data2 = [
    {
      id: "1",
      hosname: "โรงพยาบาลพระจอมเกล้าเจ้าคุณทหาร",
      numOfbed: "10/100",
      province: "กรุงเทพมหานคร",
      tel: "081-574-9281",
    },
    {
      id: "2",
      hosname: "โรงพยาบาล B",
      numOfbed: "10/850",
      province: "กรุงเทพมหานคร",
      tel: "081-123-1234",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>รายการจองเตียงของฉัน</h2>
        <div className={styles.box}>
          <Table columns={columns} dataSource={data} />
        </div>
        <h2 className={styles.header}>ค้นหาและจองเตียง</h2>
        <div className={styles.box}>
          <Table columns={columns2} dataSource={data2} />
        </div>
      </div>
    </div>
  );
}
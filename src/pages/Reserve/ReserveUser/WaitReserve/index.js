import React from "react";
import styles from "./WaitReserve.module.css";
import { Button, Table, Tag, Space } from "antd";

export default function WaitReserve() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <h2 className={styles.text}>
            บัญชีของท่านกำลังอยู่ระหว่างการตรวจสอบกรุณารอการตรวจสอบจากเจ้าหน้าที่
          </h2>
        </div>
        <Button type="primary">กลับสู่หน้าหลัก</Button>
      </div>
    </div>
  );
}

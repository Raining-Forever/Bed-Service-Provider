import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://cdn-icons-png.flaticon.com/512/4883/4883294.png"
          />
          <div className={styles.header}>
            สมัครสมาชิกสำเร็จ
          </div>
          <div className={styles.detail}>
            กรุณารอการตรวจสอบข้อมูลจากทางผู้ดูแล
          </div>
          <NavLink to="/">
            <Button type="primary">
              กลับสู่หน้าหลัก
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

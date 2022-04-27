import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function Chatbot() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://qr-official.line.me/sid/L/619ggrdg.png"
          />
          <div className={styles.header}>
            LINE Chatbot
          </div>
          <div className={styles.detail}>
            เป็นบริการที่ช่วยให้ผู้ที่ต้องการความช่วยเหลือด้านการใช้งานเว็บไซต์
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

import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function Accessdenied() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://cdn-icons-png.flaticon.com/512/7376/7376520.png"
          />
          <div className={styles.header}>
            อยู่ระหว่างปรึกษาแพทย์
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

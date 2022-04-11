import React from "react";
import styles from "./Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function Accessdeined() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://cdn-icons.flaticon.com/png/512/1779/premium/1779341.png?token=exp=1648991495~hmac=b2e87b6fa43fbac56d0425c16d334465"
          />
          <div className={styles.header}>
            ไม่สามารถเข้าถึงเว็บไซต์ได้
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

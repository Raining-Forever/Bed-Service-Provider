import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function AnotherContact() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ติดต่อหน่วยงานอื่น
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxcontainer}>
            <div className={styles.title}>
              เบอร์ติดต่อหน่วยงานที่สามารถช่วยเหลือให้คำปรึกษาในช่วงสถานการณ์การแพร่ระบาดของเชื้อไวรัสโควิด-19
            </div>
            <div className={styles.description}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

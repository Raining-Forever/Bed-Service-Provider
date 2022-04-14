import React from "react";
import styles from "./AppointmentDetail.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function AppointmentDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.header}>
          รายละเอียดการปรึกษาแพทย์
        </div>
        <div className={styles.box}>
          <div className={styles.description}>
            <img
              className={styles.imgaccessdeined}
              src="https://www.img.in.th/image/7RKVLM"
            />
            <div>
              ในการพบแพทย์ออนไลน์
              กรุณาเตรียมความพร้อมกับอุปกรณ์ของท่านก่อนถึงเวลาให้คำปรึกษา
            </div>
          </div>
          <div className={styles.description}>
            2
          </div>
        </div>
      </div>
    </div>
  );
}

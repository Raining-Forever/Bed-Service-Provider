import React from "react";
import styles from "./Doctor.module.css";
import DoctorDetail from "../../../../components/DoctorDetail";

export default function Doctor() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ลงทะเบียนแพทย์
          </div>
        </div>
        <div className={styles.box}>
          <DoctorDetail />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Hospital.module.css";
import HospitalDetail from "../../../../components/HospitalDetail";

export default function Hospital() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ลงทะเบียนสถานพยาบาล
          </div>
        </div>
        <div className={styles.box}>
          <HospitalDetail />
        </div>
      </div>
    </div>
  );
}

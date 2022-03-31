import React, { useState } from "react";
import styles from "../../Account/Account.module.css";
import Detaileditform from "../../../components/Detaileditform";

export default function Patientregister() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลผู้ป่วย
          </div>
        </div>
        <div className={styles.box}>
          <Detaileditform />
        </div>
      </div>
    </div>
  );
}

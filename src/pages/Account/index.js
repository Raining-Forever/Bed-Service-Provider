import React from "react";
import styles from "./Account.module.css";

import Navbar_patient from "../../components/Navbar/Navbar_patient";

import Detail from "./Detail";
import { Button } from "antd";

export default function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลผู้ป่วย
          </div>
          <Button
            type="primary"
            htmlType="submit"
          >
            แก้ไขข้อมูล
          </Button>
        </div>
        <div className={styles.box}>
          <Detail />
        </div>
      </div>
    </div>
  );
}

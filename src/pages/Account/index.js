import React, { useState } from "react";
import styles from "./Account.module.css";

import Navbar_patient from "../../components/Navbar/Navbar_patient";

import Detail from "../../components/Detail";
import Detaileditform from "../../components/Detaileditform";
import { Button } from "antd";

export default function Account() {
  const [isEdit, setIsEdit] = useState(false);

  function ToggleEditform() {
    setIsEdit(!isEdit);
  }
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลผู้ป่วย
          </div>
          {isEdit ? (
            <Button
              type="primary"
              onClick={ToggleEditform}
              danger
            >
              ยกเลิกแก้ไข
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={ToggleEditform}
            >
              แก้ไขข้อมูล
            </Button>
          )}
        </div>
        <div className={styles.box}>
          {isEdit ? (
            <Detaileditform />
          ) : (
            <Detail />
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./SelectRegister.module.css";

export default function SelectRegister() {
  return (
    <div className={styles.body}>
      <div className={styles.hregis}>
        โปรดเลือกสถานะท่านที่ต้องการลงทะเบียน
      </div>
      <div className={styles.wrapregisbutton}>
        <button className={styles.selectbutton}>
          ผู้ป่วย
          <img
            src="https://cdn-icons-png.flaticon.com/512/3436/3436944.png"
            alt="ผู้ป่วย"
            width="150"
            height="150"
          ></img>
        </button>
        <button className={styles.selectbutton}>
          หน่วยงานแพทย์
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063205.png"
            alt="หน่วยงานแพทย์"
            width="150"
            height="150"
          ></img>
        </button>
      </div>
    </div>
  );
}

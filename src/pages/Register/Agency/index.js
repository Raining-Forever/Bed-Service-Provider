import React from "react";
import styles from "../SelectRegister/SelectRegister.module.css";
import { NavLink } from "react-router-dom";

export default function SelectRegister() {
  return (
    <div className={styles.body}>
      <div className={styles.hregis}>
        โปรดเลือกลงทะเบียนหน่วยงานแพทย์ที่ต้องการลงทะเบียน
      </div>
      <div className={styles.wrapregisbutton}>
        <NavLink to="/register/agency/doctor">
          <button className={styles.selectbutton}>
            แพทย์
            <img
              src="https://cdn-icons-png.flaticon.com/512/921/921129.png"
              alt="แพทย์"
              width="150"
              height="150"
            ></img>
          </button>
        </NavLink>
        <NavLink to="/register/agency/hospital">
          <button className={styles.selectbutton}>
            สถานพยาบาล
            <img
              src="https://cdn-icons-png.flaticon.com/512/3063/3063205.png"
              alt="สถานพยาบาล"
              width="150"
              height="150"
            ></img>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

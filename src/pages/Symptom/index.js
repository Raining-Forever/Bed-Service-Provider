import React from "react";
import styles from "./Symtom.module.css";
import Navbar_patient from "../../components/Navbar/Navbar_patient";
import { Button } from "antd";

export default function Symtom() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar_patient />
      </div>
      <div className={styles.body}>
        <h2 className={styles.header}>ความรุนแรงของอาการของคุณ</h2>
        <div className={styles.box}>
          <div className={styles.content}>
            <img
              src="https://www.img.in.th/images/557da396176494a319a15f15ae7bc109.png"
              alt="557da396176494a319a15f15ae7bc109.png"
              border="0"
            />
            <div className={styles.text}>ไม่มีข้อมูลการประเมินอาการของท่าน</div>
            <Button type="primary">ทำแบบประเมิน</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

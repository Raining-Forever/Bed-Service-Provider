import React from "react";
import styles from "./Empty.module.css";
import { Button } from "antd";

export default function Form0(props) {
  return (
    <div className={styles.card}>
      <img
        src="https://www.img.in.th/images/557da396176494a319a15f15ae7bc109.png"
        alt="557da396176494a319a15f15ae7bc109.png"
        border="0"
      />
      <div className={styles.text}>ไม่มีข้อมูลการประเมินอาการของท่าน</div>
    </div>
  );
}

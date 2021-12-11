import React from "react";
import styles from "../Result.module.css";

export default function Green() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://www.img.in.th/images/af356c08e10fe2530d3b88bb9442eb56.png"
          alt="af356c08e10fe2530d3b88bb9442eb56.png"
          border="0"
          width="128px"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.header}>ผู้ป่วยสีแดง</div>
        <p>
          กลุ่มผู้ป่วยที่มีอาการหอบเหนื่อย หายใจลำบาก เอกซเรย์พบปอดอักเสบรุนแรง
          มีภาวะปอดบวม ความอิ่มตัวของเลือดน้อยกว่า 96%
          หรือลดลงของออกซิเจนมากกว่า 3% หลังออกแรง
          ของค่าที่วัดได้ในครั้งแรกที่ออกแรง
        </p>
      </div>
    </div>
  );
}

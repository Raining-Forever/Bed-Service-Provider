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
        <div className={styles.header}>
          ผู้ป่วยสีเขียว
        </div>
        <p>
          ผู้ป่วยอาการไม่มาก หรือไม่มีอาการ
          หรืออาการน้อยๆ เช่น มีไข้ ไอ น้ำมูก
          ตาแดง ผื่นขึ้น ไม่มีโรคร่วม
          พักรักษาที่โรงพยาบาลสนาม หรือฮอสพิเทล
          (Hospitel)
        </p>
      </div>
    </div>
  );
}

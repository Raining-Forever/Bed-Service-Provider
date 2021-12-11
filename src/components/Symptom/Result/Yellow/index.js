import React from "react";
import styles from "../Result.module.css";

export default function Yellow() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://www.img.in.th/images/0fb44414c5bd7c511d819bf8af068268.png"
          alt="0fb44414c5bd7c511d819bf8af068268.png"
          border="0"
          width="128px"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.header}>ผู้ป่วยสีเหลือง</div>
        <p>
          ผู้ป่วยที่มีอาการไม่รุนแรง แต่มีอาการเหนื่อยหอบ หายใจเร็ว
          มีปัจจัยเสี่ยงอาการรุนแรงหรือโรคร่วม เช่น อายุมากกว่า 60 ปี
          โรคปอดอุดกั้นเรื้อรัง โรคปอดเรื้อรังอื่นๆ ไตเรื้อรัง
          โรคหัวใจและหลอดเลือด โรคหัวใจแต่กำเนิด โรคหลอดเลือดสมอง
          เบาหวานที่คุมไม่ได้ ภาวะอ้วน น้ำหนักเกิน 90 กิโลกรัม ตับแข็ง
          ภูมิคุ้มกันต่ำ และเม็ดเลือดขาวน้อยกว่า 1000
        </p>
      </div>
    </div>
  );
}

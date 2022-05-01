import React from "react";
import styles from "../Accessdeined.module.css";

export default function BestPractice() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลเกี่ยวกับโควิด-19
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxcontainer}>
            <img
              className={styles.img}
              src="https://www.sikarin.com/wp-content/uploads/2021/05/14030435287273-1024x1024.jpg"
            />
            <div className={styles.item}>
              ขอบคุณรูปภาพจาก : โรงพยาบาลศิครินทร์
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxcontainer}>
            <img
              className={styles.img}
              src="https://chulalongkornhospital.go.th/kcmh/wp-content/uploads/2021/07/E51BE51E-E0F3-40B3-B1EE-7D07DD462CA2.jpg"
            />
            <div className={styles.item}>
              ขอบคุณรูปภาพจาก :
              โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxcontainer}>
            <img
              className={styles.img}
              src="https://www.sikarin.com/wp-content/uploads/2021/07/14430680139518-1024x1024.jpg"
            />
            <div className={styles.item}>
              ขอบคุณรูปภาพจาก : โรงพยาบาลศิครินทร์
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

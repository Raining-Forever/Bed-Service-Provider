import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Result.module.css";

export default function Green() {
  return (
    <div className={styles.card}>
      <div className={styles.container1}>
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
            หรือการรักษาตัวเองจากที่บ้าน(Home
            Isolation)
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.header}>
          ระบบขอแนะนำ
        </div>
        <div className={styles.descripsion}>
          <div className={styles.image}>
            <img
              src="https://www.img.in.th/images/3e4f390eae68fa69a73a4694aec4d16e.png"
              alt="3e4f390eae68fa69a73a4694aec4d16e.png"
              border="0"
            />
          </div>
          <div className={styles.wrapdes}>
            <div className={styles.header}>
              ปรึกษาแพทย์
            </div>
            <p className={styles.destext}>
              เนื่องจากอาการป่วยของท่านอยู่ในโซนสีเขียว
              ทางระบบของเราขอแนะนำบริการการรับคำปรึกษาจากแพทย์โดยที่ทางผู้ป่วยสามารถรับคำปรึกษาจากแพทย์
              ได้ฟรีจากที่บ้านของท่านเอง
              เพื่อให้ท่านได้ทราบถึงวิธีการปฏิบัติตนที่ถูกต้องเมื่อป่วยเป็นโรคโควิด-19
            </p>
            <div className={styles.buttonapp}>
              <NavLink to="/appoint">
                ปรึกษาแพทย์
                <RightOutlined />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

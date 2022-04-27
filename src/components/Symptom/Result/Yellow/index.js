import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Result.module.css";

export default function Yellow(props) {
  return (
    <div className={styles.card}>
      <div className={styles.container1}>
        <div className={styles.image}>
          <img
            src="https://www.img.in.th/images/0fb44414c5bd7c511d819bf8af068268.png"
            alt="0fb44414c5bd7c511d819bf8af068268.png"
            border="0"
            width="128px"
          />
        </div>
        <div className={styles.text}>
          <div className={styles.header}>
            ผู้ป่วยสีเหลือง
          </div>
          <p>
            ผู้ป่วยที่มีอาการไม่รุนแรง
            แต่มีอาการเหนื่อยหอบ หายใจเร็ว
            มีปัจจัยเสี่ยงอาการรุนแรงหรือโรคร่วม
            เช่น อายุมากกว่า 60 ปี
            โรคปอดอุดกั้นเรื้อรัง
            โรคปอดเรื้อรังอื่นๆ ไตเรื้อรัง
            โรคหัวใจและหลอดเลือด โรคหัวใจแต่กำเนิด
            โรคหลอดเลือดสมอง เบาหวานที่คุมไม่ได้
            ภาวะอ้วน น้ำหนักเกิน 90 กิโลกรัม
            ตับแข็ง ภูมิคุ้มกันต่ำ
            และเม็ดเลือดขาวน้อยกว่า 1000
          </p>
        </div>
      </div>
      {props.onsuggest ? (
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
                เนื่องจากอาการป่วยของท่านอยู่ในโซนเหลืองและแดง
                ทางระบบของเราขอแนะนำบริการการรับคำปรึกษาจากแพทย์โดยที่ทางผู้ป่วยสามารถรับคำปรึกษาจากแพทย์
                ได้ฟรีจากที่บ้านของท่านเอง
                เพื่อให้ท่านได้ทราบถึงวิธีการปฏิบัติตนที่ถูกต้องเมื่อป่วยเป็นโรคโควิด-19
              </p>
              <div className={styles.buttonapp}>
                <NavLink to="/appoint">
                  ปรึกษาแพทย์ <RightOutlined />
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.descripsion}>
            <div className={styles.image}>
              <img
                src="https://www.img.in.th/images/f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                alt="f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                border="0"
              />
            </div>
            <div className={styles.wrapdes}>
              <div className={styles.header}>
                ค้นหาและจองเตียง
              </div>
              <p className={styles.destext}>
                เนื่องจากอาการป่วยของท่านอยู่ในโซนเหลืองและแดง
                ทางระบบของเราขอแนะนำบริการการค้นหาและจองเตียงสำหรับผู้ป่วยที่ต้องการเข้ารับรักษาตัวที่โรงพยาบาลหรือโรงพยาบาลสนาม
              </p>
              <div className={styles.buttonapp}>
                <NavLink to="/reserve">
                  ค้นหาและจองเตียง{" "}
                  <RightOutlined />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

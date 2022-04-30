import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://cdn-icons-png.flaticon.com/512/4883/4883294.png"
          />
          <div className={styles.header}>
            สมัครสมาชิกสำเร็จ
          </div>
          <div className={styles.detail}>
            กรุณารอการตรวจสอบข้อมูลจากทางผู้ดูแล
          </div>
          <NavLink to="/">
            <Button type="primary">
              กลับสู่หน้าหลัก
            </Button>
          </NavLink>
        </div>
        <div className={styles.box2}>
          <div className={styles.header}>
            ขั้นตอนการใช้งาน
          </div>
          <div className={styles.box2_bottom}>
            <div className={styles.box2_items}>
              <NavLink to="/form">
                <div
                  className={
                    styles.box2_items_text
                  }
                >
                  1. ประเมินอาการป่วย
                </div>

                <img
                  src="https://www.img.in.th/images/318b4d6279ff8c57cf7e382ede2a9c92.png"
                  alt="318b4d6279ff8c57cf7e382ede2a9c92.png"
                  border="0"
                />
              </NavLink>
            </div>
            <div className={styles.box2_items}>
              <NavLink to="/appoint">
                <div
                  className={
                    styles.box2_items_text
                  }
                >
                  2. รับคำปรึกษาจากแพทย์
                </div>

                <img
                  src="https://www.img.in.th/images/3e4f390eae68fa69a73a4694aec4d16e.png"
                  alt="3e4f390eae68fa69a73a4694aec4d16e.png"
                  border="0"
                />
              </NavLink>
            </div>
            <div className={styles.box2_items}>
              <NavLink to="/reserve">
                <div
                  className={
                    styles.box2_items_text
                  }
                >
                  3. ค้นหาและจองเตียง
                </div>

                <img
                  src="https://www.img.in.th/images/f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                  alt="f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                  border="0"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://qr-official.line.me/sid/L/619ggrdg.png"
          />
          <div className={styles.header}>
            LINE Chatbot
          </div>
          <div className={styles.detail}>
            เป็นบริการที่ช่วยให้ผู้ที่ต้องการความช่วยเหลือด้านการใช้งานเว็บไซต์
          </div>
          <NavLink to="/">
            <Button type="primary">
              กลับสู่หน้าหลัก
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import styles from "./AgencyHomepage.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function AgencyHomepage() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box1}>
          <div className={styles.img1}>
            <img src="https://www.img.in.th/images/5da81e0bb15358c4f11f42f31f3ac0cd.png" />
          </div>
          <div className={styles.box1_body}>
            <div className={styles.top}>
              <div
                className={styles.headerbanner}
              >
                รายงานผู้ป่วยโควิด-19 ประจำวันนี้
              </div>
            </div>
            <div className={styles.box1_row}>
              <div className={styles.left}>
                <div
                  className={styles.patienttoday}
                >
                  ผู้ป่วยโควิดในปัจจุบัน
                </div>
                <div
                  className={styles.patienttoday}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2659/2659980.png"
                    className={styles.iconcovid}
                  />
                  185,515
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.item1}>
                  <div
                    className={
                      styles.patienttoday
                    }
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
                      className={styles.iconcovid}
                    />
                    หายแล้ววันนี้
                  </div>
                  <div
                    className={
                      styles.patienttoday
                    }
                  >
                    13,527
                  </div>
                </div>
                <div className={styles.item2}>
                  <div
                    className={
                      styles.patienttoday
                    }
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3782/3782099.png"
                      className={styles.iconcovid}
                    />
                    ผู้ป่วยรายใหม่
                  </div>
                  <div
                    className={
                      styles.patienttoday
                    }
                  >
                    13,897
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.box2_top}>
            <p>ขั้นตอนการใช้งาน</p>
          </div>
          <div className={styles.box2_bottom}>
            <div className={styles.box2_items}>
              <NavLink to="/appoint">
                <div
                  className={
                    styles.box2_items_text
                  }
                >
                  1. รายการให้คำปรึกษาผู้ป่วย
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
                  2. รายการการจองเตียง
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

        <div className={styles.box3}>
          <div className={styles.box3_left}>
            <img
              className={styles.box3_image}
              src="https://www.img.in.th/images/89969f555b003d91d1b8b5582289044a.png"
              alt="89969f555b003d91d1b8b5582289044a.png"
              border="0"
            />
          </div>
          <div className={styles.box3_right}>
            <div className={styles.box3_content}>
              <div className={styles.box3_header}>
                รายการให้คำปรึกษาผู้ป่วย
              </div>
              <p>
                พบแพทย์เพื่อประเมินอาการ
                และให้คำปรึกษาตาม
                อาการความรุนแรงของผู้ป่วย
              </p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">
                ทำแบบประเมิน
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.box4}>
          <div className={styles.box4_left}>
            <div className={styles.box4_text}>
              <div className={styles.header}>
                รายการการจองเตียง
              </div>
              <p>
                ค้นหาสถานที่ที่ต้องการจองเตียงและจองเตียง
              </p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">
                นัดพบแพทย์
              </Button>
            </div>
          </div>
          <div className={styles.box4_right}>
            <img
              src="https://www.img.in.th/images/0f6459246d2ac7e620e544a1d9f74945.png"
              alt="0f6459246d2ac7e620e544a1d9f74945.png"
              border="0"
            />
          </div>
        </div>

        {/* <div className={styles.box5}>
          <div className={styles.box5_left}>
            <img
              src="https://www.img.in.th/images/e50ea81d7b4685534a82636623acc157.png"
              alt="e50ea81d7b4685534a82636623acc157.png"
              border="0"
            />
          </div>
          <div className={styles.box5_right}>
            <div className={styles.box5_text}>
              <div className={styles.header}>
                ค้นหาและจองคิวเพื่อรับเตียง
              </div>
              <p>
                ค้นหาสถานที่ที่ต้องการจองเตียงและจองเตียง
              </p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">
                ค้นหาและจองคิว
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

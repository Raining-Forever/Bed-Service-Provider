import React from "react";
import styles from "./Homepage.module.css";
import Navbar_patient from "../../components/Navbar/Navbar_patient";
import { Button } from "antd";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box1}>
          <div className={styles.img1}>
            <img src="https://www.img.in.th/images/5da81e0bb15358c4f11f42f31f3ac0cd.png" />
          </div>
          <div className={styles.box1_body}>
            <div className={styles.top}>
              <p>รายงานผู้ป่วยโควิด-19 ประจำวันนี้</p>
            </div>
            <div className={styles.box1_row}>
              <div className={styles.left}>
                <p>ผู้ป่วยโควิดในปัจจุบัน</p>
                <p>185,515</p>
              </div>
              <div className={styles.right}>
                <div className={styles.item1}>
                  <p>หายแล้ววันนี้</p>
                  <p>13,527</p>
                </div>
                <div className={styles.item2}>
                  <p>ผู้ป่วยรายใหม่</p>
                  <p>13,897</p>
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
              <div className={styles.box2_items_text}>ประเมินอาการป่วย</div>
              <img
                src="https://www.img.in.th/images/318b4d6279ff8c57cf7e382ede2a9c92.png"
                alt="318b4d6279ff8c57cf7e382ede2a9c92.png"
                border="0"
              />
            </div>
            <div className={styles.box2_items}>
              <div className={styles.box2_items_text}>รับคำปรึกษาจากแพทย์</div>
              <img
                src="https://www.img.in.th/images/3e4f390eae68fa69a73a4694aec4d16e.png"
                alt="3e4f390eae68fa69a73a4694aec4d16e.png"
                border="0"
              />
            </div>
            <div className={styles.box2_items}>
              <div className={styles.box2_items_text}>ค้นหาและจองเตียง</div>
              <img
                src="https://www.img.in.th/images/f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                alt="f12fd9c2289aa5ae7cd18b14dc5cd2f9.png"
                border="0"
              />
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
                ประเมินความรุนแรงของอาการ
              </div>
              <p>
                ทำแบบประเมินความรุนแรงของอาการจากโรคโควิด-19
                เพื่อวินิจฉัยอาการในระดับเบื้องต้น
              </p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">ทำแบบประเมิน</Button>
            </div>
          </div>
        </div>

        <div className={styles.box4}>
          <div className={styles.box4_left}>
            <div className={styles.box4_text}>
              <div className={styles.header}>นัดรับปรึกษาจากแพทย์</div>
              <p>
                พบแพทย์เพื่อประเมินอาการ และให้คำปรึกษาตาม
                อาการความรุนแรงของผู้ป่วย
              </p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">นัดพบแพทย์</Button>
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

        <div className={styles.box5}>
          <div className={styles.box5_left}>
            <img
              src="https://www.img.in.th/images/e50ea81d7b4685534a82636623acc157.png"
              alt="e50ea81d7b4685534a82636623acc157.png"
              border="0"
            />
          </div>
          <div className={styles.box5_right}>
            <div className={styles.box5_text}>
              <div className={styles.header}>ค้นหาและจองคิวเพื่อรับเตียง</div>
              <p>ค้นหาสถานที่ที่ต้องการจองเตียงและจองเตียง</p>
            </div>
            <div className={styles.box_button}>
              <Button type="primary">ค้นหาและจองคิว</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

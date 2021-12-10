import React from "react";
import styles from "./Form.module.css";
import Navbar_patient from "../../../components/Navbar/Navbar_patient";
import { Button, Checkbox, DatePicker } from "antd";

import "moment/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar_patient />
      </div>
      <div className={styles.body}>
        <h2 className={styles.header}>ประเมินความรุนแรงของอาการ</h2>
        <div className={styles.box}>
          <div className={styles.first}>
            <h3>
              ส่วนที่ 1 ท่านมีอาการดังต่อไปนี้หรือไม่ ในช่วง 14 วันที่ผ่านมา
              (หากไม่มีอาการ ไม่ต้องทำเครื่องหมายใดๆ)
            </h3>
            <div className={styles.first_checkbox}>
              <div>
                <Checkbox className={styles.checkbox} value="1.1">
                  มีไข้ (37.5 องศา ขึ้นไป)
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.2">
                  ไอ
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.3">
                  มีน้ำมูก
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.4">
                  เจ็บคอ
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.5">
                  ไม่ได้กลิ่น
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.6">
                  ไม่รู้รส
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.7">
                  ตาแดง
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.8">
                  มีผื่น
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.9">
                  ถ่ายเหลว
                </Checkbox>
              </div>
              <div>
                <Checkbox className={styles.checkbox} value="1.10">
                  ถ่ายเหลวบ่อยครั้ง
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.11">
                  แน่นหน้าอก
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.12">
                  อ่อนเพลีย
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.13">
                  เวียนหัว
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.14">
                  ปอดอักเสบ
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.15">
                  อาการแทรกซ้อนจากโรคประจำตัว
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.16">
                  หายใจเจ็บ
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.17">
                  ตอบสนองช้า
                </Checkbox>
                <Checkbox className={styles.checkbox} value="1.18">
                  ไม่รู้สึกตัว
                </Checkbox>
              </div>
            </div>
            <div className={styles.date}>
              <div>ระบุวันที่เริ่มมีอาการป่วย :</div>
              <DatePicker locale={locale} format="DD/MM/YYYY" />
            </div>
          </div>
          <div className={styles.second}>
            <h3>
              ส่วนที่ 2 ท่านมีภาวะโรคประจำตัวนี้หรือไม่
              (หากไม่มีอาการไม่ต้องทำเครื่องหมายใดๆ)
            </h3>
            <div>
              <Checkbox className={styles.main_checkbox} value="2.1">
                โรคเบาหวาน
              </Checkbox>
              <subcheckbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.1.1"
                  disabled
                >
                  มีอาการแทรกซ้อน
                </Checkbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.1.2"
                  disabled
                >
                  ไม่มีอาการแทรกซ้อน
                </Checkbox>
              </subcheckbox>

              <Checkbox className={styles.main_checkbox} value="2.2">
                โรคเบาหวาน
              </Checkbox>
              <subcheckbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.2.1"
                  disabled
                >
                  มีอาการแทรกซ้อน
                </Checkbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.2.2"
                  disabled
                >
                  ไม่มีอาการแทรกซ้อน
                </Checkbox>
              </subcheckbox>

              <Checkbox className={styles.main_checkbox} value="2.3">
                โรคหัวใจและหลอดเลือด
              </Checkbox>
              <subcheckbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.3.1"
                  disabled
                >
                  มีภาวะหัวใจล้มเหลว
                </Checkbox>
              </subcheckbox>

              <Checkbox className={styles.main_checkbox} value="2.4">
                โรคปอด
              </Checkbox>
              <subcheckbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.4.1"
                  disabled
                >
                  โรคหอบหืด
                </Checkbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.4.2"
                  disabled
                >
                  โรคปอดเรื้อรังแต่ไม่หอบหืด
                </Checkbox>
              </subcheckbox>

              <Checkbox className={styles.main_checkbox} value="2.5">
                เนื้องอกร้าย
              </Checkbox>
              <subcheckbox>
                <Checkbox
                  className={styles.sub_checkbox}
                  value="2.5.1"
                  disabled
                >
                  มีตรวจพบมะเร็ง
                </Checkbox>
              </subcheckbox>

              <Checkbox className={styles.main_checkbox} value="2.6">
                โรคข้ออักเสบรูมาตอยด์
              </Checkbox>

              <Checkbox className={styles.main_checkbox} value="2.7">
                ยากดภูมิคุ้มกัน
              </Checkbox>

              <Checkbox className={styles.main_checkbox} value="2.8">
                โรคตับเรื้อรัง
              </Checkbox>
            </div>
          </div>
          <div className={styles.warpbutton}>
            <Button type="primary">ส่งแบบประเมิน</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

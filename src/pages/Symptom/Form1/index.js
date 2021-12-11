import React from "react";
import styles from "./Form1.module.css";
import { Button, Checkbox, Form, DatePicker, Radio } from "antd";

import { useState } from "react";

import "moment/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";

export default function Form1(props) {
  function onFinish(values) {
    // props.setPage(2);
    // props.setValue(values)
    console.log(values);
  }

  const [disable, setDisable] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ประเมินความรุนแรงของอาการ</h2>
        <div className={styles.box}>
          <Form name="Q1_Q2" onFinish={onFinish}>
            <div className={styles.first}>
              <h3>
                ส่วนที่ 1 ท่านมีอาการดังต่อไปนี้หรือไม่ ในช่วง 14 วันที่ผ่านมา
                (หากไม่มีอาการ ไม่ต้องทำเครื่องหมายใดๆ)
              </h3>
              <Form.Item name="Q1_1">
                <Checkbox.Group className={styles.first_checkbox}>
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
                </Checkbox.Group>
              </Form.Item>

              <Form.Item name="Q1_2">
                <div className={styles.date}>
                  <div>ระบุวันที่เริ่มมีอาการป่วย :</div>
                  <DatePicker locale={locale} format="DD/MM/YYYY" />
                </div>
              </Form.Item>
            </div>

            <div className={styles.second}>
              <h3>
                ส่วนที่ 2 ท่านมีภาวะโรคประจำตัวนี้หรือไม่
                (หากไม่มีอาการไม่ต้องทำเครื่องหมายใดๆ)
              </h3>
              <Form.Item name="Q2">
                <Checkbox.Group className={styles.subsecond}>
                  <Checkbox className={styles.main_checkbox} value="2.1">
                    โรคเบาหวาน
                  </Checkbox>
                  <Radio.Group className={styles.subcheckbox_group}>
                    <Radio className={styles.sub_checkbox} value="2.1.1">
                      มีอาการแทรกซ้อน
                    </Radio>
                    <Radio className={styles.sub_checkbox} value="2.1.2">
                      ไม่มีอาการแทรกซ้อน
                    </Radio>
                  </Radio.Group>

                  <Checkbox className={styles.main_checkbox} value="2.2">
                    โรคเบาหวาน
                  </Checkbox>
                  <Radio.Group className={styles.subcheckbox_group}>
                    <Radio className={styles.sub_checkbox} value="2.2.1">
                      มีอาการแทรกซ้อน
                    </Radio>
                    <Radio className={styles.sub_checkbox} value="2.2.2">
                      ไม่มีอาการแทรกซ้อน
                    </Radio>
                  </Radio.Group>

                  <Checkbox className={styles.main_checkbox} value="2.3">
                    โรคหัวใจและหลอดเลือด
                  </Checkbox>
                  <div className={styles.subcheckbox_group}>
                    <Checkbox className={styles.sub_checkbox} value="2.3.1">
                      มีภาวะหัวใจล้มเหลว
                    </Checkbox>
                  </div>

                  <Checkbox className={styles.main_checkbox} value="2.4">
                    โรคปอด
                  </Checkbox>
                  <Radio.Group className={styles.subcheckbox_group}>
                    <Radio className={styles.sub_checkbox} value="2.4.1">
                      โรคหอบหืด
                    </Radio>
                    <Radio className={styles.sub_checkbox} value="2.4.2">
                      โรคปอดเรื้อรังแต่ไม่หอบหืด
                    </Radio>
                  </Radio.Group>

                  <Checkbox className={styles.main_checkbox} value="2.5">
                    เนื้องอกร้าย
                  </Checkbox>
                  <div className={styles.subcheckbox_group}>
                    <Checkbox className={styles.sub_checkbox} value="2.5.1">
                      มีตรวจพบมะเร็ง
                    </Checkbox>
                  </div>

                  <Checkbox className={styles.main_checkbox} value="2.6">
                    โรคข้ออักเสบรูมาตอยด์
                  </Checkbox>

                  <Checkbox className={styles.main_checkbox} value="2.7">
                    ยากดภูมิคุ้มกัน
                  </Checkbox>

                  <Checkbox className={styles.main_checkbox} value="2.8">
                    โรคตับเรื้อรัง
                  </Checkbox>
                </Checkbox.Group>
              </Form.Item>
            </div>

            <Form.Item>
              <div className={styles.warpbutton}>
                <Button htmlType="submit" type="primary">
                  หน้าต่อไป
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

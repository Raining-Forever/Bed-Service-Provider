import React from "react";
import styles from "./Form1.module.css";

import { get, sum } from "lodash";

import { Button, Checkbox, Form, DatePicker, Radio } from "antd";

import { useState } from "react";

import "moment/locale/th";
import locale from "antd/es/date-picker/locale/th_TH";
import { useScoreContext } from "../../../context/ScoreContext";

const score_map = {
  "1_1": 1,
  "1_2": 2,
  "1_3": 3,
  "1_4": 1,
  "1_5": 2,
  "1_6": 3,
  "1_7": 1,
  "1_8": 2,
  "1_9": 3,
  "1_10": 1,
  "1_11": 2,
  "1_12": 3,
  "1_13": 1,
  "1_14": 2,
  "1_15": 3,
  "1_16": 1,
  "1_17": 2,
  "1_18": 3,
  "2_1_1": 99,
  "2_1_2": 50,
  "2_2_1": 44,
  "2_2_2": 11,
  "2_3_1": 22,
  "2_3_2": 88,
  "2_6": 1,
  "2_7": 2,
  "2_8": 3,
};

export default function Form1(props) {
  const [score, setScore] = useScoreContext();
  const [radioState, setRadioState] = useState([true, true, true, true, true]);

  function onFinish(values) {
    props.setPage(2);
    // props.setValue(values)
    console.log(values.Q1_1);
    const result = get(values, "Q1_1", []).map((v) => score_map[v]);
    const result2_1 = Array(5)
      .fill()
      .map((_, i) => {
        const key = values[`Q2_${i + 1}_radio`];
        return score_map[key];
      })
      .filter((v) => v !== undefined);
    const result2_2 = get(values, "Q2_2", []).map((v) => score_map[v]);
    const result2 = [...result2_1, ...result2_2];

    setScore(sum([...result, ...result2]));

    console.log("result", result);
    console.log("result2", result2);
    console.log(values);
  }

  const HandleCheck = (index) => {
    setRadioState((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

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
                    <Checkbox className={styles.checkbox} value="1_1">
                      มีไข้ (37.5 องศา ขึ้นไป)
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_2">
                      ไอ
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_3">
                      มีน้ำมูก
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_4">
                      เจ็บคอ
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_5">
                      ไม่ได้กลิ่น
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_6">
                      ไม่รู้รส
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_7">
                      ตาแดง
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_8">
                      มีผื่น
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_9">
                      ถ่ายเหลว
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox className={styles.checkbox} value="1_10">
                      ถ่ายเหลวบ่อยครั้ง
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_11">
                      แน่นหน้าอก
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_12">
                      อ่อนเพลีย
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_13">
                      เวียนหัว
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_14">
                      ปอดอักเสบ
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_15">
                      อาการแทรกซ้อนจากโรคประจำตัว
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_16">
                      หายใจเจ็บ
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_17">
                      ตอบสนองช้า
                    </Checkbox>
                    <Checkbox className={styles.checkbox} value="1_18">
                      ไม่รู้สึกตัว
                    </Checkbox>
                  </div>
                </Checkbox.Group>
              </Form.Item>

              <div className={styles.date}>
                <div>ระบุวันที่เริ่มมีอาการป่วย :</div>
                <Form.Item name="Q1_2">
                  <DatePicker locale={locale} format="DD/MM/YYYY" />
                </Form.Item>
              </div>
            </div>

            <div className={styles.second}>
              <h3>
                ส่วนที่ 2 ท่านมีภาวะโรคประจำตัวนี้หรือไม่
                (หากไม่มีอาการไม่ต้องทำเครื่องหมายใดๆ)
              </h3>
              <Form.Item name="Q2_1">
                <Checkbox.Group className={styles.subsecond}>
                  <Checkbox
                    className={styles.main_checkbox}
                    id="2_1"
                    value="2_1"
                    onChange={() => HandleCheck(0)}
                  >
                    โรคเบาหวาน
                  </Checkbox>
                  <Form.Item name="Q2_1_radio">
                    <Radio.Group
                      className={styles.subcheckbox_group}
                      id="Q2_1_radio"
                      disabled={radioState[0]}
                    >
                      <Radio className={styles.sub_checkbox} value="2_1_1">
                        มีอาการแทรกซ้อน
                      </Radio>
                      <Radio className={styles.sub_checkbox} value="2_1_2">
                        ไม่มีอาการแทรกซ้อน
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Checkbox
                    className={styles.main_checkbox}
                    onChange={() => HandleCheck(1)}
                    value="2_2"
                  >
                    โรคเบาหวาน
                  </Checkbox>
                  <Form.Item name="Q2_2_radio">
                    <Radio.Group
                      className={styles.subcheckbox_group}
                      disabled={radioState[1]}
                    >
                      <Radio className={styles.sub_checkbox} value="2_2_1">
                        มีอาการแทรกซ้อน
                      </Radio>
                      <Radio className={styles.sub_checkbox} value="2_2_2">
                        ไม่มีอาการแทรกซ้อน
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Checkbox
                    className={styles.main_checkbox}
                    onChange={() => HandleCheck(2)}
                    value="2_3"
                  >
                    โรคหัวใจและหลอดเลือด
                  </Checkbox>
                  <Form.Item name="Q2_3_radio">
                    <Radio.Group
                      className={styles.subcheckbox_group}
                      disabled={radioState[2]}
                    >
                      <Radio className={styles.sub_checkbox} value="2_3_1">
                        มีภาวะหัวใจล้มเหลว
                      </Radio>
                      <Radio className={styles.sub_checkbox} value="2_3_2">
                        ไม่มีภาวะหัวใจล้มเหลว
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Checkbox
                    className={styles.main_checkbox}
                    onChange={() => HandleCheck(3)}
                    value="2_4"
                  >
                    โรคปอด
                  </Checkbox>
                  <Form.Item name="Q2_4_radio">
                    <Radio.Group
                      className={styles.subcheckbox_group}
                      disabled={radioState[3]}
                    >
                      <Radio className={styles.sub_checkbox} value="2_4_1">
                        โรคหอบหืด
                      </Radio>
                      <Radio className={styles.sub_checkbox} value="2_4_2">
                        โรคปอดเรื้อรังแต่ไม่หอบหืด
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Checkbox
                    className={styles.main_checkbox}
                    onChange={() => HandleCheck(4)}
                    value="2_5"
                  >
                    เนื้องอกร้าย
                  </Checkbox>
                  <Form.Item name="Q2_5_radio">
                    <Radio.Group
                      className={styles.subcheckbox_group}
                      disabled={radioState[4]}
                    >
                      <Radio className={styles.sub_checkbox} value="2_5_1">
                        มีตรวจพบมะเร็ง
                      </Radio>
                      <Radio className={styles.sub_checkbox} value="2_5_2">
                        ไม่มีตรวจพบมะเร็ง
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item name="Q2_2">
                <Checkbox.Group>
                  <Checkbox className={styles.main_checkbox} value="2_6">
                    โรคข้ออักเสบรูมาตอยด์
                  </Checkbox>

                  <Checkbox className={styles.main_checkbox} value="2_7">
                    ยากดภูมิคุ้มกัน
                  </Checkbox>

                  <Checkbox className={styles.main_checkbox} value="2_8">
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

import React from "react";
import styles from "./Form2.module.css";
import { Button, Radio, Form } from "antd";

import { get, sum } from "lodash";

import { useScoreContext } from "../../../context/ScoreContext";

const score_map = {
  Q3_1_1: 0,
  Q3_1_2: 1,
  Q3_1_3: 2,
  Q3_2_1: 0,
  Q3_2_2: 2,
  Q3_2_3: 5,
  Q3_3_1: 0,
  Q3_3_2: 4,
  Q3_3_3: 5,
};

export default function Form2(props) {
  const [score, setScore] = useScoreContext();

  function onFinish(values) {
    props.setPage(0);
    // props.setValue(values)

    const result3 = Array(3)
      .fill()
      .map((_, i) => {
        const key = values[`Q3_${i + 1}`];
        return score_map[key];
      })
      .filter((v) => v !== undefined);

    setScore(score + sum(result3));
    console.log("result3", result3);
    console.log(values);
  }
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ประเมินความรุนแรงของอาการ</h2>
        <div className={styles.box}>
          <Form name="Q3" onFinish={onFinish}>
            <h3>ส่วนที่ 3 ตัวชี้วัดออกซิเจน(ไม่บังคับ)</h3>
            <div>
              <div className={styles.option}>
                <div className={styles.text}>
                  อัตราการหายใจ, การหายใจ/นาที (Respiratory rate, breaths/min )
                </div>
                <div className={styles.wrapbutton}>
                  <Form.Item name="Q3_1">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button className={styles.button} value="Q3_1_1">
                        &lt;=22
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_1_2">
                        23-28
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_1_3">
                        &gt;=28
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.text}>
                  ตัววัดออกซิเจน (Pulse oximetry)
                </div>
                <div className={styles.wrapbutton}>
                  <Form.Item name="Q3_2">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button className={styles.button} value="Q3_2_1">
                        &gt;=92%
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_2_2">
                        89-92%
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_2_3">
                        &lt;=88%
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
              <div className={styles.option}>
                <div className={styles.text}>
                  อัตราการไหลของ O2 L/min (O2 flow rate L/min)
                </div>
                <div className={styles.wrapbutton}>
                  <Form.Item name="Q3_3">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button className={styles.button} value="Q3_3_1">
                        &lt;=2
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_3_2">
                        3-4
                      </Radio.Button>
                      <Radio.Button className={styles.button} value="Q3_3_3">
                        5-6
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className={styles.sendbutton}>
              <Button htmlType="submit" type="primary">
                ส่งแบบประเมิน
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Form2.module.css";
import Navbar_patient from "../../../components/Navbar/Navbar_patient";
import { Button, Radio } from "antd";

export default function Form2() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar_patient />
      </div>
      <div className={styles.body}>
        <h2 className={styles.header}>ประเมินความรุนแรงของอาการ</h2>
        <div className={styles.box}>
          <h3>ส่วนที่ 3 ตัวชี้วัดออกซิเจน(ไม่บังคับ)</h3>
          <div>
            <div className={styles.option}>
              <div className={styles.text}>
                อัตราการหายใจ, การหายใจ/นาที (Respiratory rate, breaths/min )
              </div>
              <div className={styles.wrapbutton}>
                <Radio.Group buttonStyle="solid">
                  <Radio.Button className={styles.button} value="a">
                    &lt;=22
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="b">
                    23-28
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="c">
                    &gt;=28
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <div className={styles.option}>
              <div className={styles.text}>ตัววัดออกซิเจน (Pulse oximetry)</div>
              <div className={styles.wrapbutton}>
                <Radio.Group buttonStyle="solid">
                  <Radio.Button className={styles.button} value="a">
                    &gt;=92%
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="b">
                    89-92%
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="c">
                    &lt;=88%
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <div className={styles.option}>
              <div className={styles.text}>
                อัตราการไหลของ O2 L/min (O2 flow rate L/min)
              </div>
              <div className={styles.wrapbutton}>
                <Radio.Group buttonStyle="solid">
                  <Radio.Button className={styles.button} value="a">
                    &lt;=2
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="b">
                    3-4
                  </Radio.Button>
                  <Radio.Button className={styles.button} value="c">
                    5-6
                  </Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className={styles.sendbutton}>
            <Button type="primary">ส่งแบบประเมิน</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

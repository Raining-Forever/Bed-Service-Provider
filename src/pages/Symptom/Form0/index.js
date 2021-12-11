import React from "react";
import styles from "./Form0.module.css";
import { Button } from "antd";

import Empty from "../../../components/Symptom/Result/Empty";
import Red from "../../../components/Symptom/Result/Red";
import Yellow from "../../../components/Symptom/Result/Yellow";
import Green from "../../../components/Symptom/Result/Green";

export default function Form0(props) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.header}>ความรุนแรงของอาการของคุณ</h2>
        <div className={styles.box}>
          {/* <div className={styles.content}>
            <img
              src="https://www.img.in.th/images/557da396176494a319a15f15ae7bc109.png"
              alt="557da396176494a319a15f15ae7bc109.png"
              border="0"
            />
            <div className={styles.text}>ไม่มีข้อมูลการประเมินอาการของท่าน</div>
          </div> */}
          {}
          <Empty />
        </div>

        <Button onClick={() => props.setPage(1)} type="primary">
          ทำแบบประเมิน
        </Button>
      </div>
    </div>
  );
}
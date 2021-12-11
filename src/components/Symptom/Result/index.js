import React from "react";
import styles from "./Result.module.css";

import Red from "./Red";
import Green from "./Green";
import Yellow from "./Yellow";
import Empty from "./Empty";

export default function Result() {
  return (
    <div className={styles.body}>
      <h2 className={styles.header}>ความรุนแรงของอาการของคุณ</h2>
      <div className={styles.box}>
        {/* <Red /> */}
        {/* <Green /> */}
        {/* <Yellow /> */}
        <Empty />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Account.module.css";

import Navbar_patient from "../../components/Navbar/Navbar_patient";

import Detail from "./Detail";

export default function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <Detail />
        </div>
      </div>
    </div>
  );
}

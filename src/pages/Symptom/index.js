import React from "react";
import styles from "./Symtom.module.css";

import Form0 from "./Form0";
import Form1 from "./Form1";
import Form2 from "./Form2";

import Result from "../../components/Symptom/Result";

import { useState, useEffect } from "react";

export default function Symtom(props) {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <div className={styles.body}>
      {page === 0 && <Form0 setPage={setPage} />}
      {page === 1 && <Form1 setPage={setPage} />}
      {page === 2 && <Form2 setPage={setPage} />}
      {page === 3 && <Result setPage={setPage} />}
    </div>
  );
}

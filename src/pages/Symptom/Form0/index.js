import React from "react";
import styles from "./Form0.module.css";
import { Button } from "antd";

import Empty from "../../../components/Symptom/Result/Empty";
// import Red from "../../../components/Symptom/Result/Red";
import Yellow from "../../../components/Symptom/Result/Yellow";
// import Green from "../../../components/Symptom/Result/Green";
import ProcessResult from "../../../calculate/score";
import { useEffect } from "react";
import { useScoreContext } from "../../../context/ScoreContext";
import { Oval } from "react-loader-spinner";

import SelectSymptom from "../../../components/SelectSymptom";

export default function Form0(props) {
  const [score, setScore] = useScoreContext();
  
  useEffect(() => {
    console.log("page0", score);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.header}>
          ความรุนแรงของอาการของคุณ
        </div>
        <div className={styles.box}>
          {props.isLoading ? (
            <div className={styles.loadcontainer}>
              <Oval
                height="100"
                width="100"
                color="#1890ff"
                secondaryColor="gray"
              />
              Loading
            </div>
          ) : props.symptomScore ? (
            <SelectSymptom
              symptomScore={
                props.symptomScore.score
              }
            />
          ) : (
            <Empty />
          )}
        </div>

        <Button
          onClick={() => props.setPage(1)}
          type="primary"
        >
          ทำแบบประเมิน
        </Button>
      </div>
    </div>
  );
}

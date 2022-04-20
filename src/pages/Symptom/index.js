import React from "react";
import styles from "./Symtom.module.css";

import Form0 from "./Form0";
import Form1 from "./Form1";
import Form2 from "./Form2";

import Result from "../../components/Symptom/Result";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Oval } from "react-loader-spinner";

export default function Symtom(props) {
  const [page, setPage] = useState(0);
  const { auth, authLoaded, roleCheck } =
    useAuthContext();

  const [isLoading, setisLoading] =
    useState(true);
  const [symptomScore, setSymptomScore] =
    useState({});
  const [issummit, setIssummit] = useState(false);

  async function fetchSymptomData() {
    if (auth.user_info?.id) {
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/symtom/${auth.user_info.id}`
      );
      setSymptomScore(result.data[0]);
      // console.log(result.data[0]);
      setisLoading(false);
      // console.log("fetchsymptom", symptomScore);
    } else console.log("no user_info.id");
  }
  //when open this path
  useEffect(() => {
    if (authLoaded) {
      fetchSymptomData();
    }
  }, [authLoaded, issummit]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className={styles.body}>
      {page === 0 && (
        <Form0
          setPage={setPage}
          symptomScore={symptomScore}
          isLoading={isLoading}
        />
      )}
      {page === 1 && (
        <Form1
          setPage={setPage}
          symptomScore={symptomScore}
        />
      )}
      {page === 2 && (
        <Form2
          setPage={setPage}
          symptomScore={symptomScore}
          isLoading={isLoading}
          setisLoading={setisLoading}
          issummit={() => setIssummit(!issummit)}
        />
      )}
      {/* {page === 3 && (
        <Form0
          setPage={setPage}
          symptomScore={symptomScore}
        />
      )} */}
    </div>
  );
}

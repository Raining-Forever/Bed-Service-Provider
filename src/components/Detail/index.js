import React from "react";

import styles from "./Detail.module.css";
import AccountDetail from "../AccountDetail";

import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

import axios from "axios";

export default function Detail() {
  const [patientinfo, setPatientinfo] = useState(
    {}
  );
  const [isLoading, setisLoading] =
    useState(true);
  async function fetchPatientData() {
    const result = await axios.get(
      "https://bed-service-provider.herokuapp.com/api/patient/"
    );
    setPatientinfo(result.data[0]);
    setisLoading(false);
  }

  useEffect(() => {
    fetchPatientData();
  }, []);

  if (isLoading)
    return (
      <div className={styles.loadcontainer}>
        <Oval
          height="100"
          width="100"
          color="#1890ff"
          secondaryColor="gray"
        />
        Loading
      </div>
    );

  return (
    <div>
      <AccountDetail
        patientinfo={patientinfo}
        setPatientinfo={setPatientinfo}
        disabled
      />
    </div>
  );
}

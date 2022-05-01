import React from "react";
import styles from "./ConfirmationPage.module.css";

// import Navbar_patient from "../../../components/Navbar/Navbar_patient";
// import AccountDetail from "../../../components/AccountDetail";
import { useState, useEffect } from "react";

import { Button } from "antd";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useAuthContext } from "../../../../context/AuthContext";
import ComfirmationForm from "../../../../components/ReserveForm/ComfirmationForm";
import { useParams } from "react-router-dom";

export default function ConfirmationPage() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();

  useEffect(() => {
    roleCheck(["hospital"], "/accessdenied");
  }, [authLoaded]);

  const [isEdit, setIsEdit] = useState(false);
  const [patientinfo, setPatientinfo] = useState(
    {}
  );
  let { id } = useParams();
  const [isLoading, setisLoading] =
    useState(true);

  async function fetchPatientData() {
    if (auth.user_info?.id) {
      const phrid = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/phr/${id}`
      );
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/patient/${phrid.data[0].patient_id}`
      );
      // setPatientinfo(result.data[0]);
      setisLoading(false);
      // console.log(result.data[0]);
      setPatientinfo(result.data[0]);
    } else console.log("no user_info.id");
  }

  function ToggleEditform() {
    setIsEdit(!isEdit);
  }

  useEffect(() => {
    if (authLoaded) {
      fetchPatientData();
    }
  }, [authLoaded, isEdit]);

  // console.log("patientinfo", patientinfo);
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            แบบฟอร์มยืนยันการรับรักษาผู้ป่วย
          </div>
        </div>
        <div className={styles.box}>
          {isLoading ? (
            <div className={styles.loadcontainer}>
              <Oval
                height="100"
                width="100"
                color="#1890ff"
                secondaryColor="gray"
              />
              Loading
            </div>
          ) : (
            <ComfirmationForm
              patientinfo={patientinfo}
              phr_id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Account.module.css";

import Navbar_patient from "../../components/Navbar/Navbar_patient";
import AccountDetail from "../../components/AccountDetail";
import { useState, useEffect } from "react";

import { Button } from "antd";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useAuthContext } from "../../context/AuthContext";

export default function Account() {
  const { auth, authLoaded, roleCheck } = useAuthContext();
  useEffect(() => {
    roleCheck(["doctor"]);
  }, [authLoaded]);

  const [isEdit, setIsEdit] = useState(true);
  const [patientinfo, setPatientinfo] = useState({});

  const [isLoading, setisLoading] = useState(true);

  async function fetchPatientData() {
    const result = await axios.get(
      "https://bed-service-provider.herokuapp.com/api/patient/"
    );
    setPatientinfo(result.data[0]);
    setisLoading(false);
    console.log(result);
  }

  function ToggleEditform() {
    setIsEdit(!isEdit);
  }

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>ข้อมูลผู้ป่วย</div>
          {isEdit ? (
            <Button type="primary" onClick={ToggleEditform}>
              แก้ไขข้อมูล
            </Button>
          ) : (
            <Button type="primary" onClick={ToggleEditform} danger>
              ยกเลิกแก้ไข
            </Button>
          )}
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
            <AccountDetail patientinfo={patientinfo} disabled={isEdit} />
          )}
        </div>
      </div>
    </div>
  );
}

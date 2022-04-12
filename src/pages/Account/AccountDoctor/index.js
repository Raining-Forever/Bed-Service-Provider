import React from "react";
import styles from "../Account.module.css";
import { Oval } from "react-loader-spinner";
import { Button } from "antd/lib/radio";
import { useEffect, useState } from "react";
import DoctorDetail from "../../../components/DoctorDetail";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";

export default function AccountDoctor() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();
  useEffect(() => {
    roleCheck(["doctor"], "/accessdenied");
    if (authLoaded) {
      fetchDoctorData();
    }
  }, [authLoaded]);
  const [isEdit, setIsEdit] = useState(true);

  const [isLoading, setisLoading] =
    useState(true);
  const [doctorinfo, setDoctorinfo] = useState(
    {}
  );
  function ToggleEditform() {
    setIsEdit(!isEdit);
  }
  async function fetchDoctorData() {
    const result = await axios.get(
      `https://bed-service-provider.herokuapp.com/api/doctor/${auth.user_info.id}`
    );
    setDoctorinfo(result.data[0]);
    setisLoading(false);
    console.log(result);
  }

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลแพทย์
          </div>
          {isEdit ? (
            <Button
              type="primary"
              onClick={ToggleEditform}
            >
              แก้ไขข้อมูล
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={ToggleEditform}
              danger
            >
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
            <DoctorDetail
              disabled={!isEdit}
              doctorinfo={doctorinfo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

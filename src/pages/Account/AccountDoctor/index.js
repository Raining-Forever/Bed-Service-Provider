import React from "react";
import styles from "../Account.module.css";
import { Oval } from "react-loader-spinner";
import { Button } from "antd";
import { useEffect, useState } from "react";
import DoctorDetail from "../../../components/DoctorDetail";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";

export default function AccountDoctor() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();
  useEffect(() => {
    roleCheck(["doctor"], "/accessdenied");
  }, [authLoaded]);

  const [isEdit, setIsEdit] = useState(false);

  const [isLoading, setisLoading] =
    useState(true);
  const [doctorinfo, setDoctorinfo] = useState(
    {}
  );
  function ToggleEditform() {
    setIsEdit(!isEdit);
  }
  async function fetchDoctorData() {
    if (auth.user_info.id) {
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/doctor/${auth.user_info.id}`
      );
      setDoctorinfo(result.data[0]);
      setisLoading(false);
      // console.log(result);
    } else console.log("no user_info.id");
  }
  useEffect(() => {
    if (authLoaded) {
      fetchDoctorData();
    }
  }, [authLoaded, isEdit]);
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
              danger
            >
              ยกเลิกแก้ไข
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={ToggleEditform}
            >
              แก้ไขข้อมูล
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
              onSubmit={() => setIsEdit(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

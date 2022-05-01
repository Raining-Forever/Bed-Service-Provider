import { useEffect, useState } from "react";
import styles from "../Account.module.css";
import { Button } from "antd";
import { Oval } from "react-loader-spinner";
import HospitalDetail from "../../../components/HospitalDetail";
import axios from "axios";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

export default function AccountHospital() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();

  useEffect(() => {
    roleCheck(["hospital"], "/accessdenied");
  }, [authLoaded]);

  const [isEdit, setIsEdit] = useState(false);
  const [hospitalinfo, setHospitalinfo] =
    useState({});

  const [isLoading, setisLoading] =
    useState(true);

  function ToggleEditform() {
    setIsEdit(!isEdit);
  }
  useEffect(() => {
    if (authLoaded) {
      fetchHospitalData();
    }
  }, [authLoaded, isEdit]);
  async function fetchHospitalData() {
    if (auth.user_info.id) {
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/hospital/${auth.user_info.id}`
      );
      setHospitalinfo(result.data[0]);
      setisLoading(false);
      // console.log(result);
    } else console.log("no user_info.id");
  }

  // useEffect(() => {
  //   fetchHospitalData();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ข้อมูลสถานพยาบาล
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
            <HospitalDetail
              hospitalinfo={hospitalinfo}
              disabled={!isEdit}
              onSubmit={() => setIsEdit(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

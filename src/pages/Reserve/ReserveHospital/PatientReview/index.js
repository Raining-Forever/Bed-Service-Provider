import React from "react";
import styles from "./PatientReview.module.css";

// import Navbar_patient from "../../../components/Navbar/Navbar_patient";
import AccountDetail from "../../../../components/AccountDetail";
import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { Button, Form } from "antd";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useAuthContext } from "../../../../context/AuthContext";
import { result } from "lodash";
import Form0 from "../../../Symptom/Form0";
import SelectSymptom from "../../../../components/SelectSymptom";

export default function PatientReview() {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();

  useEffect(() => {
    roleCheck(["hospital"], "/accessdenied");
  }, [authLoaded]);

  const isEdit = false;
  const [patientinfo, setPatientinfo] = useState(
    {}
  );
  const [symptominfo, setSymptominfo] = useState(
    {}
  );
  const [isLoading, setisLoading] =
    useState(true);
  const [onInfo, setOnInfo] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  async function fetchPatientData() {
    if (auth.role === "hospital") {
      const phrid = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/phr/${id}`
      );
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/patient/${phrid.data[0].patient_id}`
      );
      const symptomdata = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/symtom/${phrid.data[0].patient_id}`
      );
      setSymptominfo(symptomdata.data[0]);
      setPatientinfo(result.data[0]);
      setisLoading(false);
      console.log(phrid.data[0]);
    }
  }

  // function ToggleEditform() {
  //   setIsEdit(!isEdit);
  // }

  useEffect(() => {
    fetchPatientData();
  }, [authLoaded]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.wraptitle}>
            <div
              className={
                onInfo
                  ? styles.headeronclick
                  : styles.header
              }
              onClick={() => setOnInfo(true)}
            >
              ข้อมูลผู้ป่วย
            </div>
            <div className={styles.space}>|</div>
            <div
              className={
                !onInfo
                  ? styles.headeronclick
                  : styles.header
              }
              onClick={() => setOnInfo(false)}
            >
              อาการและความรุนแรง
            </div>
          </div>

          <div className={styles.wrapbutton}>
            <Button
              type="primary"
              className={styles.buttonEdit}
              onClick={async () => {
                await axios.put(
                  `https://bed-service-provider.herokuapp.com/api/phr/${id}`,
                  {
                    status: 3,
                  }
                );
              }}
            >
              ยืนยันผู้ป่วย
            </Button>
            <Button
              type="primary"
              danger
              onClick={async () => {
                await axios.put(
                  `https://bed-service-provider.herokuapp.com/api/phr/${id}`,
                  {
                    status: 4,
                  }
                );
                alert("ปฏิเสธการของรับการรักษา");
                navigate("/reservehospital");
              }}
            >
              ยกเลิกผู้ป่วย
            </Button>
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
          ) : onInfo ? (
            <AccountDetail
              patientinfo={patientinfo}
              setPatientinfo={setPatientinfo}
              disabled={!isEdit}
            />
          ) : (
            <SelectSymptom
              symptomScore={symptominfo.score}
              onsuggest={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

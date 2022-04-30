import React from "react";
import styles from "./AppointmentDetail.module.css";
import { Button } from "antd";
import {
  NavLink,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

export default function AppointmentDetail(props) {
  const { auth, authLoaded, roleCheck } =
    useAuthContext();
  const [appointdetail, setAppointdetail] =
    useState({});
  const [isLoading, setisLoading] =
    useState(true);

  useEffect(() => {
    roleCheck(["patient"], "/accessdenied");
  }, [authLoaded]);

  let { id } = useParams();

  let nArray = [];
  async function fetchDetail() {
    if (auth.user_info?.id) {
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/appointment/${id}`
      );

      nArray = result.data.map((v) => ({
        id: v.id,
        date: v.starttime
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/"),
        period:
          v.starttime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join(".") +
          " - " +
          v.endtime
            .split("T")[1]
            .split("Z")[0]
            .split(".")[0]
            .split(":")
            .slice(0, -1)
            .join("."),
        docname:
          v.doctorinfo.title +
          v.doctorinfo.firstname +
          " " +
          v.doctorinfo.lastname,
        url: v.url,
      }));

      setAppointdetail(nArray[0]);
      setisLoading(false);
      console.log("appoint", appointdetail);
    }
  }

  useEffect(() => {
    if (authLoaded) {
      fetchDetail();
    }
  }, [authLoaded]);
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.header}>
          รายละเอียดการปรึกษาแพทย์
        </div>
        <div className={styles.box}>
          <div className={styles.description}>
            <img
              className={styles.imgaccessdeined}
              src="https://cdn-icons-png.flaticon.com/512/7376/7376520.png"
            />
            <div className={styles.destext}>
              ในการพบแพทย์ออนไลน์
              กรุณาเตรียมความพร้อมกับอุปกรณ์ของท่านก่อนถึงเวลาให้คำปรึกษา
            </div>
          </div>
          <div className={styles.appdetail}>
            <div className={styles.wraptext}>
              <div className={styles.text}>
                แพทย์ผู้ให้คำปรึกษา :
                {appointdetail.docname}
              </div>
              <div className={styles.text}>
                วันที่ปรึกษา :{" "}
                {appointdetail.date}
              </div>
              <div className={styles.text}>
                ช่วงเวลาปรึกษา :
                {appointdetail.period}
              </div>
            </div>
            <div>
              <Button
                type="primary"
                onClick={() => {
                  window.open(appointdetail.url);
                  props.goMeeting();
                }}
              >
                เข้าห้องประชุม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

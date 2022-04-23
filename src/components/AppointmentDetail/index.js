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

  useEffect(() => {
    roleCheck(["patient"], "/accessdenied");
  }, [authLoaded]);

  let { id } = useParams();

  async function fetchDetail() {
    if (auth.user_info?.id) {
      const result = await axios.get(
        `https://bed-service-provider.herokuapp.com/api/appointment/${id}`
      );
      setAppointdetail(result.data[0]);
      console.log(result);
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
              src="https://cdn-icons-png.flaticon.com/512/6400/6400498.png"
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
                {"  นพ. ขยัน เก่งมาก"}
              </div>
              <div className={styles.text}>
                วันที่ปรึกษา : {"1/9/2564"}
              </div>
              <div className={styles.text}>
                ช่วงเวลาปรึกษา :{"15.00-15.30"}
              </div>
            </div>
            <div>
              <Button type="primary">
                เข้าห้องประชุม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

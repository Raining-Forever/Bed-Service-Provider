import React from "react";
import styles from "../Accessdeined.module.css";
import { Button } from "antd";

import Swal from "sweetalert2";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";

export default function Meeting(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.box}>
          <img
            className={styles.imgaccessdeined}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968552.png"
          />
          <div className={styles.header}>
            อยู่ระหว่างปรึกษาแพทย์
          </div>
          <div className={styles.wrapbutton}>
            <div className={styles.buttonitem}>
              <Button
                onClick={() => props.goBack()}
              >
                ย้อนกลับ
              </Button>
            </div>
            <div>
              <Button
                className={styles.buttonitem}
                type="primary"
                onClick={async () => {
                  await Swal.fire({
                    title: "ต้องการจบการประชุม",
                    icon: "warning",
                    html: "ท่านต้องการจบการประชุม",
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText: " ยืนยัน",
                    confirmButtonAriaLabel:
                      "ต้องการจบการประชุมสำเร็จ",
                    cancelButtonText: "ยกเลิก",
                    cancelButtonAriaLabel:
                      "ยกเลิกต้องการจบการประชุมสำเร็จ",
                  }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      await axios.put(
                        `https://bed-service-provider.herokuapp.com/api/appointment/${id}`,
                        { status: 3 }
                      );
                      navigate("/appoint");
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "ปรึกษาสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    } else {
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title:
                          "ยกเลิกการส่งแบบฟอร์มสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  });
                }}
              >
                จบการประชุม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

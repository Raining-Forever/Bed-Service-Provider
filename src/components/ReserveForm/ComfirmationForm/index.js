import {
  Button,
  DatePicker,
  Form,
  Radio,
  TimePicker,
} from "antd";
import axios from "axios";
import { set } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./ComfirmationForm.module.css";

export default function ComfirmationForm(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // let tempDisable = true;
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age =
      today.getFullYear() -
      birthDate.getFullYear();
    var m =
      today.getMonth() - birthDate.getMonth();
    if (
      m < 0 ||
      (m === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
  const [tempDisable, setTempDisable] =
    useState(true);
  // useEffect(() => {
  //   temp = form.getFieldValue();
  //   console.log(temp);
  // }, [form.getFieldValue()]);
  function handleClick(radio) {
    tempDisable = radio.value;
  }
  return (
    <div className={styles.body}>
      <Form
        form={form}
        onFinish={async () => {
          const FormData = form.getFieldValue();

          if (FormData.confirmation) {
            await axios.put(
              `https://bed-service-provider.herokuapp.com/api/phr/${props.phr_id}`,
              {
                checkin_date:
                  FormData.checkin_date,
                checkin_time:
                  FormData.checkin_time,
                status: 3,
              }
            );
            Swal.fire({
              position: "center",
              icon: "success",
              title:
                "รับผู้ป่วยเข้ารับรักษาสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            // console.log(FormData);
          } else {
            await axios.put(
              `https://bed-service-provider.herokuapp.com/api/phr/${props.phr_id}`,
              {
                status: 4,
              }
            );
            Swal.fire({
              position: "center",
              icon: "error",
              title:
                "ผู้ป่วยปฏิเสธการของรับการรักษา",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          navigate("/reservehospital");
        }}
      >
        <div className={styles.patientInfo}>
          <div className={styles.header}>
            กรุณาโทรยืนยันว่าผู้ป่วยต้องการเข้ารับการรักษา
          </div>
          <div className={styles.description}>
            <div className={styles.pair}>
              <p className={styles.row1}>
                ชื่อผู้ป่วย :{" "}
                {props.patientinfo.firstname +
                  " "}
                {props.patientinfo.lastname}
              </p>
              <p className={styles.row1}>
                เพศ : {props.patientinfo.gender}
              </p>
            </div>
            <div className={styles.pair}>
              <p className={styles.row1}>
                เบอร์โทรศัพท์ :{" "}
                {props.patientinfo.tel}
              </p>
              <p className={styles.row1}>
                อายุ :{" "}
                {getAge(
                  props.patientinfo.birthday
                )}{" "}
                ปี
              </p>
            </div>
            <p>
              ที่อยู่ : 1223/22 ซอย ลาดกระบัง 123
              ถนน ลาดกระบัง แขวง ลาดกระบัง เขต
              ลาดกระบัง กรุงเทพมหานคร 10120
            </p>
            <Form.Item
              name="confirmation"
              label="ผู้ป่วยยินยอมที่จะเข้ารับการรักษากับสถานพยาบาล
            :"
              rules={[
                {
                  required: true,
                  message:
                    "กรุณาระบุความยินยอมของผู้ป่วย",
                },
              ]}
            >
              <Radio.Group
                onChange={(e) => {
                  setTempDisable(e.target.value);
                }}
              >
                <Radio value={true}>ยินยอม</Radio>
                <Radio value={false}>
                  ไม่ยินยอม
                </Radio>
              </Radio.Group>
            </Form.Item>
            <div></div>
          </div>
        </div>
        <div className={styles.appointform}>
          <div className={styles.header}>
            ส่วนนัดหมายผู้ป่วย
          </div>
          <div className={styles.appointformdes}>
            <div className={styles.row1}>
              <Form.Item
                name="checkin_date"
                label="วันที่นัดหมาย :"
                rules={[
                  {
                    required: tempDisable,
                    message:
                      "กรุณาระบุวันที่เข้ารับการรักษา",
                  },
                ]}
              >
                <DatePicker
                  disabled={!tempDisable}
                  className={styles.inputinfo}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </div>
            <div className={styles.row1}>
              <Form.Item
                name="checkin_time"
                label="เวลาที่นัดหมาย :"
                rules={[
                  {
                    required: tempDisable,
                    message:
                      "กรุณาระบุเวลาที่เข้ารับการรักษา",
                  },
                ]}
              >
                <TimePicker
                  disabled={!tempDisable}
                  className={styles.inputinfo}
                  minuteStep={30}
                  format="HH:mm"
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      <div className={styles.summitbutton}>
        <Button
          type="primary"
          onClick={async () => {
            await Swal.fire({
              title: "ส่งแบบฟอร์มยืนยันผู้ป่วย",
              icon: "warning",
              html: "ท่านต้องการส่งแบบฟอร์มยืนยันผู้ป่วย",
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              confirmButtonText: " ยืนยัน",
              confirmButtonAriaLabel:
                "ส่งแบบฟอร์มยืนยันผู้ป่วยสำเร็จ",
              cancelButtonText: "ยกเลิก",
              cancelButtonAriaLabel:
                "ยกเลิกการส่งแบบฟอร์มยืนยันผู้ป่วยสำเร็จ",
            }).then(async (result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                form.submit();
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
          ลงทะเบียน
        </Button>
      </div>
    </div>
  );
}

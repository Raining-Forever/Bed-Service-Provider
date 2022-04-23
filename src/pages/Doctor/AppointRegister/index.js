import {
  Button,
  DatePicker,
  Form,
  TimePicker,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import styles from "./AppointRegister.module.css";
import React, { useEffect } from "react";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
export default function AppointRegister() {
  const { auth, login } = useAuthContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.wrapheader}>
          <div className={styles.header}>
            ลงทะเบียนให้คำปรึกษากับผู้ป่วย
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.wrapbox}>
            <div className={styles.boxheader}>
              เลือกวันและเวลาที่ต้องการให้คำปรึกษากับผู้ป่วย
            </div>
            <Form
              name="validate_other"
              {...formItemLayout}
              form={form}
              onFinish={
                () => {
                  const data =
                    form.getFieldValue();
                  console.log(
                    console.log("success"),
                    data
                  );
                }
                // async () => {
                //        if (auth.user_info?.id) {
                //          const registerData =
                //            form.getFieldValue();
                //          registerData.doctor_id =
                //            auth.user_info.id;
                //          const data = await axios.post(
                //            `https://bed-service-provider.herokuapp.com/api/appointment/`,
                //            registerData
                //          );
                //          console.log(data);
                //        }
                // }
              }
            >
              <Form.Item
                name="appointdate"
                label="วันที่ต้องการให้คำปรึกษา :"
              >
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item
                name="appointtimerange"
                label="ช่วงเวลาที่ต้องการให้คำปรึกษา"
              >
                <TimePicker.RangePicker
                  minuteStep={30}
                  format="HH:mm"
                />
              </Form.Item>
            </Form>
            <div className={styles.summitbutton}>
              <Button
                type="primary"
                onClick={() => form.submit()}
                // style="backgrond-color:#0B9780;"
              >
                ลงทะเบียน
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

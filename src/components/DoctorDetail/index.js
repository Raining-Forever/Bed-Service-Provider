import React from "react";
import styles from "./DoctorDetail.module.css";
import axios from "axios";

import { Radio, Button, Form, Input } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
const headFormItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 15,
      // offset: 4,
    },
  },
};
const tailFormItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 19,
      // offset: 4,
    },
  },
};

export default function DoctorDetail({
  disabled,
  doctorinfo,
  onSubmit,
}) {
  const { auth, authLoaded, roleCheck, login } =
    useAuthContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  form.setFieldsValue(doctorinfo);

  return (
    <div className={styles.body}>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={async () => {
          if (doctorinfo?.id) {
            const registerData =
              form.getFieldValue();
            registerData.user_id = auth.user_id;
            const data = await axios.put(
              `https://bed-service-provider.herokuapp.com/api/doctor/${doctorinfo.id}`,
              registerData
            );
            console.log(data);
            onSubmit();
          } else {
            const registerData =
              form.getFieldValue();
            registerData.user_id = auth.user_id;
            const data = await axios
              .post(
                `https://bed-service-provider.herokuapp.com/api/doctor`,
                registerData
              )
              .then((response) => {
                console.log(
                  "response: ",
                  response.data
                );
                login(response.data);
              });
            console.log(data);
            navigate("/registersuccess");
          }
        }}
      >
        <div className={styles.wrapaddress}>
          <div className={styles.topaddress}>
            <Form.Item
              name="doctor_id"
              label="เลขที่ใบประกอบวิชาชีพ :"
              rules={[
                {
                  required: true,
                },
              ]}
              {...headFormItemLayout}
            >
              <Input />
            </Form.Item>
          </div>
          <div className={styles.botaddress}>
            <div className={styles.couple}>
              <Form.Item
                name="doctor_fname"
                label="ชื่อ :"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="doctor_gender"
                label="เพศ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="male">ชาย</Radio>
                  <Radio value="female">
                    หญิง
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className={styles.couple}>
              <Form.Item
                name="doctor_lname"
                label="นามสกุล :"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="doctor_phone"
                label="เบอร์โทรศัพท์ :"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className={styles.adresstitle}>
          ที่อยู่ที่สามารถติดต่อได้
        </div>
        <div className={styles.wrapaddress}>
          <div className={styles.topaddress}>
            <Form.Item
              {...tailFormItemLayout}
              name="address"
              label="ที่อยู่ :"
            >
              <Input disabled={disabled} />
            </Form.Item>
          </div>
          <div className={styles.botaddress}>
            <div className={styles.couple}>
              <Form.Item
                name="province"
                label="จังหวัด :"
              >
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item
                name="district"
                label="อำเภอ/เขต :"
              >
                <Input disabled={disabled} />
              </Form.Item>
            </div>
            <div className={styles.couple}>
              <Form.Item
                name="subdistrict"
                label="ตำบล/แขวง :"
              >
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item
                name="zipcode"
                label="รหัสไปรษณีย์ :"
              >
                <Input disabled={disabled} />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      {!disabled ? (
        <div className={styles.submitButton}>
          <Button
            type="primary"
            onClick={() => form.submit()}
          >
            ลงทะเบียน
          </Button>
        </div>
      ) : (
        <div
          className={styles.submitButton}
        ></div>
      )}
    </div>
  );
}

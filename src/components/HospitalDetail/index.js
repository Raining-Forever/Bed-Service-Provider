import React from "react";
import styles from "./HospitalDetail.module.css";

import { Button, Form, Input } from "antd";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

export default function HospitalDetail({
  hospitalinfo,
  setHospitalinfo,
  disabled,
  onSubmit,
}) {
  const [form] = Form.useForm();
  const { auth, authLoaded, roleCheck, login } =
    useAuthContext();
  const navigate = useNavigate();
  form.setFieldsValue(hospitalinfo);

  return (
    <div className={styles.body}>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={async () => {
          if (hospitalinfo?.id) {
            const { data } = await axios.put(
              `https://bed-service-provider.herokuapp.com/api/hospital/${hospitalinfo.id}`,
              form.getFieldValue()
            );
            console.log(data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "แก้ไขข้อมูลสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            onSubmit();
          } else {
            const registerData =
              form.getFieldValue();
            registerData.user_id = auth.user_id;
            const data = await axios
              .post(
                `https://bed-service-provider.herokuapp.com/api/hospital`,
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
        <Form.Item
          name="hospital_number"
          label="รหัสสถานพยาบาล :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled={disabled} />
        </Form.Item>

        <Form.Item
          name="hospital_name"
          label="ชื่อหน่วยบริการ/สถานพยาบาล :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item
          name="tel"
          label="เบอร์โทรศัพท์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled={disabled} />
        </Form.Item>
        <div className={styles.adresstitle}>
          ที่อยู่ที่สามารถติดต่อได้
        </div>
        <div className={styles.wrapaddress}>
          <div className={styles.topaddress}>
            <Form.Item
              {...tailFormItemLayout}
              name="address"
              label="ที่อยู่ :"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุที่อยู่",
                },
              ]}
            >
              <Input disabled={disabled} />
            </Form.Item>
          </div>
          <div className={styles.botaddress}>
            <div className={styles.couple}>
              <Form.Item
                name="province"
                label="จังหวัด :"
                rules={[
                  {
                    required: true,
                    message: "กรุณาระบุจังหวัด",
                  },
                ]}
              >
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item
                name="district"
                label="อำเภอ/เขต :"
                rules={[
                  {
                    required: true,
                    message: "กรุณาระบุอำเภอ/เขต",
                  },
                ]}
              >
                <Input disabled={disabled} />
              </Form.Item>
            </div>
            <div className={styles.couple}>
              <Form.Item
                name="subdistrict"
                label="ตำบล/แขวง :"
                rules={[
                  {
                    required: true,
                    message: "กรุณาระบุตำบล/แขวง",
                  },
                ]}
              >
                <Input disabled={disabled} />
              </Form.Item>

              <Form.Item
                name="postalcode"
                label="รหัสไปรษณีย์ :"
                rules={[
                  {
                    required: true,
                    message:
                      "กรุณาระบุรหัสไปรษณี",
                  },
                ]}
              >
                <Input disabled={disabled} />
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
      {!disabled ? (
        <div className={styles.submitButton}>
          {hospitalinfo?.id ? (
            <Button
              type="primary"
              className={styles.buttonEdit}
              onClick={() => form.submit()}
              // style="backgrond-color:#0B9780;"
            >
              ยืนยันการแก้ไข
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => form.submit()}
              // style="backgrond-color:#0B9780;"
            >
              ลงทะเบียน
            </Button>
          )}
        </div>
      ) : (
        <div
          className={styles.submitButton}
        ></div>
      )}
    </div>
  );
}

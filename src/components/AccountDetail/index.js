import React from "react";
import styles from "./AccountDetail.module.css";
import { useAuthContext } from "../../context/AuthContext";

import { InboxOutlined } from "@ant-design/icons";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
  DatePicker,
} from "antd";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;
const { Option } = Select;
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
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 15,
      // offset: 1,
    },
  },
};
export default function AccountDetail({
  patientinfo,
  setPatientinfo,
  disabled,
  onSubmit,
}) {
  const { auth, authLoaded, roleCheck, login } =
    useAuthContext();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  form.setFieldsValue(patientinfo);

  return (
    <div className={styles.body}>
      <Form
        name="validate_other"
        {...formItemLayout}
        form={form}
        onFinish={async () => {
          if (patientinfo?.id) {
            const { data } = await axios.put(
              `https://bed-service-provider.herokuapp.com/api/patient/${patientinfo.id}`,
              form.getFieldsValue()
            );
            console.log(data);

            onSubmit();
          } else {
            const registerData =
              form.getFieldValue();
            registerData.user_id = auth.user_id;
            const data = await axios
              .post(
                `https://bed-service-provider.herokuapp.com/api/patient/`,
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
        <div className={styles.containerinfo}>
          <div className={styles.wrapinfo1}>
            <Form.Item
              name="idcard"
              label="เลขบัตรประชาชน :"
              rules={[
                {
                  pattern: /^\d{13}$/,
                  message:
                    "The input is not valid idcard",
                },
                {
                  required: true,
                  message:
                    "Please input your idcard",
                },
              ]}
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="title"
              label="คำนำหน้า :"
            >
              <Select
                placeholder=""
                allowClear
                disabled={disabled}
              >
                <Option value="mr">นาย</Option>
                <Option value="mrs">นาง</Option>
                <Option value="ms">นางสาว</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="firstname"
              label="ชื่อ :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>

            <Form.Item
              name="heigth"
              label="ส่วนสูง :"
            >
              <Input
                className={styles.inputinfo}
                suffix="cm"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              name="weight"
              label="น้ำหนัก :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
                suffix="kg"
              />
            </Form.Item>
          </div>
          <div className={styles.wrapinfo2}>
            <Form.Item
              name="birthday"
              label="วัน/เดือน/ปีเกิด :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
              {/* <DatePicker
                disabled={disabled}
                className={styles.inputinfo}
                format="DD/MM/YYYY"
              /> */}
            </Form.Item>
            <Form.Item name="gender" label="เพศ">
              <Radio.Group
                disabled={disabled}
                // value={form.getFieldValue([
                //   "gender",
                // ])}
              >
                <Radio value="male">ชาย</Radio>
                <Radio value="female">หญิง</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="lastname"
              label="นามสกุล :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="เบอร์โทรศัพท์ :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="อีเมล :"
            >
              <Input
                disabled={true}
                className={styles.inputinfo}
                // defaultValue={auth.email}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="covid-evidence"
          label="คุณมีหลักฐานการตรวจโควิด-19 :"
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value="covid-evidence-yes">
              มี
            </Radio>
            <Radio value="covid-evidence-no">
              ไม่มี
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="type-prove"
          label="ตรวจโควิด-19 ด้วยวิธีการใด :"
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value="atk">ATK</Radio>
            <Radio value="rt-pcr">
              RT-PCR(ใบรับรองแพทย์)
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="resultform"
          label="ผลตรวจที่ได้ :"
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value="resultform-yes">
              ติดเชื้อ
            </Radio>
            <Radio value="resultform-no">
              ไม่ติดเชื้่อ
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="prove-result"
          label="รูปภาพหลักฐาน :"
        >
          <Dragger className={styles.provepic}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to
              upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
              Strictly prohibit from uploading
              company data or other band files
            </p>
          </Dragger>
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
          {patientinfo?.id ? (
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

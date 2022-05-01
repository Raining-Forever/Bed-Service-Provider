import React, { useEffect } from "react";
import styles from "./AccountDetail.module.css";
import { useAuthContext } from "../../context/AuthContext";
import moment from "moment";
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

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
  const { auth, login } = useAuthContext();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  function Script_checkID(id) {
    let i, sum;
    if (id.substring(0, 1) == 0) return false;
    if (id.length != 13) return false;
    for (i = 0, sum = 0; i < 12; i++)
      sum += parseFloat(id.charAt(i)) * (13 - i);
    if (
      (11 - (sum % 11)) % 10 !=
      parseFloat(id.charAt(12))
    )
      return false;
    return true;
  }
  useEffect(() => {
    if (patientinfo) {
      let tempBirthday = moment(
        patientinfo.birthday
      );
      form.setFieldsValue({
        ...patientinfo,
        birthday: tempBirthday,
      });
    }
  }, [patientinfo]);

  return (
    <div className={styles.body}>
      <Form
        name="validate_other"
        {...formItemLayout}
        form={form}
        onFinish={async () => {
          if (patientinfo?.id) {
            const registerData =
              form.getFieldValue();
            registerData.user_id = auth.user_id;
            const data = await axios.put(
              `https://bed-service-provider.herokuapp.com/api/patient/${patientinfo.id}`,
              registerData
            );
            // console.log(data);
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
                `https://bed-service-provider.herokuapp.com/api/patient/`,
                registerData
              )
              .then((response) => {
                // console.log(
                //   "response: ",
                //   response.data
                // );
                login(response.data);
              });
            // console.log(registerData);
            // console.log(data);
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
                //{
                //     pattern: /^\d{13}$/,
                //     message:
                //       "The input is not valid idcard",
                //   },
                {
                  required: true,
                  message:
                    "กรุณาระบุข้อมูลบัตรประชาชน",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      Script_checkID(value)
                    ) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "กรุณาระบุเลขบัตรประชาชน"
                      )
                    );
                  },
                }),
              ]}
              // rules={[
              //
              //   {
              //     required: true,
              //     message:
              //       "กรุณาระบุข้อมูลบัตรประชาชน",
              //   },
              //   () => ({
              //     validator(_, value) {
              //       console.log(value);
              //       if (Script_checkID(value)) {
              //         return Promise.resolve();
              //       }

              //       return Promise.reject(
              //         new Error(
              //           "กรุณาระบุเลขบัตรประชาชน"
              //         )
              //       );
              //     },
              //   }),
              // ]}
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="title"
              label="คำนำหน้า :"
              rules={[
                {
                  required: true,
                  message:
                    "กรุณาเลือกคำนำหน้าชื่อ",
                },
              ]}
            >
              <Select
                placeholder=""
                allowClear
                disabled={disabled}
              >
                <Option value="นาย">นาย</Option>
                <Option value="นาง">นาง</Option>
                <Option value="นางสาว">
                  นางสาว
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="firstname"
              label="ชื่อ :"
              rules={[
                {
                  pattern: /^[ก-๏\s]+$/,
                  message:
                    "The input is not valid idcard",
                },
                {
                  required: true,
                  message: "กรุณาระบุชื่อ",
                },
              ]}
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>

            <Form.Item
              name="height"
              label="ส่วนสูง :"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุส่วนสูง",
                },
              ]}
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
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุน้ำหนัก",
                },
              ]}
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
              {/* <Input
                disabled={disabled}
                className={styles.inputinfo}
              /> */}
              <DatePicker
                disabled={disabled}
                className={styles.inputinfo}
                format="DD/MM/YYYY"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="เพศ"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุเพศ",
                },
              ]}
            >
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
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุนามสกุล",
                },
              ]}
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="tel"
              label="เบอร์โทรศัพท์ :"
              rules={[
                {
                  required: true,
                  message: "กรุณาระบุเบอร์โทรศัพ",
                },
              ]}
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="อีเมล :"
              // rules={[
              //   {
              //     type: "email",
              //     message:
              //       "The input is not valid idcard",
              //   },
              //   {
              //     required: true,
              //     message: "กรุณาระบุอีเมล",
              //   },
              // ]}
            >
              <Input
                disabled={true}
                className={styles.inputinfo}
                defaultValue={auth.email}
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="is_covid_test"
          label="คุณมีหลักฐานการตรวจโควิด-19 :"
          rules={[
            {
              required: true,
              message: "กรุณาระบุการตรวจโควิด-19",
            },
          ]}
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value={true}>มี</Radio>
            <Radio value={false}>ไม่มี</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="proof_type"
          label="ตรวจโควิด-19 ด้วยวิธีการใด :"
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value={1}>ATK</Radio>
            <Radio value={2}>
              RT-PCR(ใบรับรองแพทย์)
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="is_detected"
          label="ผลตรวจที่ได้ :"
        >
          <Radio.Group
            disabled={disabled}
            className={styles.radioGroup}
          >
            <Radio value={true}>ติดเชื้อ</Radio>
            <Radio value={false}>
              ไม่ติดเชื้่อ
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="proof_url"
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

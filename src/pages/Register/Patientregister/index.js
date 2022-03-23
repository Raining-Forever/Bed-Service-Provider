import React from "react";

import styles from "../../Account/Detail/Detail.module.css";

import { InboxOutlined } from "@ant-design/icons";
// import { useState, useEffect } from "react";
// import { Oval } from "react-loader-spinner";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
  Checkbox,
  Row,
} from "antd";
import axios from "axios";
import { result } from "lodash";

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

export default function Patientregister() {
  return (
    <div className={styles.body}>
      <Form
        name="validate_other"
        {...formItemLayout}
      >
        <div className={styles.containerinfo}>
          <div className={styles.wrapinfo1}>
            <Form.Item
              name="idcard"
              label="เลขบัตรประชาชน :"
              // rules={[
              //   {
              //     type: "email",
              //     message:
              //       "The input is not valid E-mail!",
              //   },
              //   {
              //     required: true,
              //     message:
              //       "Please input your E-mail!",
              //   },
              // ]}
            >
              <Input
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="gender"
              label="คำนำหน้า :"
            >
              <Select placeholder="" allowClear>
                <Option value="mr">นาย</Option>
                <Option value="mrs">นาง</Option>
                <Option value="ms">นางสาว</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="fname"
              label="ชื่อ :"
            >
              <Input
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="อีเมล :"
            >
              <Input
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="weight"
              label="น้ำหนัก :"
            >
              <Input
                className={styles.inputinfo}
                suffix="kg"
              />
            </Form.Item>
          </div>
          <div className={styles.wrapinfo2}>
            <Form.Item
              name="bdate"
              label="วัน/เดือน/ปีเกิด :"
            >
              <Input
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item name="gender" label="เพศ">
              <Radio.Group>
                <Radio value="male">ชาย</Radio>
                <Radio value="female">หญิง</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="lname"
              label="นามสกุล :"
            >
              <Input
                className={styles.inputinfo}
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="เบอร์โทรศัพท์ :"
            >
              <Input
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
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="covid-evidence"
          label="คุณมีหลักฐานการตรวจโควิด-19 :"
        >
          <Radio.Group
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
        {/* <Form.Item name="covid-prove">
          <Checkbox.Group >
            <Row>
              <Checkbox value="rt-pcr">
                หลักฐานการตรวจโควิด-19 ด้วยวิธีการ
                RT-PCR(ใบรับรองแพทย์)
                <br />
                <Form.Item
                  name="rt-pcr-form"
                  label="ผลตรวจที่ได้ :"
                >
                  <Radio.Group
                    
                    className={styles.radioGroup}
                  >
                    <Radio value="rt-pcr-form-yes">
                      ติดเชื้อ
                    </Radio>
                    <Radio value="rt-pcr-form-no">
                      ไม่ติดเชื้่อ
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this
                    area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk
                    upload. Strictly prohibit from
                    uploading company data or
                    other band files
                  </p>
                </Dragger>
              </Checkbox>
              <Checkbox value="atk">
                หลักฐานการตรวจโควิด-19 ด้วยวิธีการ
                ATK
                <br />
                <Form.Item
                  name="atk-form"
                  label="ผลตรวจที่ได้ :"
                >
                  <Radio.Group >
                    <Radio value="atk-form-yes">
                      ติดเชื้อ
                    </Radio>
                    <Radio value="atk-form-no">
                      ไม่ติดเชื้่อ
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Form.Item> */}

        <div className={styles.adresstitle}>
          ที่อยู่ที่สามารถติดต่อได้
        </div>

        <div className={styles.wrapaddress}>
          <div className={styles.couple}>
            <Form.Item
              name="address"
              label="ที่อยู่ :"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="province"
              label="จังหวัด :"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="district"
              label="อำเภอ/เขต :"
            >
              <Input />
            </Form.Item>
          </div>

          <div className={styles.couple}>
            <Form.Item
              name="subdistrict"
              label="ตำบล/แขวง :"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="zipcode"
              label="รหัสไปรษณีย์ :"
            >
              <Input />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}

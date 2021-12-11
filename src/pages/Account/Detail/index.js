import React from "react";

import styles from "./Detail.module.css";
import { InboxOutlined } from "@ant-design/icons";

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

const { Dragger } = Upload;
const { Option } = Select;

export default function Detail() {
  return (
    <div className={styles.body}>
      <p>ข้อมูลผู้ป่วย</p>
      <Button type="primary">แก้ไขข้อมูล</Button>
      <Form name="validate_other">
        <Form.Item name="idcard" label="เลขบัตรประชาชน :">
          <Input disabled />
        </Form.Item>
        <Form.Item name="bdate" label="วัน/เดือน/ปีเกิด :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="gender" label="คำนำหน้า :">
          <Select placeholder="" allowClear disabled>
            <Option value="mr">นาย</Option>
            <Option value="mrs">นาง</Option>
            <Option value="ms">นางสาว</Option>
          </Select>
        </Form.Item>

        <Form.Item name="fname" label="ชื่อ :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="lname" label="นามสกุล :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="email" label="อีเมล :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="phone" label="เบอร์โทรศัพท์ :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="gender" label="เพศ">
          <Radio.Group disabled>
            <Radio value="male">ชาย</Radio>
            <Radio value="female">หญิง</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="weight" label="น้ำหนัก :">
          <Input suffix="kg" disabled />
        </Form.Item>

        <Form.Item name="heigth" label="ส่วนสูง :">
          <Input suffix="cm" disabled />
        </Form.Item>

        <p>ที่อยู่ที่สามารถติดต่อได้</p>

        <Form.Item name="address" label="ที่อยู่ :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="province" label="จังหวัด :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="district" label="อำเภอ/เขต :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="subdistrict" label="ตำบล/แขวง :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="zipcode" label="รหัสไปรษณีย์ :">
          <Input disabled />
        </Form.Item>

        <Form.Item name="covid-evidence" label="คุณมีหลักฐานการตรวจโควิด-19 :">
          <Radio.Group disabled>
            <Radio value="covid-evidence-yes">มี</Radio>
            <Radio value="covid-evidence-no">ไม่มี</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="covid-prove">
          <Checkbox.Group disabled>
            <Row>
              <Checkbox value="rt-pcr">
                หลักฐานการตรวจโควิด-19 ด้วยวิธีการ RT-PCR(ใบรับรองแพทย์)
                <br />
                <Form.Item name="rt-pcr-form" label="ผลตรวจที่ได้ :">
                  <Radio.Group disabled>
                    <Radio value="rt-pcr-form-yes">ติดเชื้อ</Radio>
                    <Radio value="rt-pcr-form-no">ไม่ติดเชื้่อ</Radio>
                  </Radio.Group>
                </Form.Item>
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Checkbox>
              <Checkbox value="atk">
                หลักฐานการตรวจโควิด-19 ด้วยวิธีการ ATK
                <br />
                <Form.Item name="atk-form" label="ผลตรวจที่ได้ :">
                  <Radio.Group disabled>
                    <Radio value="atk-form-yes">ติดเชื้อ</Radio>
                    <Radio value="atk-form-no">ไม่ติดเชื้่อ</Radio>
                  </Radio.Group>
                </Form.Item>
                <Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Checkbox>
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
}

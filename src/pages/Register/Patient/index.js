import React from "react";
import "./index.css";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Space,
  Upload,
  message,
  Checkbox,
  Row,
  Col,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const { Option } = Select;

export default function Register() {
  return (
    <div>
      <p>ข้อมูลส่วนตัวผู้ป่วย</p>
      <br />
      <br />
      <Form name="validate_other">
        <Form.Item
          name="idcard"
          label="เลขบัตรประชาชน :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="bdate"
          label="วัน/เดือน/ปีเกิด :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="คำนำหน้า :"
          rules={[
            {
              required: true,
            },
          ]}
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
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lname"
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
          name="email"
          label="อีเมล :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="เบอร์โทรศัพท์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="เพศ">
          <Radio.Group>
            <Radio value="male">ชาย</Radio>
            <Radio value="female">หญิง</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="weight"
          label="น้ำหนัก :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input suffix="kg" />
        </Form.Item>

        <Form.Item
          name="heigth"
          label="ส่วนสูง :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input suffix="cm" />
        </Form.Item>

        <p>ที่อยู่ที่สามารถติดต่อได้</p>

        <Form.Item
          name="address"
          label="ที่อยู่ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="province"
          label="จังหวัด :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="district"
          label="อำเภอ/เขต :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="subdistrict"
          label="ตำบล/แขวง :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="zipcode"
          label="รหัสไปรษณีย์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="covid-evidence" label="คุณมีหลักฐานการตรวจโควิด-19 :">
          <Radio.Group>
            <Radio value="covid-evidence-yes">มี</Radio>
            <Radio value="covid-evidence-no">ไม่มี</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="covid-prove">
          <Checkbox.Group>
            <Row>
              <Checkbox value="rt-pcr">
                หลักฐานการตรวจโควิด-19 ด้วยวิธีการ RT-PCR(ใบรับรองแพทย์)
                <br />
                <Form.Item name="rt-pcr-form" label="ผลตรวจที่ได้ :">
                  <Radio.Group>
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
                  <Radio.Group>
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
        <Button type="primary">ลงทะเบียน</Button>
      </Form>
    </div>
  );
}

import React from "react";
import "./index.css";

import { Radio, Button, Form, Input } from "antd";

export default function Hospital() {
  return (
    <div>
      <p>ลงทะเบียนสถานพยาบาล</p>
      <br />
      <br />
      <Form>
        <Form.Item
          name="hospital_id"
          label="รหัสสถานพยาบาล :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
          <Input />
        </Form.Item>

        <Form.Item
          name="hospital_address"
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
          name="hospital_province"
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
          name="hospital_district"
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
          name="hospital_subdistrict"
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
          name="hospital_zipcode"
          label="รหัสไปรษณีย์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="hospital_tel"
          label="เบอร์โทรศัพท์ :"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Button type="primary">ลงทะเบียน</Button>
    </div>
  );
}

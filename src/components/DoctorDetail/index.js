import React from "react";
import styles from "./DoctorDetail.module.css";

import { Radio, Button, Form, Input } from "antd";

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
}) {
  return (
    <div className={styles.body}>
      <Form {...formItemLayout}>
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
      <Button type="primary">ลงทะเบียน</Button>
    </div>
  );
}

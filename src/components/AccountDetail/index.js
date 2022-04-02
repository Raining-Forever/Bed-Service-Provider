import React from "react";
import styles from "./AccountDetail.module.css";

import { InboxOutlined } from "@ant-design/icons";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
} from "antd";
import axios from "axios";

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
      // offset: 4,
    },
  },
};
export default function AccountDetail({
  patientinfo,
  setPatientinfo,
  disabled,
}) {
  const [form] = Form.useForm();

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
          } else {
            const { data } = await axios.post(
              `https://bed-service-provider.herokuapp.com/api/patient/`,
              form.getFieldsValue()
            );
            console.log(data);
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
              name="email"
              label="อีเมล :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
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
              name="bdate"
              label="วัน/เดือน/ปีเกิด :"
            >
              <Input
                disabled={disabled}
                className={styles.inputinfo}
              />
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
              name="heigth"
              label="ส่วนสูง :"
            >
              <Input
                className={styles.inputinfo}
                suffix="cm"
                disabled={disabled}
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
      <Button onClick={() => form.submit()}>
        asdfasdf
      </Button>
    </div>
  );
}

import React from "react";
import styles from "./HospitalDetail.module.css";

import { Button, Form, Input } from "antd";
import axios from "axios";

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
}) {
  const [form] = Form.useForm();

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
          } else {
            const { data } = await axios.post(
              `https://bed-service-provider.herokuapp.com/api/hospital`,
              form.getFieldValue()
            );
            console.log(data);
          }
        }}
      >
        <Form.Item
          name="hospital_id"
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
          name="hospital_tel"
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
      <Button
        type="primary"
        onClick={() => form.submit()}
      >
        ลงทะเบียน
      </Button>
    </div>
  );
}

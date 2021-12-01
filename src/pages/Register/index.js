import React from "react";
import "./index.css";

import { Radio, Button } from "antd";

const options = [
  { label: "ผู้ป่วย", value: "Patient" },
  { label: "หน่วยงานแพทย์", value: "Doctor" },
];

export default function Register() {
  return (
    <div>
      <p>โปรดเลือกสถานะท่านที่ต้องการลงทะเบียน</p>
      <Radio.Group
        options={options}
        //   onChange={this.onChange3}
        //   value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Button danger>ย้อนกลับ</Button>
      <Button type="primary">ดำเนินการต่อ</Button>
    </div>
  );
}

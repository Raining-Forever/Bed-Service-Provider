import React from "react";
import "./index.css";

import { Radio, Button } from "antd";

const options = [
  { label: "สถานพยาบาล", value: "Hospital" },
  { label: "แพทย์", value: "Doctor" },
];

export default function Agency() {
  return (
    <div>
      <p>ลงทะเบียนหน่วยงานแพทย์</p>
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

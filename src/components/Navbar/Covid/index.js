import React from "react";
import "./index.css";

import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Covid() {
  return (
    <Menu style={{ width: 256 }} mode="inline">
      <SubMenu
        key="sub_covid"
        icon={<AppstoreOutlined />}
        title="ข้อมูลเกี่ยวกับโควิด-19"
      >
        <Menu.Item key="0">ข้อควรปฏิบัติเมื่อติด โควิด-19</Menu.Item>
        <Menu.Item key="2">ข้อมูลติดต่อหน่วยงานอื่น</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

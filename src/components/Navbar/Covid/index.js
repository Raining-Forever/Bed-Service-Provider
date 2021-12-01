import React from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import "./index.css";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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

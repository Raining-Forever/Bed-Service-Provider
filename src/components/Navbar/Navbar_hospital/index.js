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

import Covid from "../Covid";

const { SubMenu } = Menu;

export default function Navbar_hospital() {
  return (
    <Router>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["0"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="0">
          <NavLink to="/" activeclassname="selectedLink">
            หน้าหลัก
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="สำหรับสถานพยาบาล">
          <Menu.ItemGroup key="g2" title="การให้การรักษาผู้ป่วย">
            <Menu.Item key="1">รายชื่อผู้ต้องเข้ารับการรักษา</Menu.Item>
            <Menu.Item key="2">ประวัติรายชื่อผู้รับการรักษา</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu
          key="sub2"
          icon={<AppstoreOutlined />}
          title="ข้อมูลเกี่ยวกับโควิด-19"
        >
          <Menu.Item key="3">ข้อควรปฏิบัติเมื่อติด โควิด-19</Menu.Item>
          <Menu.Item key="4">ข้อมูลติดต่อหน่วยงานอื่น</Menu.Item>
        </SubMenu>
      </Menu>
    </Router>
  );
}

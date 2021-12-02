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

export default function Navbar_admin() {
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
        <SubMenu key="sub1" icon={<MailOutlined />} title="สำหรับผู้ดูแล">
          <Menu.ItemGroup key="g1" title="ระบบจัดการผู้ป่วย">
            <Menu.Item key="1">ผู้ป่วยทั้งหมด</Menu.Item>
            <Menu.Item key="2">ตรวจสอบหลักฐาน</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="ระบบจัดการแพทย์">
            <Menu.Item key="3">แพทย์ทั้งหมด</Menu.Item>
            <Menu.Item key="4">รายการการให้คำปรึกษา</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3" title="ระบบจัดการสถานพยาบาล">
            <Menu.Item key="5">สถานพยาบาลทั้งหมด</Menu.Item>
            <Menu.Item key="6">รายการการจองเตียง</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Router>
  );
}

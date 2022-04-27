import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import styles from "./Navbar_admin.module.css";

import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Navbar_admin() {
  return (
    <Menu
      style={{ width: 256 }}
      className={styles.menu}
      defaultSelectedKeys={["0"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="0">
        <NavLink to="/" activeclassname="selectedLink">
          หน้าหลัก
        </NavLink>
      </Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="สำหรับผู้ดูแล">
        <Menu.ItemGroup key="g1" title="ระบบจัดการผู้ป่วย">
          <Menu.Item key="1">
            <NavLink to="/managepatient" activeclassname="selectedLink">
              ผู้ป่วยทั้งหมด
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/checkevidence" activeclassname="selectedLink">
              ตรวจสอบหลักฐาน
            </NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="ระบบจัดการแพทย์">
          <Menu.Item key="3">
            <NavLink to="/managedoctor" activeclassname="selectedLink">
              แพทย์ทั้งหมด
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/manageappoint" activeclassname="selectedLink">
              รายการการให้คำปรึกษา
            </NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="ระบบจัดการสถานพยาบาล">
          <Menu.Item key="5">
            <NavLink to="/managehospital" activeclassname="selectedLink">
              สถานพยาบาลทั้งหมด
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to="/managereserve" activeclassname="selectedLink">
              รายการการจองเตียง
            </NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

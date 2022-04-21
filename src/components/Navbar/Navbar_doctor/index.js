import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import styles from "./NavbarDoctor.module.css";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Navbar_doctor() {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["0"]}
      className={styles.menu}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <img
        src="https://www.img.in.th/images/0b3eaa71820a71070cebca48dacc9ad7.png"
        alt="0b3eaa71820a71070cebca48dacc9ad7.png"
        border="0"
      />
      <Menu.Item key="0">
        <NavLink
          to="/"
          activeclassname="selectedLink"
        >
          หน้าหลัก
        </NavLink>
      </Menu.Item>

      <SubMenu
        key="sub1"
        icon={<MailOutlined />}
        title="การนัดให้คำปรึกษาผู้ป่วย"
      >
        <Menu.ItemGroup
          key="g1"
          title="ปรึกษาแพทย์"
        >
          <Menu.Item key="1">
            ลงทะเบียนให้คำปรึกษา
          </Menu.Item>
          <Menu.Item key="2">
            รายการการให้คำปรึกษา
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <SubMenu
        key="sub2"
        icon={<AppstoreOutlined />}
        title="ข้อมูลเกี่ยวกับโควิด-19"
      >
        <Menu.Item key="3">
          ข้อควรปฏิบัติเมื่อติด โควิด-19
        </Menu.Item>
        <Menu.Item key="4">
          ข้อมูลติดต่อหน่วยงานอื่น
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

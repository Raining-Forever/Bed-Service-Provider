import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import styles from "./NavbarHospital.module.css";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Navbar_hospital() {
  return (
    <Menu
      style={{ width: 256 }}
      className={styles.menu}
      defaultSelectedKeys={["0"]}
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
      <Menu.Item key="1">
        <NavLink
          to="/accounthospital"
          activeclassname="selectedLink"
        >
          ข้อมูลโรงพยาบาล
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<MailOutlined />}
        title="สำหรับสถานพยาบาล"
      >
        <Menu.ItemGroup
          key="g2"
          title="การให้การรักษาผู้ป่วย"
        >
          <Menu.Item key="2">
            <NavLink
              to="/reservehospital"
              activeclassname="selectedLink"
            >
              รายชื่อผู้ต้องเข้ารับการรักษา
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink
              to="/historypatient"
              activeclassname="selectedLink"
            >
              ประวัติรายชื่อผู้รับการรักษา
            </NavLink>
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

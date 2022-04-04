import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarPatient.module.css";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Navbar_patient() {
  return (
    <Menu
      style={{ width: 256 }}
      className={styles.menu}
      defaultSelectedKeys={["0"]}
      defaultOpenKeys={["sub1", "sub2"]}
      mode="inline"
    >
      <Menu.Item key="0" icon={<HomeOutlined />}>
        <NavLink
          to="/"
          activeclassname="selectedLink"
        >
          หน้าหลัก
        </NavLink>
      </Menu.Item>
      <SubMenu
        key="sub1"
        icon={<UserOutlined />}
        title="สำหรับผู้ป่วย"
      >
        <Menu.Item key="1">
          <NavLink
            to="/account"
            activeclassname="selectedLink"
          >
            ข้อมูลผู้ป่วย
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink
            to="/form"
            activeclassname="selectedLink"
          >
            ประเมินความรุนแรงของอาการ
          </NavLink>
        </Menu.Item>
        <Menu.ItemGroup
          key="g1"
          title="ปรึกษาแพทย์"
        >
          <Menu.Item key="3">
            <NavLink
              to="/formResult"
              activeclassname="selectedLink"
            >
              ปรึกษาแพทย์
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            ประวัติการปรึกษาแพทย์
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup
          key="g2"
          title="การค้นหาและจองเตียง"
        >
          <Menu.Item key="5">
            การค้นหาและจองเตียง
          </Menu.Item>
          <Menu.Item key="6">
            ประวัติการจองเตียง
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <SubMenu
        key="sub2"
        icon={<AppstoreOutlined />}
        title="ข้อมูลเกี่ยวกับโควิด-19"
      >
        <Menu.Item key="7">
          ข้อควรปฏิบัติเมื่อติด โควิด-19
        </Menu.Item>
        <Menu.Item key="8">
          ข้อมูลติดต่อหน่วยงานอื่น
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

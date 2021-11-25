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

export default function Navbar() {
  return (
    <Router>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="0">
          <NavLink to="/dashboard" activeclassname="selectedLink">
            หน้าหลัก
          </NavLink>
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="สำหรับผู้ป่วย">
          <Menu.Item key="1">
            <NavLink to="/dashboard" activeclassname="selectedLink">
              ข้อมูลผู้ป่วย
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/dashboard" activeclassname="selectedLink">
              ประเมินความรุนแรงของอาการ
            </NavLink>
          </Menu.Item>
          <Menu.ItemGroup key="g1" title="ปรึกษาแพทย์">
            <Menu.Item key="3">ปรึกษาแพทย์</Menu.Item>
            <Menu.Item key="4">ประวัติการปรึกษาแพทย์</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="การค้นหาและจองเตียง">
            <Menu.Item key="5">การค้นหาและจองเตียง</Menu.Item>
            <Menu.Item key="6">ประวัติการจองเตียง</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <SubMenu
          key="sub2"
          icon={<AppstoreOutlined />}
          title="ข้อมูลเกี่ยวกับโควิด-19"
        >
          <Menu.Item key="7">ข้อควรปฏิบัติเมื่อติด โควิด-19</Menu.Item>
          <Menu.Item key="8">ข้อมูลติดต่อหน่วยงานอื่น</Menu.Item>
        </SubMenu>
      </Menu>
    </Router>
  );
}

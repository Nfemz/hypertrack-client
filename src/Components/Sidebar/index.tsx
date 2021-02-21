import React from "react";
import { Layout, Menu } from "antd";
import { AuditOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Layout.Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<AuditOutlined />}>
          <Link to="/students">Students</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link to="/config">Config</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

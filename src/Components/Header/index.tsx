import React from "react";
import { Layout, Menu, Space } from "antd";
import {
  NotificationOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";

export const Header = () => {
  return (
    <Layout.Header
      className="header"
      style={{ overflow: "auto", position: "sticky", width: "100%" }}
    >
      <Menu theme="dark" mode="horizontal">
        <Space style={{ float: "right" }}>
          <NotificationOutlined />
          <UserOutlined />
          <QuestionCircleOutlined />
        </Space>
      </Menu>
    </Layout.Header>
  );
};

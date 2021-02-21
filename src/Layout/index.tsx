import React from "react";
import { Layout } from "antd";

export const AppLayout = ({ children }) => {
  return (
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      {children}
    </Layout>
  );
};

export const ContentWrapper = ({ children }) => {
  return (
    <Layout.Content
      style={{
        margin: "16px 16px 16px 16px",
        overflow: "initial",
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          textAlign: "center",
          minHeight: `calc(100vh - 96px)`,
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
};

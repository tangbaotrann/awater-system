import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons/lib/icons";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Popover } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./DefaultLayout.css";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

const { Header, Sider, Content } = Layout;

function DefaultLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarMenu = useSelector(btnClickSidebarMenuSelector);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
        className="sidebar"
      >
        {!collapsed && <h1 className="logo-primary">AWATER</h1>}

        <SidebarMenu />
      </Sider>

      <Layout className="site-layout">
        <Header>
          <div className="site-layout-info">
            <Popover content="Đăng xuất">
              {/* Đổi thành img */}
              <UserOutlined />
            </Popover>

            <h4>Manager Name</h4>
          </div>

          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            marginTop: "12px",
            marginLeft: "22px",
          }}
        >
          {sidebarMenu === null ? (
            <h1 className="text-welcome">
              CHÀO MỪNG BẠN ĐẾN VỚI AWATER CỦA CHÚNG TÔI.
            </h1>
          ) : (
            children
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons/lib/icons";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Layout, Popover } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import "./DefaultLayout.css";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import { primaryLogo } from "../../asset/images";
import { Link } from "react-router-dom";
import endPoints from "../../routers";

const { Header, Sider, Content } = Layout;

function DefaultLayout({ children, currentPage }) {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const sidebarMenu = useSelector(btnClickSidebarMenuSelector);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const showDrawer = () => {
    setOpen(true);
    setCollapsed(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      {/* Screen tablet */}
      {!isTabletOrMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={270}
          className="sidebar"
        >
          {!collapsed && (
            <Link to={endPoints.PUBLIC}>
              <img
                src={primaryLogo.logo}
                className="primary-logo"
                alt="logo-awater"
              />
            </Link>
          )}

          <SidebarMenu />
        </Sider>
      )}

      <Layout className="site-layout">
        <Header className="header-top">
          {/* Tablet or mobile */}
          {isTabletOrMobile && (
            <>
              <MenuOutlined onClick={showDrawer} className="custom-menu-icon" />

              {/* show option menu */}
              <Drawer
                placement={placement}
                width={400}
                onClose={onClose}
                open={open}
              >
                <SidebarMenu
                  onCloseDrawer={onClose}
                  isTabletOrMobile={isTabletOrMobile}
                />
              </Drawer>
            </>
          )}

          <div
            className={
              isTabletOrMobile ? "site-layout-info-mobile" : "site-layout-info"
            }
          >
            <Popover content="Đăng xuất">
              {/* Đổi thành img */}
              <UserOutlined />
            </Popover>

            <h4>Manager Name</h4>
          </div>

          {!isTabletOrMobile &&
            React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
        </Header>
        <Content
          style={{
            margin: "13px",
          }}
        >
          {sidebarMenu === null &&
          currentPage === null &&
          currentPage !== "" ? (
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

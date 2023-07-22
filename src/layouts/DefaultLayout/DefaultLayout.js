import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons/lib/icons";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Popover, Select } from "antd";
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

  const onSearch = (value) => {
    console.log("search:", value);
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
        <Header className="header-top position-relative">
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

          {!isTabletOrMobile && (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 60,
                height: 60,
              }}
            />
          )}

          <Select
            className="position-absolute top-50 start-50 translate-middle w-100"
            showSearch
            placeholder="Chọn nhà máy"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "NM1",
                label: "NM1",
              },
              {
                value: "MN2",
                label: "MN2",
              },
              {
                value: "NM3",
                label: "NM3",
              },
              {
                value: "NM4",
                label: "NM4",
              },
              {
                value: "NM5",
                label: "NM5",
              },
            ]}
          />

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

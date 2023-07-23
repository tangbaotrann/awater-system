import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons/lib/icons";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Popover, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import "./DefaultLayout.css";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import { primaryLogo } from "../../asset/images";
import { Link } from "react-router-dom";
import endPoints from "../../routers";
import { fetchApiAllFactory } from "../../redux/slices/factorySlice/factorySlice";
import { fetchApiAllFactorySelector } from "../../redux/selector";
const { Header, Sider, Content } = Layout;

function DefaultLayout({ children, currentPage }) {

  const factoryNames = useSelector(fetchApiAllFactorySelector);
  const firstInputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiAllFactory());
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const { Option } = Select;
  const factories = ["Nhà máy 1", "Nhà máy 2", "Nhà máy 3", "Nhà máy 4"];
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

          {/* <Select
            className="position-absolute top-50 start-50 translate-middle w-100"
            showSearch
            placeholder="Chọn nhà máy"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
          >
            {factories.map((factory) => (
              <Option value={factory}>{factory}</Option>
            ))}
          </Select> */}
          <Select
            className="login-select"
            ref={firstInputRef}
            options={
              factoryNames?.length <= 0
                ? []
                : factoryNames.map((_factory) => ({
                    label: _factory.tenNhaMay,
                    value: _factory.id,
                  }))
            }
            fieldNames="nhaMayId"
            placeholder="Chọn nhà máy"
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

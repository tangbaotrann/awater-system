import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
} from "@ant-design/icons/lib/icons";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Popover } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./DefaultLayout.css";
import constants from "../../utils/constants";
import sidebarSlice from "../../redux/slices/sidebarSlice/sidebarSlice";
import { btnClickSidebarMenuSelector } from "../../redux/selector";

const { Header, Sider, Content } = Layout;

function DefaultLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();

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
        <Menu
          theme="light"
          mode="inline"
          style={{ fontSize: "1.5rem", fontWeight: "800" }}
          items={[
            {
              key: "1",
              icon: <TableOutlined />,
              label: "Tiếp nhận & thụ lý hồ sơ",
              children: [
                {
                  label: "Tiếp nhận hồ sơ",
                  key: constants.RECEIPT_DOC,
                },
                {
                  label: "Thụ lý hồ sơ",
                  key: constants.ACCEPTANCE_DOC,
                },
                {
                  label: "Hồ sơ thiết kế",
                  key: constants.DESIGN_DOC,
                },
              ],
            },
            {
              key: "2",
              icon: <TableOutlined />,
              label: "Hợp đồng và đăng ký",
              children: [
                {
                  label: "Đơn đăng ký",
                  key: constants.REGISTRATION_FORM,
                },
                {
                  label: "Dự toán",
                  key: constants.ESTIMATES,
                },
                {
                  label: "Quản lý hợp đồng",
                  key: constants.CONTRACT_MANAGER,
                },
                {
                  label: "Tỷ lệ bao phủ",
                  key: constants.COVERAGE_RATE,
                },
                {
                  label: "Số quản lý đồng hồ",
                  key: constants.NUMBER_MANAGEMENT,
                },
              ],
            },
            {
              key: "3",
              icon: <TableOutlined />,
              label: "Ghi chỉ số & hóa đơn",
              children: [
                {
                  label: "Số đọc chỉ số",
                  key: constants.READINGS_INDEX,
                },
                {
                  label: "Nhập chỉ số",
                  key: constants.ENTER_INDEX,
                },
                {
                  label: "Hóa đơn",
                  key: constants.BILL_ORDER,
                },
                {
                  label: "In hóa đơn",
                  key: constants.PRINT_BILL_ORDER,
                },
                {
                  label: "Phát hành hóa đơn điện tử",
                  key: constants.EXPORT_PRINT_BILL_ORDER,
                },
              ],
            },
          ]}
          // Change layout
          onSelect={(item) => {
            // menu 1
            if (item.key === constants.RECEIPT_DOC) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.ACCEPTANCE_DOC) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.DESIGN_DOC) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            }
            // menu 2
            else if (item.key === constants.REGISTRATION_FORM) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.ESTIMATES) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.CONTRACT_MANAGER) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.COVERAGE_RATE) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            } else if (item.key === constants.NUMBER_MANAGEMENT) {
              dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
            }
            // menu 3
            // ...
          }}
        />
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

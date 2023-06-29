import {
  CloseCircleOutlined,
  DownOutlined,
  FileExcelOutlined,
  KeyOutlined,
  MailOutlined,
  SettingOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Tabs } from "antd";
import React from "react";
import "./FooterReadingIndex.css";

export const FooterLogNotice = (props) => {
  const {
    setIsOpenModalCreate,
    setIsModalOpenMCreate,
    isTabletOrMobile,
    setIsModalOpenIndexBar,
  } = props;

  const extension = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Đồng bộ từ hồ sơ
        </a>
      ),
      key: "0",
      icon: <SyncOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Xuất hóa đơn theo mẫu
        </a>
      ),
      key: "1",
      icon: <FileExcelOutlined style={{ color: "#1677ff" }} />,
    },
  ];
  
  const tabs = [
    {
      id: "1",
      label: (
        <span
          onClick={() => setIsOpenModalCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Gửi SMS tiền nước
        </span>
      ),
      icon: <MailOutlined />,
    },
    {
      id: "2",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Gửi SMS CSKH
        </span>
      ),
      icon: <MailOutlined />,
    },
    {
      id: "3",
      label: (
        <span
          // onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Gửi thông báo tiền nước
        </span>
      ),
      icon: <MailOutlined />,
    },
    {
      id: "4",
      label: (
        <span
          // onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Gửi thông báo CSKH
        </span>
      ),
      icon: <MailOutlined />,
    },
    {
      id: "9",
      label: (
        <Dropdown
          menu={{
            items: extension,
          }}
        >
          <a href="#!" onClick={(e) => e.preventDefault()}>
            <Space>
              Tiện ích
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
      icon: <SettingOutlined />,
    },
    {
      id: "10",
      label: <span onClick={() => setIsModalOpenIndexBar(true)}>Chỉ số</span>,
    },
  ];

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: (
              <div className="test">
                {_tab.icon} {_tab.label}
              </div>
            ),
            key: _tab.id,
          };
        })}
      />
    </>
  );
};

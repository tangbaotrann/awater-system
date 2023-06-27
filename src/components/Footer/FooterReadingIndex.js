import {
  CheckCircleOutlined,
  CloseCircleFilled,
  CloseCircleOutlined,
  DownOutlined,
  EditOutlined,
  KeyOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space, Tabs } from "antd";
import React from "react";
import "./FooterReadingIndex.css";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

export const FooterReadingIndex = (props) => {
  const { setIsOpenModalCreate, setIsModalOpenMCreate, isTabletOrMobile } =
    props;

  const tabs = [
    {
      id: "1",
      label: (
        <span
          onClick={() => setIsOpenModalCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Tạo sổ
        </span>
      ),
      icon: <PlusCircleOutlined />,
    },
    {
      id: "2",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Tạo sổ đồng loạt
        </span>
      ),
      icon: <PlusCircleOutlined />,
    },
    {
      id: "3",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Xóa sổ
        </span>
      ),
      icon: <CloseCircleOutlined />,
    },
    {
      id: "4",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Khóa sổ và tính tiền
        </span>
      ),
      icon: <KeyOutlined />,
    },
    {
      id: "5",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Xóa biểu mẫu
        </span>
      ),
      icon: <PlusCircleOutlined />,
    },
    {
      id: "6",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Chốt sổ
        </span>
      ),
      icon: <CheckCircleOutlined />,
    },
    {
      id: "7",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Ngừng ghi chỉ số
        </span>
      ),
      icon: <SettingOutlined />,
    },
    {
      id: "8",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Ngừng ghi chỉ số
        </span>
      ),
      icon: <EditOutlined />,
    },
    {
      id: "9",
      label: ( 
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Tiện ích
        </span>
      ),
      icon: <SettingOutlined />,
    },
    {
      id: "10",
      label: (
        <span
          onClick={() => setIsModalOpenMCreate(true)}
          style={{ marginLeft: "-9px" }}
        >
          Chỉ số
        </span>
      ),
      icon: <SettingOutlined />,
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

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  KeyOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import "./FooterReadingIndex.css";

export const FooterReadingIndex = (props) => {
  const { setIsOpenModalCreate, setIsModalOpenMCreate, isTabletOrMobile, setIsModalOpenIndexBar } =
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          // onClick={() => setIsModalOpenMCreate(true)}
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
          onClick={() => setIsModalOpenIndexBar(true)}
        >
          Chỉ số
        </span>
      ),
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

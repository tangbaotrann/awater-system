import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditOutlined,
  KeyOutlined,
  PlusCircleOutlined,
  SettingOutlined,
  MoreOutlined,
  CaretDownOutlined,
  BarChartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import "./FooterReadingIndex.css";

export const FooterReadingIndex = (props) => {
  const {
    setIsOpenModalCreate,
    setIsModalOpenMCreate,
    isTabletOrMobile,
    setIsModalOpenIndexBar,
  } = props;

  const tabs = [
    {
      id: "1",
      label: <span onClick={() => setIsModalOpenMCreate(true)}>Tạo sổ</span>,
      icon: <PlusCircleOutlined />,
    },
    {
      id: "2",
      label: (
        <span onClick={() => setIsOpenModalCreate(true)}>Tạo sổ đồng loạt</span>
      ),
      icon: <PlusCircleOutlined />,
    },
    {
      id: "3",
      label: (
        <span
        // onClick={() => setIsModalOpenMCreate(true)}
        >
          Xóa sổ
        </span>
      ),
      icon: <DeleteOutlined />,
    },
    {
      id: "4",
      label: (
        <span
        // onClick={() => setIsModalOpenMCreate(true)}
        >
          Bỏ khóa
        </span>
      ),
      icon: <KeyOutlined />,
    },
    // {
    //   id: "4",
    //   label: (
    //     <span
    //       // onClick={() => setIsModalOpenMCreate(true)}
    //     >
    //       Khóa sổ và tính tiền
    //     </span>
    //   ),
    //   icon: <KeyOutlined />,
    // },
    {
      id: "5",
      label: (
        <span
        // onClick={() => setIsModalOpenMCreate(true)}
        >
          Xóa biểu mẫu
        </span>
      ),
      icon: <CloseCircleOutlined />,
    },
    {
      id: "6",
      label: (
        <span
        // onClick={() => setIsModalOpenMCreate(true)}
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
        >
          Đồng bộ lại
        </span>
      ),
      icon: <EditOutlined />,
    },
    {
      id: "9",
      label: (
        <span
        // onClick={() => setIsModalOpenMCreate(true)}
        >
          Tiện ích
        </span>
      ),
      icon: <MoreOutlined />,
      iconRight: <CaretDownOutlined />,
    },
    {
      id: "10",
      label: <span onClick={() => setIsModalOpenIndexBar(true)}>Chỉ số</span>,
      icon: <BarChartOutlined />,
    },
  ];

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab, index) => {
          return {
            label: (
              <div
                className={`tab-item-readingIndex tab-item-readingIndex-${_tab.id}`}
              >
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

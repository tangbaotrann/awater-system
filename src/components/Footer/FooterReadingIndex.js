import {
  CheckCircleOutlined,
  CloseCircleFilled,
  DownOutlined,
  EditOutlined,
  KeyOutlined,
  PlusCircleFilled,
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
  const {
    setIsOpenModalCreate,
    setIsModalOpenMCreate,
    isTabletOrMobile,
    setIsModalOpenIndexBar,
  } = props;
  const tabs = [
    {
      id: "1",
      label: (
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={() => setIsOpenModalCreate(true)}
          size="small"
        >
          Tạo sổ
        </Button>
      ),
    },
    {
      id: "2",
      label: (
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
        >
          Tạo sổ đồng loạt
        </Button>
      ),
    },
    {
      id: "3",
      label: (
        <Button
          type="primary"
          icon={<CloseCircleFilled />}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
          disabled
        >
          Xóa sổ
        </Button>
      ),
    },
    {
      id: "4",
      label: (
        <Button
          type="primary"
          icon={<KeyOutlined />}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
          disabled
        >
          Khóa sổ và tính tiền
        </Button>
      ),
    },
    {
      id: "5",
      label: (
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={() => setIsOpenModalCreate(true)}
          size="small"
          disabled
        >
          Xóa biểu mẫu
        </Button>
      ),
    },
    {
      id: "6",
      label: (
        <Button
          type="primary"
          icon={<CheckCircleOutlined />}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
          disabled
        >
          Chốt sổ
        </Button>
      ),
    },
    {
      id: "7",
      label: (
        <Button
          type="primary"
          icon={<SettingOutlined />}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
          disabled
        >
          Ngừng ghi chỉ số
        </Button>
      ),
    },
    {
      id: "8",
      label: (
        <Button
          type="primary"
          icon={<EditOutlined />}
          style={{ marginLeft: "auto" }}
          onClick={() => setIsModalOpenMCreate(true)}
          size="small"
          disabled
        >
          Đồng bộ lại
        </Button>
      ),
    },
    {
      id: "9",
      label: (
        <Button icon={<SettingOutlined />} type="primary" size="small">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a href="#!" onClick={(e) => e.preventDefault()}>
              <Space>
                Tiện ích
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      id: "10",
      label: (
        <Button
          type="primary"
          style={{ marginLeft: "auto" }}
          onClick={() => setIsModalOpenIndexBar(true)}
          size="small"
        >
          Chỉ số
        </Button>
      ),
    },
  ];

  // const handleChangeTabs = (key) => {
  //   if (key === "1") {
  //     setIsOpenModalCreate(true);
  //   } else if (key === "2") {
  //     setIsModalOpenMCreate(true);
  //   } else if (key === "3") {
  //     setIsModalOpenMCreate(true);
  //   } else if (key === "4") {
  //     setIsModalOpenMCreate(true);
  //   } else if (key === "5") {
  //     setIsOpenModalCreate(true);
  //   } else if (key === "6") {
  //     setIsModalOpenMCreate(true);
  //   } else if (key === "7") {
  //     setIsModalOpenMCreate(true);
  //   } else if (key === "8") {
  //     setIsModalOpenMCreate(true);
  //   }
  // };

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: <div>{_tab.label}</div>,
            key: _tab.id,
          };
        })}
        // onChange={handleChangeTabs}
      />
    </>
  );
};

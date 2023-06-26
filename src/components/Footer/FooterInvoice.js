import { Button, Dropdown, Space, Tabs } from "antd";
import {
  CalculatorOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  DownOutlined,
  EditFilled,
  EditOutlined,
  FileExcelOutlined,
  FileFilled,
  FileSearchOutlined,
  FileSyncOutlined,
  FileTextOutlined,
  MailFilled,
  PlusCircleFilled,
  ProfileFilled,
  RedoOutlined,
  SettingOutlined,
  StopOutlined,
  SyncOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import './FooterReadingIndex.css'

export const FooterInvoice = (props) => {
  const {
    setIsOpenModalBill,
    setIsModalInstalmentsOpen,
    setIsOpenModalAddInvoice,
    setIsOpenModalEditInvoice,
    setIsOpenModalWaterStatus,
    setIsModalEmail,
    setIsModalSMS,
    isTabletOrMobile,
    setIsOpenModalInvoiceBar,
  } = props;

  const hanldeOpen = (isOpen, type) => {
    if (type === "email") {
      setIsModalEmail(isOpen);
    }
    if (type === "sms") {
      setIsModalSMS(isOpen);
    }
  };

  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#!">
          Hủy hóa đơn
        </a>
      ),
      key: "0",
      icon: <DeleteOutlined style={{ color: "red" }} />,
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#!">
          Điều chỉnh hóa đơn
        </a>
      ),
      key: "1",
      icon: <EditOutlined style={{ color: "blue" }} />,
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#!">
          Thay thế hóa đơn
        </a>
      ),
      key: "2",
      icon: <RedoOutlined style={{ color: "blue" }} />,
    },
  ];

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
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Xuất hóa đơn theo nhà mạng
        </a>
      ),
      key: "2",
      icon: <FileExcelOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          In phiếu báo tiền nước
        </a>
      ),
      key: "3",
      icon: <FileTextOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Cập nhật trạng thái thu hộ
        </a>
      ),
      key: "4",
      icon: <FileSyncOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Cập nhật TT thu hộ theo tuyến
        </a>
      ),
      key: "5",
      icon: <UnorderedListOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Cập nhật hóa đơn hủy
        </a>
      ),
      key: "6",
      icon: <StopOutlined style={{ color: "#ff4d4f" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Bỏ hóa đơn hủy
        </a>
      ),
      key: "7",
      icon: <StopOutlined style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Cập nhật hóa đơn chưa in
        </a>
      ),
      key: "8",
      icon: <CloseCircleOutlined style={{ color: "#1677ff" }} />,
    },
  ];

  const itemEmail = [
    {
      label: (
        <span
          onClick={() => {
            hanldeOpen(true, "email");
          }}
        >
          Gửi Email
        </span>
      ),
      key: "0",
      icon: <MailFilled style={{ color: "#1677ff" }} />,
    },
    {
      label: (
        <span
          onClick={() => {
            hanldeOpen(true, "sms");
          }}
        >
          Gửi SMS
        </span>
      ),
      key: "1",
      icon: <MailFilled style={{ color: "#1677ff" }} />,
    },
  ];
  const tabs = [
    {
      id: "1",
      label: (
        <Button
          type="primary"
          icon={<CalculatorOutlined />}
          onClick={() => setIsOpenModalBill(true)}
          size="small"
        >
          Tính tiền
        </Button>
      ),
    },
    {
      id: "2",
      label: (
        <Button
          type="primary"
          icon={<CalculatorOutlined />}
          onClick={() => setIsModalInstalmentsOpen(true)}
          size="small"
        >
          Tính tiền trả góp
        </Button>
      ),
    },
    {
      id: "3",
      label: (
        <Button
          type="primary"
          icon={<PlusCircleFilled />}
          onClick={() => setIsOpenModalAddInvoice(true)}
          size="small"
        >
          Thêm hóa đơn
        </Button>
      ),
    },
    {
      id: "4",
      label: (
        <Button
          type="primary"
          icon={<EditFilled />}
          onClick={() => setIsOpenModalEditInvoice(true)}
          size="small"
        >
          Sửa hóa đơn
        </Button>
      ),
    },
    {
      id: "5",
      label: (
        <Button
          type="primary"
          icon={<FileFilled />}
          size="small"
        >
          <Dropdown
            menu={{
              items: items,
            }}
          >
            <a href="#!" onClick={(e) => e.preventDefault()}>
              <Space>
                Hóa đơn điện tử
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      id: "6",
      label: (
        <Button
          type="primary"
          icon={<FileSearchOutlined />}
          // onClick={() => setIsModalOpenMCreate(true)}
          size="small"
        >
          Xem hóa đơn
        </Button>
      ),
    },
    {
      id: "7",
      label: (
        <Button
          type="primary"
          icon={<MailFilled />}
          size="small"
        >
          <Dropdown menu={{ items: itemEmail }}>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              <Space>
                Gửi tin
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      id: "8",
      label: (
        <Button
          type="primary"
          icon={<ProfileFilled />}
          onClick={() => setIsOpenModalWaterStatus(true)}
          size="small"
        >
          Xem TH SD
        </Button>
      ),
    },
    {
      id: "9",
      label: (
        <Button
          icon={<SettingOutlined />}
          type="primary"
          size="small"
        >
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
        </Button>
      ),
    },
    {
      id: "10",
      label: (
        <Button
          type="primary"
          size="small"
          onClick={() => setIsOpenModalInvoiceBar(true)}
        >
          Chỉ số
        </Button>
      ),
    },
  ];

  return (

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
  );
};

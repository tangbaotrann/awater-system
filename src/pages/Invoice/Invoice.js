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
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Modal,
  Progress,
  Row,
  Select,
  Space,
  Table,
  theme,
} from "antd";
import { useState } from "react";
import { DetailInvoice } from "./Detail_Invoice/Detail_Invoice";
import { Instalments } from "./Instalments/Instalments";
import { CalculateMoney } from "./CalculateMoney/CalculateMoney";
import "./Invoice.css";
import { AddInvoice } from "./AddInvoice/AddInvoice";
import { EditInvoice } from "./EditInvoice/EditInvoice";
import { ModalMessage } from "./SendMessage/ModalMessage";
import { data } from "../../utils/dataTableInvoice";
import { WaterStatus } from "./WaterStatus/WaterStatus";
import { AdvancedSearchForm as FormSearchInvoice } from "../../components/FormSearchInvoice/FormSearchInvoice";



const Invoice = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [isOpenModalBill, setIsOpenModalBill] = useState(false);
  const [isModalInstalmentsOpen, setIsModalInstalmentsOpen] = useState(false);
  const [isOpenModalAddInvoice, setIsOpenModalAddInvoice] = useState(false);
  const [isOpenModalEditInvoice, setIsOpenModalEditInvoice] = useState(false);
  const [isModalEmail, setIsModalEmail] = useState(false);
  const [isModalSMS, setIsModalSMS] = useState(false);
  const [isOpenModalWaterStatus, setIsOpenModalWaterStatus] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleOk = (_, type) => {
    setIsOpenModalBill(false);
    if (type === "instalments") {
      setIsModalInstalmentsOpen(false);
    }
    if (type === "addInvoice") {
      setIsOpenModalAddInvoice(false);
    }
  };

  const handleCancel = (_, type) => {
    setIsOpenModalBill(false);
    if (type === "instalments") {
      setIsModalInstalmentsOpen(false);
    }
    if (type === "addInvoice") {
      setIsOpenModalAddInvoice(false);
    }
  };

  const hanldeOpen = (isOpen, type) => {
    if (type === "email") {
      setIsModalEmail(isOpen);
    }
    if (type === "sms") {
      setIsModalSMS(isOpen);
    }
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
      key: "contractNumber",
      render: (text) => (
        <a href="#!" onClick={showDrawer} style={{ color: "#4078f2" }}>
          {text}
        </a>
      ),
    },
    {
      title: "Mã ĐH",
      dataIndex: "codeClock",
      key: "codeClock",
    },
    {
      title: "Tuyến đọc",
      dataIndex: "readingRoute",
      key: "readingRoute",
    },
    {
      title: "Tên KH",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Chỉ số cũ",
      dataIndex: "oldIndex",
      key: "oldIndex",
    },
    {
      title: "Chỉ số mới",
      dataIndex: "newIndex",
      key: "newIndex",
    },
    {
      title: "Tiêu thụ",
      dataIndex: "consumption",
      key: "consumption",
    },
    {
      title: "Mã ĐT giá",
      dataIndex: "codePrice",
      key: "codePrice",
    },
  ];

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

  return (
    <>
      <FormSearchInvoice />
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 7,
          padding: "10px 10px",
          height: "527px",
          position: "relative",
        }}
      >
        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            y: 540,
          }}
        />
        <div style={{ display: "flex", position: "absolute", bottom: "0" }}>
          <Progress percent={10} size={[200, 20]} />
          <Progress percent={10} size={[200, 20]} strokeColor="#ff8033" />
          <Progress percent={10} size={[200, 20]} strokeColor="#ff8033" />
          <Progress percent={10} size={[200, 20]} strokeColor="#ff8033" />
          <Progress percent={10} size={[200, 20]} strokeColor="#ff8033" />
        </div>
        <DetailInvoice open={open} onClose={onClose} />
      </div>
      <div
        className="invoice_footer"
        style={{ display: "flex", marginTop: "10px", paddingRight: "10px" }}
      >
        <div>
          <Button
            type="primary"
            icon={<CalculatorOutlined />}
            onClick={() => setIsOpenModalBill(true)}
            size="small"
          >
            Tính tiền
          </Button>
          <Button
            type="primary"
            icon={<CalculatorOutlined />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsModalInstalmentsOpen(true)}
            size="small"
          >
            Tính tiền trả góp
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsOpenModalAddInvoice(true)}
            size="small"
          >
            Thêm hóa đơn
          </Button>
          <Button
            type="primary"
            icon={<EditFilled />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsOpenModalEditInvoice(true)}
            size="small"
          >
            Sửa hóa đơn
          </Button>
          <Button
            type="primary"
            icon={<FileFilled />}
            style={{ marginLeft: "10px" }}
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
          <Button
            type="primary"
            icon={<FileSearchOutlined />}
            style={{ marginLeft: "10px" }}
            // onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            Xem hóa đơn
          </Button>
          <Button
            type="primary"
            icon={<MailFilled />}
            style={{ marginLeft: "10px" }}
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
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<ProfileFilled />}
            style={{ marginLeft: "10px" }}
            onClick={() => setIsOpenModalWaterStatus(true)}
            size="small"
          >
            Xem TH SD
          </Button>
          <Button
            icon={<SettingOutlined />}
            type="primary"
            style={{ marginLeft: "10px" }}
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
        </div>
      </div>

      <CalculateMoney
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalBill}
      />
      <Instalments
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isModalInstalmentsOpen}
      />
      <AddInvoice
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddInvoice}
      />
      <EditInvoice
        isOpenEdit={isOpenModalEditInvoice}
        setIsOpenModalEditInvoice={setIsOpenModalEditInvoice}
      />
      <ModalMessage
        isModalEmail={isModalEmail}
        setIsModalEmail={setIsModalEmail}
        isModalSMS={isModalSMS}
        setIsModalSMS={setIsModalSMS}
      />
      <WaterStatus
        isOpen={isOpenModalWaterStatus}
        setIsOpen={setIsOpenModalWaterStatus}
      />
    </>
  );
};
export default Invoice;

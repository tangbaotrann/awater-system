import {
  CalculatorOutlined,
  DownOutlined,
  EditFilled,
  FileFilled,
  FileSearchOutlined,
  MailFilled,
  PlusCircleFilled,
  ProfileFilled,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
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
// import { CreateBook } from "./CreateBook/CreateBook";
// import { CreateMultipleBook } from "./CreateMultipleBook/CreateMultipleBook";
// import locale from "antd/es/date-picker/locale/vi_VN";
import "./Invoice.css";

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
      size="small"
    >
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item name="date" label="Chọn tháng">
            <DatePicker
              allowClear
              placeholder="Chọn tháng"
              style={{ width: "100%" }}
              format="MM-YYYY"
              picker="month"
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="person" label="Cán bộ đọc">
            <Select
              defaultValue="--Chọn cán bộ đọc--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="tuyendoc" label="Tuyến đọc">
            <Select
              defaultValue="--Chọn tuyến đọc--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="status" label="Phạm vi">
            <Select
              defaultValue="--Chọn phạm vi--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item name="status" label="Số hợp đồng">
            <Select
              defaultValue="--Chọn số hợp đồng--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="place" label="Khách hàng">
            <Input placeholder="Tên khách hàng" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="ky" label="Số hóa đơn">
            <Select
              defaultValue="--Chọn số hóa đơn--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="numberName" label="TT Hóa đơn">
            <Select
              defaultValue="--Chọn in hóa đơn--"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
          <Button>Tìm kiếm nâng cao</Button>
        </Space>
      </div>
    </Form>
  );
};

const Invoice = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [isOpenModalBill, setIsOpenModalBill] = useState(false);
  const [isModalInstalmentsOpen, setIsModalInstalmentsOpen] = useState(false);

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
  };

  const handleCancel = (_, type) => {
    setIsOpenModalBill(false);
    if (type === "instalments") {
      setIsModalInstalmentsOpen(false);
    }
  };

  const listStyle = {
    lineHeight: "200px",
    textAlign: "center",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    padding: "10px 10px",
    height: "527px",
    position: "relative",
  };

  const data = Array.from({ length: 10 }, (_, key) => ({
    key: key + 1,
    stt: key + 1,
    contractNumber: "abc",
    codeClock: "abc",
    readingRoute: "abc",
    username: "abc",
    address: "abc",
    oldIndex: "abc",
    newIndex: "abc",
    consumption: "abc",
    codePrice: "abc",
  }));

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

  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>
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
            // onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            Thêm hóa đơn
          </Button>
          <Button
            type="primary"
            icon={<EditFilled />}
            style={{ marginLeft: "10px" }}
            // onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            Sửa hóa đơn
          </Button>
          <Button
            type="primary"
            icon={<FileFilled />}
            style={{ marginLeft: "10px" }}
            // onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            Hóa đơn điện tử
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
            // onClick={() => setIsModalOpenMCreate(true)}
            size="small"
          >
            gửi tin
          </Button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<ProfileFilled />}
            style={{ marginLeft: "10px" }}
            // onClick={() => setIsModalOpenMCreate(true)}
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
      {/* <CreateMultipleBook
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isModalOpenMCreate}
      /> */}
    </>
  );
};
export default Invoice;

import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Collapse,
  DatePicker,
  Form,
  Input,
  Modal,
  Table,
  theme,
} from "antd";
import React from "react";
import { SearchForm } from "./SearchForm";

const NoticeWaterMoney = (props) => {
  const { token } = theme.useToken();
  const { isOpen, setIsOpen } = props;

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      children: <SearchForm />,
    },
  ];
  const dataSource = Array.from({ length: 50 }, (_, key) => ({
    key: key + 1,
    stt: key + 1,
    type: "abc",
    address: "abc",
    info: "abc",
    content: "abc",
    timeSent: "abc",
    result: "abc",
    number: "abc",
    netHouse: "abc",
  }));
  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 100,
    },
    {
      title: "Mã KH",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Tên KH",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
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
      dataIndex: "codeprice",
      key: "codeprice",
    },
    {
      title: "Thành tiền",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Phí BVMT",
      dataIndex: "bvmt",
      key: "bvmt",
    },
    {
      title: "Phí thải",
      dataIndex: "phithai",
      key: "phithai",
    },
    {
      title: "Phí BV Rừng",
      dataIndex: "Phibvrung",
      key: "Phibvrung",
    },
    {
      title: "Phí VAT",
      dataIndex: "vat",
      key: "vat",
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalMoney",
      key: "totalMoney",
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Ngày gửi",
      dataIndex: "datesend",
      key: "datesend",
    },
  ];

  return (
    <Modal
      title="Gửi thông báo tiền nước"
      open={isOpen}
      onOk={() => setIsOpen(false)}
      onCancel={() => setIsOpen(false)}
      width={1000}
      footer={null}
      style={{
        top: 20,
      }}
    >
      <Collapse items={items} size="small" />
      <div
        style={{
          lineHeight: "200px",
          textAlign: "center",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          marginTop: 16,
          padding: "10px 10px",
        }}
      >
        <Table
          //   rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={{
            current: 1,
            total: 10000,
            pageSize: 50,
          }}
          scroll={{
            x: 2000,
            y: 240,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "justify-between",
          marginBottom: 16,
          marginTop: 16,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <Form.Item
            name="date"
            label="Tiêu đề"
            rules={[
              {
                required: true,
                message: "Hãy thêm tên nhân viên",
              },
            ]}
          >
            <DatePicker
              allowClear
              placeholder="Chọn tháng"
              style={{ width: "100%" }}
              format="MM-YYYY"
              picker="month"
            />
          </Form.Item>
          <div style={{ marginLeft: "auto" }}>
            <Checkbox style={{ marginRight: "13px" }}>Email</Checkbox>
            <Checkbox style={{ marginRight: "13px" }}>
              Ứng dụng Nước Sạch
            </Checkbox>
            <Button
              type="primary"
              icon={<SendOutlined style={{ transform: "rotate(310deg)" }} />}
              style={{ marginRight: 5 }}
              size="middle"
            >
              Gửi
            </Button>
            <Button
              className="custom-btn-close"
              onClick={() => setIsOpen(false)}
              size="middle"
            >
              <CloseOutlined />
              Đóng
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NoticeWaterMoney;

import { SendOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Collapse, Modal, Table, theme } from "antd";
import React from "react";
import { SearchForm } from "./SearchForm";

export const SMSMoneyWater = (props) => {
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
      title: "Loại",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Địa chỉ nhận",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thông tin",
      dataIndex: "info",
      key: "info",
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Thời gian gửi",
      dataIndex: "timeSent",
      key: "timeSent",
    },
    {
      title: "Kết quả",
      dataIndex: "result",
      key: "result",
    },
    {
      title: "Số tin",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Nhà mạng",
      dataIndex: "netHouse",
      key: "netHouse",
    },
  ];

  return (
    <Modal
      title="Gửi SMS tiền nước"
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
            x: 1200,
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
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<SyncOutlined />}
            style={{ marginRight: 5 }}
            size="middle"
          >
            Cập nhật nhà mạng từ phiên gửi - TT khách hàng
          </Button>
          <Button
            type="primary"
            icon={<SendOutlined style={{ transform: "rotate(310deg)" }} />}
            style={{ marginRight: 5 }}
            size="middle"
          >
            Gửi lại
          </Button>
          <Button
            key="submit"
            onClick={() => setIsOpen(false)}
            size="middle"
          >
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

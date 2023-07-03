import { SendOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Modal, Table, theme } from "antd";
import { useState } from "react";

export const BlockClockDetail = (props) => {
  const { isOpen, setIsOpenModalNoticeDetail } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { token } = theme.useToken();
  console.log("render modal Detail");

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

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Modal
      title="Chi tiết thông báo"
      open={isOpen}
      onOk={() => setIsOpenModalNoticeDetail(false)}
      onCancel={() => setIsOpenModalNoticeDetail(false)}
      width={1000}
      footer={null}
      style={{
        top: 20,
      }}
    >
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
          rowSelection={rowSelection}
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
          >
            Cập nhật nhà mạng từ phiên gửi - TT khách hàng
          </Button>
          <Button
            type="primary"
            icon={<SendOutlined style={{ transform: "rotate(310deg)" }} />}
            style={{ marginRight: 5 }}
          >
            Gửi lại
          </Button>
          <Button
            key="submit"
            onClick={() => setIsOpenModalNoticeDetail(false)}
          >
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

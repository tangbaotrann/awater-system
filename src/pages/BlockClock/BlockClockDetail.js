import { SendOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Modal, Table, theme } from "antd";
import { useState } from "react";
import "./BlockClock.css";
export const BlockClockDetail = (props) => {
  const { isOpen, setIsOpenModalNoticeDetail } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { token } = theme.useToken();
  console.log("render modal Detail");

  const dataSource = Array.from({ length: 50 }, (_, key) => ({
    key: key + 1,
    stt: key + 1,
    shd: "abc",
    mkh: "abc",
    tkh: "abc",
    dc: "abc",
    dt: "abc",
    t: "abc",
    sh: "abc",
    kdh: "abc",
    vtld: "abc",
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "stt",
      key: "stt",
      width: 100,
    },
    {
      title: "Số hợp đồng",
      dataIndex: "shd",
      key: "shd",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "mkh",
      key: "mkh",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "tkh",
      key: "tkh",
    },
    {
      title: "Địa chỉ",
      dataIndex: "dc",
      key: "dc",
    },
    {
      title: "Điện thoại",
      dataIndex: "dt",
      key: "dt",
    },
    {
      title: "Tuyến",
      dataIndex: "t",
      key: "t",
    },
    {
      title: "Số hiẽu",
      dataIndex: "sh",
      key: "sh",
    },
    {
      title: "Kiểu đồng hò",
      dataIndex: "kdh",
      key: "kdh",
    },
    {
      title: "Vị trí lắp đặt",
      dataIndex: "vtld",
      key: "vtld",
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
            className="custom-btn-save-and-add"
            style={{ marginRight: 5 }}
          >
            Xuất Excel
          </Button>
          <Button
            className="custom-btn-watch-report"
            style={{ marginRight: 5 }}
          >
            Chuyển đồng hồ
          </Button>
          <Button className="    custom-btn-update" style={{ marginRight: 5 }}>
            Thêm đồng hồ
          </Button>
          <Button className="custom-btn-right" style={{ marginRight: 5 }}>
            Xóa
          </Button>
          <Button
            key="submit"
            className="custom-btn-close"
            onClick={() => setIsOpenModalNoticeDetail(false)}
          >
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

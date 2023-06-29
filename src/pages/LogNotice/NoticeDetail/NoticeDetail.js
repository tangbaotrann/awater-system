import { EyeOutlined, PlusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Modal,
  Row,
  Select,
  Table,
  theme,
} from "antd";
import { useState } from "react";

export const NoticeDetail = (props) => {
  const { isOpen, setIsOpenModalNoticeDetail } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { token } = theme.useToken();
  console.log(isOpen);

  const dataSource = [
    {
      key: "1",
      stt: "1",
      employee: "Mike",
      readCode: 32,
      namecode: "abc",
      semesterIndex: "abc",
    },
    {
      key: "2",
      stt: "2",
      employee: "John",
      readCode: 42,
      namecode: "abc",
      semesterIndex: "abc",
    },
    {
      key: "3",
      stt: "3",
      employee: "John",
      readCode: 42,
      namecode: "abc",
      semesterIndex: "abc",
    },
    {
      key: "4",
      stt: "4",
      employee: "John",
      readCode: 42,
      namecode: "abc",
      semesterIndex: "abc",
    },
    {
      key: "5",
      stt: "5",
      employee: "John",
      readCode: 42,
      namecode: "abc",
      semesterIndex: "abc",
    },
    {
      key: "6",
      stt: "6",
      employee: "John",
      readCode: 42,
      namecode: "abc",
      semesterIndex: "abc",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Nhân viên",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Mã tuyến đọc",
      dataIndex: "readCode",
      key: "readCode",
    },
    {
      title: "Tên tuyến đọc",
      dataIndex: "namecode",
      key: "namecode",
    },
    {
      title: "Kỳ ghi chỉ số",
      dataIndex: "semesterIndex",
      key: "semesterIndex",
    },
    {
      title: "Đã tạo",
      dataIndex: "close",
      key: "close",
      render: (_, record) => (
        <a href="#!">
          <EyeOutlined style={{ color: "#258ae3" }} />
        </a>
      ),
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

  const items = [
    {
      key: "1",
      label: "Tìm kiếm",
      //   children: <SearchForm />,
    },
  ];

  return (
    <Modal
      title="Tạo sổ ghi chỉ số"
      open={isOpen}
      onOk={() => setIsOpenModalNoticeDetail(false)}
      onCancel={() => setIsOpenModalNoticeDetail(false)}
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
            icon={<PlusCircleFilled />}
            style={{ marginRight: 5 }}
            size="middle"
          >
            Cập nhật nhà mạng từ phiên gửi - TT khách hàng
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginRight: 5 }}
            size="middle"
          >
            Gửi lại
          </Button>
          <Button
            key="submit"
            onClick={() => setIsOpenModalNoticeDetail(false)}
            size="middle"
          >
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

import {
  EyeOutlined,
  CloseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
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
import { SearchForm } from "./SearchForm";

export const CreateMultipleBook = (props) => {
  const { isOpen, handleOk, handleCancel } = props;
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
      children: <SearchForm />,
    },
  ];

  return (
    <Modal
      title="Tạo sổ ghi chỉ số"
      open={isOpen}
      onOk={() => handleOk("", "multiple")}
      onCancel={() => handleCancel("", "multiple")}
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
            // total: 10000,
            // pageSize: 50,
          }}
          scroll={{
            x: 1000,
            y: 240,
          }}
        />
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              defaultValue="--Chọn kỳ ghi chỉ số--"
              name="status"
              label="Kỳ ghi chỉ số"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
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
            <Form.Item
              name="status"
              label="Ngày đầu kỳ"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                allowClear
                placeholder="Chọn ngày"
                style={{ width: "100%" }}
                format="DD-MM-YYYY"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="place"
              label="Ngày hóa đơn"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                allowClear
                placeholder="Chọn ngày"
                style={{ width: "100%" }}
                format="DD-MM-YYYY"
              />
            </Form.Item>
            <Form.Item
              name="place"
              label="Ngày cuối kỳ"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                allowClear
                placeholder="Chọn ngày"
                style={{ width: "100%" }}
                format="DD-MM-YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
      </div>
      <Row
        style={{
          display: "flex",
          justifyContent: "justify-between",
          marginBottom: 16,
          marginTop: 16, 
          width: "100%",
        }}
      >
        <div>
          <Checkbox style={{ marginRight: "13px" }}>Tạo biểu mẫu</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Ghi chỉ số online</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Không SD kỳ</Checkbox>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            icon={<PlusCircleOutlined />}
            className="tab-item-readingIndex-2 "
            style={{ marginRight: 5 }}
          >
            Tạo sổ đồng loạt
          </Button>
          <Button
            onClick={() => handleCancel("", "multiple")}
            size="middle"
            className="custom-btn-close"
          >
            <CloseOutlined />
            Đóng
          </Button>
        </div>
      </Row>
    </Modal>
  );
};

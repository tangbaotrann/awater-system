import { FilePdfOutlined, PlusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  theme,
} from "antd";
import { useState } from "react";
import { SearchForm } from "./SearchForm";

export const CreateBook = (props) => {
  const { isOpen } = props;
  const { token } = theme.useToken();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  console.log(isOpen);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "3",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "5",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
    {
      key: "6",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      notwrite: "abc",
      close: "abc",
      status: "abc",
      dateClose: "abc",
      invoice: "abc",
    },
  ];

  const columns = [
    {
      title: "Số HĐ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã ĐH",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Địa chỉ",
      dataIndex: "notwrite",
      key: "notwrite",
    },
    {
      title: "Chỉ số cũ",
      dataIndex: "close",
      key: "close",
    },
  ];
  const listStyle = {
    lineHeight: "200px",
    textAlign: "center",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    padding: "10px 10px",
  };

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
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={1700}
      footer={null}
      style={{
        top: 20,
      }}
    >
      <Collapse items={items} />
      <div style={listStyle}>
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
            y: 300,
          }}
        />
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="status"
              label="Cán bộ đọc"
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
              label="Tên số"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Nhập tên" />
            </Form.Item>
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
      <div
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
          <Checkbox style={{ marginRight: "13px" }}>Không SD kỳ</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Ghi chỉ số online</Checkbox>
          <Button
            key="submit"
            onClick={props.handleCancel}
            style={{ marginRight: 5 }}
            type="primary"
            icon={<FilePdfOutlined />}
            size="middle"
            disabled
          >
            Xuất bảng kê
          </Button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginRight: 5 }}
            size="middle"
            disabled
          >
            Tạo sổ và tạo tiếp
          </Button>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginRight: 5 }}
            size="middle"
            disabled
          >
            Tạo sổ và đóng
          </Button>
          <Button key="submit" onClick={props.handleCancel} size="middle">
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

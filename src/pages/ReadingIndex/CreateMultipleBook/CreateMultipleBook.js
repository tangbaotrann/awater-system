import {
  EyeOutlined,
  FilePdfOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
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

export const CreateMultipleBook = (props) => {
  const { isOpen, handleOk, handleCancel } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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
      <Form
        form={form}
        name="advanced_search"
        style={formStyle}
        onFinish={onFinish}
        size="small"
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="date" label="Tháng">
              <DatePicker
                allowClear
                placeholder="Chọn tháng"
                style={{ width: "100%" }}
                format="MM-YYYY"
                picker="month"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="person" label="Kỳ ghi chỉ số">
              <Select
                defaultValue="--Chọn kỳ ghi chỉ số--"
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
          </Space>
        </div>
      </Form>
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
          <Checkbox style={{ marginRight: "13px" }}>Ghi chỉ số online</Checkbox>
          <Checkbox style={{ marginRight: "13px" }}>Không SD kỳ</Checkbox>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<PlusCircleFilled />}
            style={{ marginRight: 5 }}
            size="middle"
            disabled
          >
            Tạo sổ đồng loạt
          </Button>
          <Button
            key="submit"
            onClick={() => handleCancel("", "multiple")}
            size="middle"
          >
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

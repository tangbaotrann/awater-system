import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  theme,
} from "antd";
import {
  PrinterOutlined,
  RedoOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";
const PrintButton = ({ onClick: handleButtonClick3 }) => {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const onReset = () => {
    form1.resetFields();
  };

  const onClick = () => {
    setVisible(true);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [tableVisible, setTableVisible] = useState(false);
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Mã tuyến đọc",
      dataIndex: "matuyendoc",
      key: "matuyendoc",
    },
    // Thêm các cột khác
  ];

  const data = [
    {
      key: "1",
      index: 1,
      matuyendoc: "TD1",
    },
    {
      key: "2",
      index: 2,
      matuyendoc: "TD2",
    },
    // Thêm dữ liệu cho các hàng
  ];
  return (
    <>
      <Button
        onClick={onClick}
        icon={<PrinterOutlined />}
        style={{ marginRight: "10px" }}
        type="primary"
      >
        In hóa đơn
      </Button>
      <Modal
        title=" In hóa đơn"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button
            key="reset"
            type="primary"
            icon={<RedoOutlined />}
            onClick={onReset}
          >
            Làm mới
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            icon={<PrinterOutlined />}
          >
            In
          </Button>,
          <Button
            key="view"
            type="primary"
            icon={<UnorderedListOutlined />}
            onClick={() => setTableVisible(true)}
          >
            Xem DS
          </Button>,
          <Button key="close" type="primary" onClick={() => setVisible(false)}>
            Đóng
          </Button>,
        ]}
      >
        <Form
          form={form1}
          onFinish={onFinish}
          name="nest-messages"
          style={{
            maxWidth: "none",
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            padding: 24,
          }}
        >
          <Row>
            <Col span={24}>
              <Form.Item name="chọn tháng" label="Chọn tháng">
                <DatePicker
                  locale={viVN}
                  picker="month"
                  style={{ width: "100%" }}
                  format="M/YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="tenphien" label="Tên phiên">
                <Input min={1} max={10} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="ghichu" label="Ghi chú">
                <Input min={1} max={10} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="kyhieu" label="Ký hiệu">
                <Select style={{ width: "100%" }}>
                  <Option value="A">A</Option>
                  <Option value="B">B</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="sohoadon" label="Số hóa đơn">
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Item name="sohoadonbd" label="Số hóa đơn BĐ">
                <InputNumber min={1} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="sohoadonkt" label="Số hóa đơn KT">
                <InputNumber min={1} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="sohdgoiy" label="Số HĐ gợi ý">
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="ngaylap" label="Ngày lập">
                <DatePicker
                  locale={viVN}
                  style={{ width: "100%" }}
                  format="DD/MM/YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default PrintButton;

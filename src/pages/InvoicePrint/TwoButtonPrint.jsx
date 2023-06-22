import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Modal,
  Row,
  Select,
  theme,
} from "antd";
import { PrinterOutlined, RedoOutlined } from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";
const TwoButtonPrint = ({ onClick: handleButtonClick6 }) => {
  const { Option } = Select;
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const onReset = () => {
    form.resetFields();
  };

  const onClick = () => {
    setVisible(true);
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Button
        onClick={onClick}
        icon={<PrinterOutlined />}
        style={{ marginRight: "10px" }}
        type="primary"
      >
        In kẹt hóa đơn
      </Button>
      <Modal
        title=" In kẹt hóa đơn"
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
          <Button key="close" type="primary" onClick={() => setVisible(false)}>
            Đóng
          </Button>,
        ]}
      >
        <Form
          form={form}
          onFinish={onFinish}
          // {...layout}
          name="nest-messages"
          style={{
            maxWidth: "none",
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            padding: 24,
          }}
        >
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
              <Form.Item name="tuso" label="Từ số">
                <InputNumber min={1} max={10} style={{ width: "100%" }} />
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
              <Form.Item name="sohopdong" label="Số hợp đồng">
                <Select>
                  <Option value="HD1">HD1</Option>
                  <Option value="HD2">HD2</Option>
                </Select>
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

export default TwoButtonPrint;

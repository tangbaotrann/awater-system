import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Row,
  Select,
  theme,
} from "antd";
import {
  CloseOutlined,
  PrinterOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";
const TwoButtonPrint = ({ hideModal }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };
  const { Option } = Select;
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const onReset = () => {
    form1.resetFields();
  };
  return (
    <>
      <Form
        form={form1}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
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
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button
            key="reset"
            style={{
              marginLeft: "10px",
            }}
            icon={<RedoOutlined />}
            className="custom-btn-reset"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={onReset}
          >
            Làm mới
          </Button>

          <Button
            key="submit"
            style={{
              marginLeft: "10px",
            }}
            htmlType="submit"
            icon={<PrinterOutlined />}
            className="custom-btn-attachment"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            In
          </Button>

          <Button
            style={{
              marginLeft: "10px",
            }}
            icon={<CloseOutlined />}
            htmlType="submit"
            className="custom-btn-close"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default TwoButtonPrint;

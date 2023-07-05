import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
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
const ReprintButton = ({ hideModal }) => {
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
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 40,
    },
  };
  return (
    <>
      <Form
        {...layout}
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
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
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
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="tenphien" label="Tên phiên">
              <Input min={1} max={10} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ghichu" label="Ghi chú">
              <Input min={1} max={10} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="kyhieu" label="Ký hiệu">
              <Select style={{ width: "100%" }}>
                <Option value="A">A</Option>
                <Option value="B">B</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohoadon" label="Số hóa đơn">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohoadonbd" label="Số hóa đơn BĐ">
              <InputNumber min={1} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohoadonkt" label="Số hóa đơn KT">
              <InputNumber min={1} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohdgoiy" label="Số HĐ gợi ý">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
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
            icon={<RedoOutlined />}
            className="custom-btn-reset"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={onReset}
            style={{
              marginLeft: "10px",
            }}
          >
            Làm mới
          </Button>

          <Button
            key="submit"
            className="custom-btn-attachment"
            htmlType="submit"
            icon={<PrinterOutlined />}
            style={{
              marginLeft: "10px",
            }}
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            In
          </Button>

          <Button
            icon={<CloseOutlined />}
            htmlType="submit"
            className="custom-btn-close"
            // type="primary"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
            style={{
              marginLeft: "10px",
            }}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default ReprintButton;

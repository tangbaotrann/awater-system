import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Space, theme } from "antd";

export const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = {
    maxWidth: "none",
    // background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
      size="small"
    >
      <Row gutter={24}>
        <Col md={12} lg={6} style={{width: '100%'}}>
          <Form.Item name="date" label="Số hợp đồng">
            <Input placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>
        <Col md={12} lg={6} style={{width: '100%'}}>
          <Form.Item name="person" label="Mã KH">
            <Input placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>
        <Col md={12} lg={6} style={{width: '100%'}}>
          <Form.Item name="tuyendoc" label="Tìm ngày">
            <DatePicker
              allowClear
              style={{ width: "100%" }}
              format="DD-MM-YYYY"
            />
          </Form.Item>
        </Col>
        <Col md={12} lg={6} style={{width: '100%'}}>
          <Form.Item name="tuyendoc" label="Đếm ngày">
            <DatePicker
              allowClear
              style={{ width: "100%" }}
              format="DD-MM-YYYY"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="status" label="Tên KH">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="place" label="Tuyến đọc">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item name="status" label="Địa chỉ">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="place" label="Nhân viên ghi">
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "right",
        }}
      >
        <Button type="primary" htmlType="submit">
          <SearchOutlined />
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};

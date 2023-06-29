import { SearchOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Row, Select, Space, theme } from "antd";
import { Button } from "antd/es/radio";
import React from "react";

export const SearchForm = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const formStyle = {
    maxWidth: "none",
    // background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
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
        {/* <Space size="small"> */}
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            Tìm kiếm
          </Button>
        {/* </Space> */}
      </div>
    </Form>
  );
};

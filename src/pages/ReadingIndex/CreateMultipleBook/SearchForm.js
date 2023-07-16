import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import React from "react";

export const SearchForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      onFinish={onFinish}
      // size="small"
    >
      <Row gutter={24}>
        <Col lg={12} style={{ width: "100%" }}>
          <Form.Item name="date" label="Tháng">
            <DatePicker
              allowClear
              placeholder="Chọn tháng"
              format="MM-YYYY"
              style={{ width: "100%" }}
              picker="month"
            />
          </Form.Item>
        </Col>
        <Col lg={12} style={{ width: "100%" }}>
          <Form.Item name="person" label="Kỳ ghi chỉ số">
            <Select
              defaultValue="--Chọn kỳ ghi chỉ số--"
              style={{ width: "100%" }}
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
        <Button className="custom-btn-search gutter-item-btn">
          <SearchOutlined />
          Tìm kiếm
        </Button>
      </div>
    </Form>
  );
};

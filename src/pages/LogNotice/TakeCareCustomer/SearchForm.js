import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  theme,
} from "antd";
import React from "react";

export const SearchForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 29,
    },
  };

  return (
    <Form
      {...layout}
      form={form}
      name="advanced_search"
      onFinish={onFinish}
      // size="small"
    >
      <Row gutter={24}>
        <Col lg={6}>
          <Form.Item name="date" label="Nhân viên">
            <DatePicker
              allowClear
              placeholder="Chọn tháng"
              style={{ width: "100%" }}
              format="MM-YYYY"
              picker="month"
            />
          </Form.Item>
        </Col>
        <Col lg={6}>
          <Form.Item name="person" label="Tuyến đọc">
            <Select
              defaultValue="--Chọn kết quả chi tiết--"
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
        <Col lg={6}>
          <Form.Item name="person" label="Phạm vi">
            <Select
              defaultValue="--Chọn kết quả gửi--"
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
        <Col lg={6}>
          <Form.Item name="person" label="Loại KH">
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
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={6}>
          <Form.Item name="date" label="Số HĐ">
            <Input
              style={{ width: "100%" }}
              placeholder="Nhập mã KH hoặc địa chỉ nhận"
            />
          </Form.Item>
        </Col>
        <Col lg={6}>
          <Form.Item name="person" label="Tên KH">
            <Select
              defaultValue="--Chọn kết quả gửi--"
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
        <Col lg={6}>
          <Form.Item name="person" label="Từ ngày">
            <div style={{ display: "flex", gap: "5px" }}>
              <DatePicker
                allowClear
                style={{
                  width: "120px",
                }}
                placeholder="Từ"
                format="MM-YYYY"
                picker="month"
              />
              <DatePicker
                allowClear
                style={{
                  width: "120px",
                }}
                placeholder="Đến"
                format="MM-YYYY"
                picker="month"
              />
            </div>
          </Form.Item>
        </Col>
        <Col lg={6}>
          <div style={{ textAlign: "center" }}>
            <Checkbox style={{ marginRight: "13px" }}>Gửi thay ĐH</Checkbox>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              Tìm kiếm
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

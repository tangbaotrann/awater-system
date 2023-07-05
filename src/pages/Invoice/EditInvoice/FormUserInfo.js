import { Col, Form, Input, Row } from "antd";
import React from "react";

export const FormUserInfo = () => {
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 24,
    },
  };
  return (
    <div className="user-info" style={{ marginTop: "15px" }}>
      <Form size="small">
        <Row gutter={24}>
          <Col sm={12} md={12} lg={12} style={{ width: "100%" }}>
            <Form.Item name="date" label="Mã KH">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col sm={12} md={12} lg={12} style={{ width: "100%" }}>
            <Form.Item name="person" label="Tên KH">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={12} md={12} lg={12} style={{ width: "100%" }}>
            <Form.Item name="date" label="Mã số thuế">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col sm={12} md={12} lg={12} style={{ width: "100%" }}>
            <Form.Item name="person" label="Điện thoại">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={24} style={{ width: "100%" }}>
            <Form.Item name="date" label="Địa chỉ">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={8} style={{ width: "100%" }}>
            <Form.Item name="date" label="Số hộ">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col lg={8} style={{ width: "100%" }}>
            <Form.Item name="person" label="Số khẩu">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col lg={8} style={{ width: "100%" }}>
            <Form.Item name="tuyendoc" label="Tên ngân hàng">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item name="date" label="Tài khoản NH">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col lg={12} style={{ width: "100%" }}>
            <Form.Item name="person" label="Tên tài khoản">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

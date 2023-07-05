import { Col, Form, Input, Row, theme } from "antd";
import React from "react";

export const FormUserInfo = () => {
  const { token } = theme.useToken();

  return (
    <div className="user-info" style={{ marginTop: "15px" }}>
      <fieldset>
        <legend
          style={{ padding: "0 11px", marginLeft: "10px", fontSize: "18px" }}
        >
          Thông tin khách hàng
        </legend>
        <Form
          size="small"
          style={{
            maxWidth: "none",
            background: token.colorFillAlter,
            borderRadius: token.borderRadiusLG,
            padding: 10,
          }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="date" label="Mã KH">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="person" label="Tên KH">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="date" label="Mã số thuế">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="person" label="Điện thoại">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name="date" label="Địa chỉ">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item name="date" label="Số hộ">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="person" label="Số khẩu">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="tuyendoc" label="Tên ngân hàng">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="date" label="Tài khoản NH">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="person" label="Tên tài khoản">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </div>
  );
};

import { Col, DatePicker, Form, Input, Row, Select, theme } from "antd";
import React from "react";

export const GeneralInfo = () => {
  const { token } = theme.useToken();

  return (
    <div className="general-info" style={{ marginTop: "15px" }}>
      <fieldset>
        <legend
          style={{ padding: "0 11px", marginLeft: "10px", fontSize: "18px" }}
        >
          Thông tin chung
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
            <Col span={8}>
              <Form.Item name="date" label="Chọn tháng">
                <DatePicker
                  allowClear
                  placeholder="Chọn tháng"
                  style={{ width: "100%" }}
                  format="MM-YYYY"
                  picker="month"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="person" label="Kỳ ghi chỉ số">
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
            <Col span={8}>
              <Form.Item name="tuyendoc" label="Ngày đầu kỳ">
                <DatePicker
                  allowClear
                  placeholder="Chọn ngày đầu kỳ"
                  style={{ width: "100%" }}
                  format="MM-YYYY"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="date"
                label="Ngày cuối kỳ"
                rules={[{ required: true }]}
              >
                <DatePicker
                  allowClear
                  placeholder="Chọn tháng"
                  style={{ width: "100%" }}
                  format="MM-YYYY"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="person" label="Ngày lập">
                <DatePicker
                  allowClear
                  placeholder="Chọn ngày lập hóa đơn"
                  style={{ width: "100%" }}
                  format="MM-YYYY"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="tuyendoc" label="Số hóa đơn">
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
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="date" label="Trạng thái đọc">
                <Input placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="person" label="Ghi chú">
                <Input placeholder="" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </div>
  );
};

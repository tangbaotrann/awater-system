import { Col, Form, Input, Row } from "antd";

function LocomotiveInfo({ formItemLayout }) {
  return (
    <div className="modal-locomotive-info">
      {/* Mã khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            name="code_customer"
            label="Mã khách hàng"
            {...formItemLayout}
          >
            <Input name="code_customer" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tên khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="fullName" label="Tên khách hàng" {...formItemLayout}>
            <Input name="fullName" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Địa chỉ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="address" label="Địa chỉ" {...formItemLayout}>
            <Input name="address" placeholder="Nhập Địa chỉ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tuyến đọc + Thứ tự */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="line_reading" label="Tuyến đọc" {...formItemLayout}>
            <Input name="line_reading" placeholder="Nhập tuyến đọc" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="" label="Thứ tự" {...formItemLayout}>
            <Input name="" placeholder="Nhập thứ tự" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default LocomotiveInfo;

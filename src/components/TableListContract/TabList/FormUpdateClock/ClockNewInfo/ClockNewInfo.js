import { Col, DatePicker, Form, Input, Row, Select } from "antd";

function ClockNewInfo({ formItemLayoutClockNow }) {
  return (
    <div className="modal-clock-new-info">
      {/* Kiểu đồng hồ + Đường kính  */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Kiểu đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập Kiểu đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      {/* Mã đồng hồ + Seri đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Serial chỉ + Chỉ số đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial chỉ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập serial chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số đầu" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập chỉ số đầu" />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày sử dụng + Ngày kiểm định */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày sử dụng" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày sử dụng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày kiểm định" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Hiệu lực KĐ + Người thay */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hiệu lực KĐ" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn hiệu lực KĐ"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người thay" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "NT 1" }]}
              placeholder="Chọn người thay"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Lý do thay + Hình thức xử lý */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do thay" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do thay"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Hình thức xử lý"
            {...formItemLayoutClockNow}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "NT 1" }]}
              placeholder="Chọn hình thức xử lý"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Ghi chú + Trạng thái ĐH lắp */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ghi chú: " {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Trạng thái ĐH: "
            {...formItemLayoutClockNow}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "TT 1" }]}
              placeholder="Chọn trạng thái ĐH lắp"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default ClockNewInfo;

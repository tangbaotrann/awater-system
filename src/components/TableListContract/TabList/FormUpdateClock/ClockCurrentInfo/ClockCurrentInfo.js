import { Col, DatePicker, Form, Input, Row, Select } from "antd";

function ClockCurrentInfo({ formItemLayoutClockNow }) {
  return (
    <div className="modal-clock-curr-info">
      {/* Kiểu đồng hồ + Đường kính */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name="type_clock"
            label="Kiểu đồng hồ"
            {...formItemLayoutClockNow}
          >
            <Input name="type_clock" placeholder="Nhập Kiểu đồng hồ" />
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

      {/* Chỉ số cuối + Ngày lắp đặt */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số cuối" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập chỉ số cuối" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày lắp đặt" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập ngày lắp đặt" />
          </Form.Item>
        </Col>
      </Row>

      {/* Lý do hủy + Ngày bắt đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do hủy" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do hủy"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày bắt đầu: " {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày bắt đầu"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      {/*  + Ngày kết thúc */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Ngày kết thúc: "
            {...formItemLayoutClockNow}
          >
            <DatePicker
              name=""
              placeholder="Chọn ngày kết thúc"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default ClockCurrentInfo;

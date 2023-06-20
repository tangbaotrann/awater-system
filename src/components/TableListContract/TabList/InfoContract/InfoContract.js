import { RedoOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

function InfoContract() {
  return (
    <>
      <Row>
        {/* Mã đăng ký */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Mã đăng ký: ">
            <Input name="" placeholder="Nhập mã đăng ký" />
          </Form.Item>
        </Col>

        {/* Button ... (Mã đăng ký) */}
        <Col xs={24} sm={24} md={12} lg={2}>
          <Button type="primary">...</Button>
        </Col>

        {/* Số hợp đồng*/}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="" label="Số hợp đồng: (*)">
            <Input name="" placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>

        {/* Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Button type="primary">
            <RedoOutlined />
          </Button>
        </Col>
      </Row>

      <Row>
        {/* ĐT giá */}
        <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
          <Form.Item name="" label="ĐT giá: (*)">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "100000" },
                { value: "2", label: "200000" },
              ]}
              placeholder="Chọn giá"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Mục đích SD */}
        <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
          <Form.Item name="" label="Mục đích SD: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "SD 1" },
                { value: "2", label: "SD 2" },
              ]}
              placeholder="Chọn mục đích SD"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Khu vực TT */}
        <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
          <Form.Item name="" label="Khu vực TT: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "KV 1" },
                { value: "2", label: "KV 2" },
              ]}
              placeholder="Chọn khu vực TT"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Hình thức TT */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Hình thức TT: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "HT 1" },
                { value: "2", label: "HT 2" },
              ]}
              placeholder="Chọn hình thức TT"
            />
          </Form.Item>
        </Col>

        {/* Mã vạch */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Mã vạch: ">
            <Input name="" placeholder="Nhập mã vạch" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày ký hợp đồng */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Ngày ký HĐ: ">
            <DatePicker
              name=""
              placeholder="Chọn ngày ký hợp đồng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Ngày lắp đặt: ">
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Người lắp đặt */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Người lắp đặt: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Văn Tèo" },
                { value: "2", label: "Tài Siêu" },
              ]}
              placeholder="Chọn người lắp đặt"
            />
          </Form.Item>
        </Col>

        {/* Ngày NT */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Ngày NT: ">
            <DatePicker
              name=""
              placeholder="Chọn ngày NT"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default InfoContract;

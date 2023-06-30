import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";

function InfoContract() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 7 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  return (
    <div className="container-info-contract">
      <Row>
        {/* Mã đăng ký + Button ... (Mã đăng ký) */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đăng ký" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name=""
                placeholder="Nhập mã đăng ký"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Số hợp đồng + Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Số HĐ (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name=""
                placeholder="Nhập số hợp đồng"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-reset-form-contract">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* ĐT giá */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="ĐT giá (*)" {...formItemLayout}>
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

        {/* Mục đích SD */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mục đích SD" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Khu vực TT: " {...formItemLayout}>
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

        {/* Hình thức TT */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hình thức TT: " {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Mã vạch */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã vạch: " {...formItemLayout}>
            <Input name="" placeholder="Nhập mã vạch" />
          </Form.Item>
        </Col>

        {/* Ngày ký hợp đồng */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày ký HĐ: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày ký hợp đồng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày lắp đặt: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Người lắp đặt */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người lắp đặt: " {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Ngày NT */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày NT " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày NT"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Tiền lắp đặt */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Tiền lắp đặt" {...formItemLayout}>
            <Input name="" placeholder="Nhập tiền lắp đặt" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Người nộp */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người nộp" {...formItemLayout}>
            <Input name="" placeholder="Nhập người nộp" />
          </Form.Item>
        </Col>

        {/* Tiền đặt cọc */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Tiền đặt cọc" {...formItemLayout}>
            <Input name="" placeholder="Nhập tiền đặt cọc" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Giảm trừ theo */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Giảm trừ theo" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "tiền / hóa đơn" }]}
              placeholder="Lựa chọn"
            />
          </Form.Item>
        </Col>

        {/* Số tiền */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Số tiền" {...formItemLayout}>
            <Input name="" placeholder="Nhập số tiền" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày đặt cọc */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày đặt cọc: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày đặt cọc"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Chứng từ */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chứng từ" {...formItemLayout}>
            <Input name="" placeholder="Nhập chứng từ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Cam kết sử dụng nước */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name="test-chk"
            label="Cam kết SD nước"
            valuePropName="checked"
            {...formItemLayout}
          >
            <Checkbox name="test-chk" />
          </Form.Item>
        </Col>

        {/* Khối lượng cam kết */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="KL cam kết" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "CK 1" }]}
              placeholder="Lựa chọn"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ghi chú */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ghi chú: " {...formItemLayout}>
            <Input name="" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoContract;

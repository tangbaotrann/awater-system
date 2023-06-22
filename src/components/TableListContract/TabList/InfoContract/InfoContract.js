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
          <Form.Item name="" label="Ngày NT ">
            <DatePicker
              name=""
              placeholder="Chọn ngày NT"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tiền lắp đặt */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Tiền lắp đặt">
            <Input name="" placeholder="Nhập tiền lắp đặt" />
          </Form.Item>
        </Col>

        {/* Người nộp */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Người nộp">
            <Input name="" placeholder="Nhập người nộp" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tiền đặt cọc */}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="" label="Tiền đặt cọc">
            <Input name="" placeholder="Nhập tiền đặt cọc" />
          </Form.Item>
        </Col>

        {/* Giảm trừ theo */}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="" label="Giảm trừ theo">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "tiền / hóa đơn" }]}
              placeholder="Lựa chọn"
            />
          </Form.Item>
        </Col>

        {/* Số tiền */}
        <Col xs={24} sm={24} md={12} lg={6} className="gutter-item">
          <Form.Item name="" label="Số tiền">
            <Input name="" placeholder="Nhập số tiền" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày đặt cọc */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Ngày đặt cọc: ">
            <DatePicker
              name=""
              placeholder="Chọn ngày đặt cọc"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Chứng từ */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Chứng từ">
            <Input name="" placeholder="Nhập chứng từ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Cam kết sử dụng nước */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item
            name=""
            label="Cam kết sử dụng nước: "
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>
        </Col>

        {/* Khối lượng cam kết */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Khối lượng cam kết">
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
        <Col xs={24} sm={24} md={12} lg={23}>
          <Form.Item name="" label="Ghi chú: ">
            <Input name="" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default InfoContract;

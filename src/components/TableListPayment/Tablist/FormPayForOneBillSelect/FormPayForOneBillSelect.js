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
import { CloseOutlined, FormOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function FormPayForOneBillSelect({ hideModal }) {
  return (
    <Form>
      {/* Đã thanh toán */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" valuePropName="checked" label="Đã thanh toán">
            <Checkbox name="" />
          </Form.Item>
        </Col>
      </Row>

      {/* Người thu tiền */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" label="Người thu tiền">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hoàng Văn Nam" }]}
              placeholder="Chọn người thu tiền"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày thu tiền */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" label="Ngày thu tiền">
            <DatePicker
              name=""
              placeholder="Chọn ngày thu tiền"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Hình thức thu tiền */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" label="Hình thức thu tiền">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Theo hợp đồng" }]}
              placeholder="Chọn hình thức thu tiền"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Ghi chú */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" label="Ghi chú">
            <TextArea name="" placeholder="Nhập ghi chú"></TextArea>
          </Form.Item>
        </Col>
      </Row>

      {/* Buttons */}
      <div className="func-payment-for-one-bill">
        <Button
          htmlType="submit"
          type="primary"
          className="payment-for-one-bill-notion-btn"
        >
          <FormOutlined />
          Ghi lại
        </Button>
        <Button onClick={() => hideModal()} type="primary">
          <CloseOutlined /> Đóng
        </Button>
      </div>
    </Form>
  );
}

export default FormPayForOneBillSelect;

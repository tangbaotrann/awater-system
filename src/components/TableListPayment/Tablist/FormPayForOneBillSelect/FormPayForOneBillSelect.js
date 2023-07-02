import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { CloseOutlined, FormOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function FormPayForOneBillSelect({ hideModal }) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
      md: { span: 7 },
      lg: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit form error
  const handleSubmitFailed = (error) => {
    console.log({ error });
  };

  return (
    <>
      <Divider orientation="left">Thanh toán cho 1 đơn được chọn</Divider>

      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        {...formItemLayout}
      >
        {/* Đã thanh toán */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item name="" valuePropName="checked" label="Đã thanh toán">
              <Checkbox name="" />
            </Form.Item>
          </Col>
        </Row>

        {/* Người thu tiền */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
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
          <Col xs={24} sm={24} md={24} lg={24}>
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
          <Col xs={24} sm={24} md={24} lg={24}>
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
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item name="" label="Ghi chú">
              <TextArea name="" placeholder="Nhập ghi chú"></TextArea>
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        {/* Buttons */}
        <div className="func-payment-for-one-bill">
          <Button
            htmlType="submit"
            className="payment-for-one-bill-notion-btn custom-btn-add"
          >
            <FormOutlined />
            Ghi lại
          </Button>
          <Button onClick={() => hideModal()} className="custom-btn-close">
            <CloseOutlined /> Đóng
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormPayForOneBillSelect;

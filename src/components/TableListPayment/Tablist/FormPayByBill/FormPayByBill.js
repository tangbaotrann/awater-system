import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useMediaQuery } from "react-responsive";

function FormPayByBill({ hideModal }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

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
      <Divider />

      <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
        {/* Seri + Số hóa đơn + button search */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={11}>
            <Form.Item
              name=""
              label="Seri"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số seri" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={11}>
            <Form.Item
              name=""
              label="Số hóa đơn"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số hóa đơn" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={2}>
            <Button type="primary">Tìm</Button>
          </Col>
        </Row>

        <Divider orientation="left">Thông tin khách hàng</Divider>

        {/* Số hóa đơn */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              name=""
              label="Số hóa đơn"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số hóa đơn" />
            </Form.Item>
          </Col>
        </Row>

        {/* Khách hàng + Địa chỉ */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Khách hàng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Địa chỉ"
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Input name="" placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Col>
        </Row>

        {/* Hợp đồng + tổng tiền */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Hợp đồng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số hợp đồng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Tổng tiền"
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <InputNumber
                name=""
                placeholder="Tổng tiền"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Tiền bằng chữ */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              name=""
              label="Tiền bằng chữ"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tiền bằng chữ" />
            </Form.Item>
          </Col>
        </Row>

        {/* Đã thanh toán + Ngày thu + Người thu tiền */}
        <Row>
          <Col xs={24} sm={24} md={5} lg={5}>
            <Form.Item
              name=""
              label="Đã thanh toán"
              valuePropName="checked"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Checkbox name="" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={9} lg={9}>
            <Form.Item
              name=""
              label="Ngày thu"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <DatePicker
                name=""
                placeholder="Chọn ngày thu"
                className="gutter-item-date-picker"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={10} lg={10}>
            <Form.Item
              name=""
              label="Người thu"
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "NT 1" }]}
                placeholder="Chọn người thu tiền"
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <div className="func-pay-by-bill-buttons">
          <Button type="primary" htmlType="submit">
            <FormOutlined /> Ghi lại
          </Button>
          <Button
            type="primary"
            onClick={() => hideModal()}
            className="pay-by-bill-btn-close"
          >
            <CloseOutlined /> Đóng
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormPayByBill;

import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { useMediaQuery } from "react-responsive";

const { TextArea } = Input;

function FormPayDebt({ hideModal }) {
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
      <Divider orientation="left">Thông tin tài khoản</Divider>

      <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
        {/* Tìm kiếm */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item name="" label="Tìm kiếm">
              <Input
                name=""
                placeholder="Tìm theo mã khách hàng, idKH, tên khách hàng, địa chỉ, số điện thoại"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Mã khách hàng + id khách hàng */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Mã khách hàng (*)"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập mã khách hàng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="ID khách hàng"
              className={isTabletOrMobile ? "gutter-item-mobile" : ""}
            >
              <Input name="" placeholder="Nhập id khách hàng" />
            </Form.Item>
          </Col>
        </Row>

        {/* Tên khách hàng + Địa chỉ */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Tên khách hàng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Địa chỉ"
              className={isTabletOrMobile ? "gutter-item-mobile" : ""}
            >
              <Input name="" placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Col>
        </Row>

        {/* Tài khoản có + Tài khoản nợ + Dư nợ hiện tại */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Form.Item
              name=""
              label="Tài khoản có"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tài khoản có" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Form.Item
              name=""
              label="Tài khoản nợ"
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Input name="" placeholder="Nhập tài khoản nợ" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={8}>
            <Form.Item name="" label="Dư nợ hiện tại">
              <Input name="" placeholder="Nhập dư nợ hiện tại" />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Divider orientation="left">Thông tin công nợ</Divider>

        {/* Loại công nợ */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item name="" label="Loại công nợ (*)">
              <Select
                fieldNames=""
                options={[{ value: "1", label: "LCN 1" }]}
                placeholder="Chọn loại công nợ"
                className="custom-border-select-inp"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Số tiền + Hình thức + Người nộp */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Form.Item
              name=""
              label="Số tiền (*)"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số tiền" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Form.Item
              name=""
              label="Hình thức"
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "HT 1" }]}
                placeholder="Chọn hình thức"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={8}>
            <Form.Item name="" label="Người nộp">
              <Input name="" placeholder="Nhập người nộp" />
            </Form.Item>
          </Col>
        </Row>

        {/* render bằng chữ */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className="pay-debt-num-to-text">
              <span>Bằng chữ: </span>
              <i>render number to text.</i>
            </div>
          </Col>
        </Row>

        {/* Diễn giải*/}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item name="" label="Diễn giải">
              <TextArea name="" placeholder="Nhập diễn giải"></TextArea>
            </Form.Item>
          </Col>
        </Row>

        {/* Ngày lập + Người lập*/}
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
              name=""
              label="Ngày lập"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <DatePicker
                name=""
                placeholder="Chọn ngày lập"
                className="gutter-item-date-picker"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item name="" label="Người lập">
              <Input name="" placeholder="Nhập người lập" />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        {/* Buttons */}
        <div className="func-pay-debt-buttons">
          <Button htmlType="submit" type="primary">
            <SaveOutlined />
            Lưu
          </Button>

          <Button
            type="primary"
            onClick={() => hideModal()}
            className="pay-debt-btn-close"
          >
            <CloseOutlined />
            Đóng
          </Button>
        </div>
      </Form>
    </>
  );
}

export default FormPayDebt;

import { SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Form, Input, Row, Select } from "antd";

import "./FormPayCounter.css";
import TableInfoCustomer from "./TableInfoCustomer/TableInfoCustomer";
import TableInfoDate from "./TableInfoDate/TableInfoDate";
import TableInfoContract from "./TableInfoContract/TableInfoContract";

function FormPayCounter({ hideModal }) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
      md: { span: 6 },
      lg: { span: 5 },
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
      <Divider orientation="left">Tìm kiếm</Divider>

      <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
        {/* Số hợp đồng/ Mã KH + Tìm kiếm gần đúng + Tình trạng nộp */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Số HĐ/ Mã KH" {...formItemLayout}>
              <div className="container-label-input">
                <Input
                  name=""
                  placeholder="Nhập số hợp đồng/ mã KH"
                  className="space-right-10"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "32%",
                  }}
                >
                  <span style={{ marginRight: "4px" }}>Tìm gần đúng: </span>
                  <Checkbox name="" />
                </div>
              </div>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Tình trạng" {...formItemLayout}>
              <Select
                fieldNames=""
                options={[{ value: "1", label: "TT 1" }]}
                placeholder="Chọn tình trạng nộp"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Tên khách hàng + Địa chỉ + Sđt + Tất cả + Button search */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Tên KH" {...formItemLayout}>
              <Input name="" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Địa chỉ" {...formItemLayout}>
              <Input name="" placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Số điện thoại" {...formItemLayout}>
              <Input name="" placeholder="Nhập số điện thoại" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item name="" label="Lựa chọn" {...formItemLayout}>
              <Select
                fieldNames=""
                options={[{ value: "1", label: "TT 1" }]}
                placeholder="Tất cả"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button className="custom-btn-search" htmlType="submit">
                <SearchOutlined /> Tìm kiếm
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      {/* table info customer */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <TableInfoCustomer />
        </Col>
      </Row>

      {/* table info date + table info contract */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="tbl-info-date">
            <TableInfoDate />
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="tbl-info-contract">
            <Divider orientation="left">Giỏ hàng</Divider>
            <TableInfoContract />
          </div>
        </Col>
      </Row>

      <Divider />

      {/* Footer buttons */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={5}>
          <p className="pay-counter-footer-text">
            Bạn sẽ là người thu tiền của hóa đơn nếu bạn cập nhật thanh toán!
          </p>
        </Col>

        <Col xs={24} sm={24} md={12} lg={2}>
          <div className="pay-counter-footer-quantity">Số lượng: 0</div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={3}>
          <div className="pay-counter-footer-total">Tổng tiền: 0 vnđ</div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={2}>
          <Button className="custom-btn-export">Ghi lại và in</Button>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="pay-counter-pay-and-close">
            <Button className="custom-btn-del">Thanh toán giỏ hàng</Button>
            <Button
              className="custom-btn-close"
              style={{ marginLeft: "12px" }}
              onClick={() => hideModal()}
            >
              Đóng
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default FormPayCounter;

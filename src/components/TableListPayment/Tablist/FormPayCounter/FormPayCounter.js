import { SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Form, Input, Row, Select } from "antd";
import { useMediaQuery } from "react-responsive";

import "./FormPayCounter.css";
import TableInfoCustomer from "./TableInfoCustomer/TableInfoCustomer";
import TableInfoDate from "./TableInfoDate/TableInfoDate";
import TableInfoContract from "./TableInfoContract/TableInfoContract";

function FormPayCounter({ hideModal }) {
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
      <Divider orientation="left">Tìm kiếm</Divider>

      <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
        {/* Số hợp đồng/ Mã KH + Tìm kiếm gần đúng + Tình trạng nộp */}
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name=""
              label="Số hợp đồng/ Mã KH"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số hợp đồng/ mã KH" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={3} lg={3}>
            <Form.Item
              name=""
              label="Tìm kiếm gần đúng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Checkbox name="" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={9} lg={9}>
            <Form.Item
              name=""
              label="Tìm kiếm gần đúng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
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
          <Col xs={24} sm={24} md={12} lg={6}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={3} lg={6}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập địa chỉ" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={9} lg={5}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập số điện thoại" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={9} lg={5}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "TT 1" }]}
                placeholder="Tất cả"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={9} lg={2}>
            <Button type="primary" htmlType="submit">
              <SearchOutlined /> Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      {/* table info customer */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <TableInfoCustomer />
        </Col>
      </Row>

      {/* table info date + table info contract */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="tbl-info-date">
            <TableInfoDate />
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="tbl-info-contract">
            <Divider orientation="left">Giỏ hàng</Divider>
            <TableInfoContract />
          </div>
        </Col>
      </Row>

      <Divider />

      {/* Footer buttons */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={5}>
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

        <Col xs={24} sm={24} md={12} lg={2}>
          <Button type="primary">Ghi lại và in</Button>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="primary">Thanh toán giỏ hàng</Button>
            <Button
              type="primary"
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

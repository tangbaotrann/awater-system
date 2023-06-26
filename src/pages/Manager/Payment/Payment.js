import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Popover,
  Row,
  Select,
} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import "./Payment.css";
import TableListPayment from "../../../components/TableListPayment/TableListPayment";
import TabList from "../../../components/TableListPayment/Tablist/Tablist";

function Payment() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <div className="payment-wrapper">
      <Form onFinish={handleSubmit} onFinishFailed={handleFailed}>
        <Row>
          {/* Chọn tháng */}
          <Col xs={24} sm={24} md={12} lg={5}>
            <Form.Item
              name="month"
              label="Chọn tháng: "
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <DatePicker
                name="month"
                format="MM-YYYY"
                picker="month"
                className="gutter-item-date-picker"
                placeholder="Chọn tháng"
              />
            </Form.Item>
          </Col>

          {/* Cán bộ đọc */}
          <Col xs={24} sm={24} md={12} lg={4}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "CB 1" }]}
                placeholder="Chọn cán bộ đọc"
              />
            </Form.Item>
          </Col>

          {/* Tuyến đọc */}
          <Col xs={24} sm={24} md={12} lg={3}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "TD 1" }]}
                placeholder="Chọn Tuyến đọc"
              />
            </Form.Item>
          </Col>

          {/* Cán bộ thu */}
          <Col xs={24} sm={24} md={12} lg={3}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "CBT 1" }]}
                placeholder="Chọn cán bộ thu"
              />
            </Form.Item>
          </Col>

          {/* Phạm vi */}
          <Col xs={24} sm={24} md={12} lg={3}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "PV 1" }]}
                placeholder="Chọn phạm vi"
              />
            </Form.Item>
          </Col>

          {/* Chọn vùng */}
          <Col xs={24} sm={24} md={12} lg={3}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "CV 1" }]}
                placeholder="Chọn vùng"
              />
            </Form.Item>
          </Col>

          {/* Chọn khu vực */}
          <Col xs={24} sm={24} md={24} lg={3}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "KV 1" }]}
                placeholder="Chọn khu vực"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          {/* Số hợp đồng */}
          <Col xs={24} sm={24} md={8} lg={5}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
              label="Số hợp đồng: "
            >
              <Input name="" placeholder="Nhập số hợp đồng" />
            </Form.Item>
          </Col>

          {/* Số hóa đơn */}
          <Col xs={24} sm={24} md={8} lg={5}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
              label="Số hóa đơn: "
            >
              <Select
                name=""
                options={[{ value: "1", label: "HĐ 1" }]}
                placeholder="Chọn số hóa đơn"
              />
            </Form.Item>
          </Col>

          {/* Số hóa đơn */}
          <Col xs={24} sm={24} md={8} lg={5}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
            >
              <Input name="" placeholder="Nhập số hóa đơn" />
            </Form.Item>
          </Col>

          {/* Hình thức thanh toán */}
          <Col xs={24} sm={24} md={12} lg={3}>
            <Form.Item
              name=""
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "HT 1" }]}
                placeholder="Chọn hình thức thanh toán"
              />
            </Form.Item>
          </Col>

          {/* Hình thức thanh toán */}
          <Col xs={24} sm={24} md={12} lg={6}>
            <Form.Item
              name=""
              className={
                isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"
              }
              label="Thanh toán"
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "HT 1" }]}
                placeholder="Chọn hình thức thanh toán"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          {/* Khách hàng */}
          <Col xs={24} sm={24} md={10} lg={10}>
            <Form.Item
              name=""
              label="Khách hàng"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          {/* ĐT giá */}
          <Col xs={24} sm={24} md={9} lg={11}>
            <Form.Item
              name=""
              label="ĐT giá"
              className={isTabletOrMobile ? "gutter-item-mobile" : ""}
            >
              <Select
                fieldNames=""
                options={[{ value: "1", label: "ĐT 1" }]}
                className={isTabletOrMobile ? "" : "gutter-item"}
                placeholder="Chọn đối tượng giá"
              />
            </Form.Item>
          </Col>

          {/* Button search */}
          <Col xs={24} sm={24} md={3} lg={2}>
            <Button
              htmlType="submit"
              type="primary"
              className="btn-search-payment"
            >
              <SearchOutlined />
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Render table payment */}
      <TableListPayment />

      {/* func bottom */}
      <div className="contract-bottom">
        <div className="contract-bottom-func">
          {/* check mobile */}
          {isTabletOrMobile ? (
            <Popover
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              content={<TabList isTabletOrMobile={isTabletOrMobile} />}
            >
              <PlusOutlined />
            </Popover>
          ) : (
            <TabList />
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;

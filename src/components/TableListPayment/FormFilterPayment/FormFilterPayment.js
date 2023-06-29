import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

function FormFilterPayment() {
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
    <Form onFinish={handleSubmit} onFinishFailed={handleFailed}>
      <Row>
        {/* Chọn tháng */}
        <Col xs={24} sm={12} md={12} lg={5}>
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
        <Col xs={24} sm={12} md={12} lg={4}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "CB 1" }]}
              placeholder="Chọn cán bộ đọc"
            />
          </Form.Item>
        </Col>

        {/* Tuyến đọc */}
        <Col xs={24} sm={12} md={12} lg={3}>
          <Form.Item name="" className={isTabletOrMobile ? "" : "gutter-item"}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "TD 1" }]}
              placeholder="Chọn Tuyến đọc"
            />
          </Form.Item>
        </Col>

        {/* Cán bộ thu */}
        <Col xs={24} sm={12} md={12} lg={3}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "CBT 1" }]}
              placeholder="Chọn cán bộ thu"
            />
          </Form.Item>
        </Col>

        {/* Phạm vi */}
        <Col xs={24} sm={8} md={12} lg={3}>
          <Form.Item name="" className={isTabletOrMobile ? "" : "gutter-item"}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "PV 1" }]}
              placeholder="Chọn phạm vi"
            />
          </Form.Item>
        </Col>

        {/* Chọn vùng */}
        <Col xs={24} sm={8} md={12} lg={3}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "CV 1" }]}
              placeholder="Chọn vùng"
            />
          </Form.Item>
        </Col>

        {/* Chọn khu vực */}
        <Col xs={24} sm={8} md={24} lg={3}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
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
        <Col xs={24} sm={8} md={8} lg={5}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
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
        <Col xs={24} sm={8} md={8} lg={5}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Input name="" placeholder="Nhập số hóa đơn" />
          </Form.Item>
        </Col>

        {/* Hình thức thanh toán */}
        <Col xs={24} sm={8} md={12} lg={3}>
          <Form.Item
            name=""
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
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
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
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
        <Col xs={24} sm={12} md={10} lg={10}>
          <Form.Item
            name=""
            label="Khách hàng"
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Input name="" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>

        {/* ĐT giá */}
        <Col xs={24} sm={12} md={10} lg={11}>
          <Form.Item
            name=""
            label="ĐT giá"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "ĐT 1" }]}
              placeholder="Chọn đối tượng giá"
            />
          </Form.Item>
        </Col>

        {/* Button search */}
        <Col xs={24} sm={24} md={1} lg={1}>
          <Button
            htmlType="submit"
            type="primary"
            className={
              isTabletOrMobile ? "gutter-item-btn" : "btn-search-payment"
            }
          >
            <SearchOutlined />
            Tìm kiếm
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterPayment;

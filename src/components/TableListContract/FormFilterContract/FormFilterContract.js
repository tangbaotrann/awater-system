import { Button, Col, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

function FormFilterContract() {
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
        {/* Số hợp đồng */}
        <Col xs={24} sm={12} md={12} lg={5}>
          <Form.Item
            name="num_contract"
            label="Số hợp đồng"
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Input name="num_contract" placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>

        {/* Mã khách hàng */}
        <Col xs={24} sm={12} md={12} lg={4}>
          <Form.Item
            name="code_customer"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Input
              name="code_customer"
              placeholder="Nhập mã khách hàng hoặc IDKH"
            />
          </Form.Item>
        </Col>

        {/* Tên khách hàng */}
        <Col xs={24} sm={12} md={12} lg={4}>
          <Form.Item
            name="name_customer"
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Input name="name_customer" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>

        {/* Seri đồng hồ */}
        <Col xs={24} sm={12} md={12} lg={4}>
          <Form.Item
            name="num_seri"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Input name="num_seri" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>

        {/* Số hộ */}
        <Col xs={24} sm={12} md={12} lg={3}>
          <Form.Item
            name="num_house"
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Input name="num_house" placeholder="Nhập số hộ" />
          </Form.Item>
        </Col>

        {/* Số hộ từ */}
        <Col xs={24} sm={12} md={12} lg={4}>
          <Form.Item
            name="num_house_from"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Input name="num_house_from" placeholder="Nhập số hộ từ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Cán bộ đọc */}
        <Col xs={24} sm={8} md={8} lg={6}>
          <Form.Item
            name="staff_reading"
            label="Cán bộ đọc: "
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Select
              fieldNames="staff_reading"
              options={[
                { value: "CB_1", label: "CB 1" },
                { value: "CB_2", label: "CB 2" },
              ]}
              placeholder="Chọn cán bộ đọc"
            />
          </Form.Item>
        </Col>

        {/* Tuyến đọc */}
        <Col xs={24} sm={8} md={8} lg={6}>
          <Form.Item
            name="line_reading"
            label="Tuyến đọc: "
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              name="line_reading"
              options={[
                { value: "TD_1", label: "TD 1" },
                { value: "TD_2", label: "TD 2" },
              ]}
              placeholder="Chọn tuyến đọc"
            />
          </Form.Item>
        </Col>

        {/* Phạm vi */}
        <Col xs={24} sm={8} md={8} lg={6}>
          <Form.Item
            name="size_limit"
            label="Phạm vi: "
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Select
              name="size_limit"
              options={[
                { value: "PV_1", label: "PV 1" },
                { value: "PV_2", label: "PV 2" },
              ]}
              placeholder="Chọn phạm vi"
            />
          </Form.Item>
        </Col>

        {/* Tìm kiếm */}
        <Col xs={24} sm={4} md={4} lg={2}>
          <Button className="custom-btn-search gutter-item-btn">
            <SearchOutlined />
            Tìm kiếm
          </Button>
        </Col>

        {/* Tìm kiếm nâng cao */}
        <Col xs={24} sm={4} md={4} lg={2}>
          <Button
            style={{ marginLeft: "18px" }}
            className="custom-btn-search gutter-item-btn"
          >
            <SearchOutlined />
            Tìm kiếm nâng cao
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterContract;

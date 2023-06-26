import { Button, Col, Form, Input, Popover, Row, Select } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import "./Contract.css";
import TableListContract from "../../../components/TableListContract/TableListContract";
import TabList from "../../../components/TableListContract/TabList/TabList";

function Contract() {
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
    <div className="wrapper-contract">
      <Form onFinish={handleSubmit} onFinishFailed={handleFailed}>
        <Row>
          {/* Số hợp đồng */}
          <Col xs={24} sm={24} md={12} lg={5} className="gutter-item"> 
            <Form.Item name="num_contract" label="Số hợp đồng: ">
              <Input name="num_contract" placeholder="Nhập số hợp đồng" />
            </Form.Item>
          </Col>

          {/* Mã khách hàng */}
          <Col xs={24} sm={24} md={10} lg={4} className="gutter-item">
            <Form.Item name="code_customer">
              <Input
                name="code_customer"
                placeholder="Nhập mã khách hàng hoặc IDKH"
              />
            </Form.Item>
          </Col>

          {/* Tên khách hàng */}
          <Col xs={24} sm={24} md={12} lg={4} className="gutter-item">
            <Form.Item name="name_customer">
              <Input name="name_customer" placeholder="Nhập tên khách hàng" />
            </Form.Item>
          </Col>

          {/* Seri đồng hồ */}
          <Col xs={24} sm={24} md={10} lg={3} className="gutter-item">
            <Form.Item name="num_seri">
              <Input name="num_seri" placeholder="Nhập seri đồng hồ" />
            </Form.Item>
          </Col>

          {/* Số hộ */}
          <Col xs={24} sm={24} md={12} lg={3} className="gutter-item">
            <Form.Item name="num_house">
              <Input name="num_house" placeholder="Nhập số hộ" />
            </Form.Item>
          </Col>

          {/* Số hộ từ */}
          <Col xs={24} sm={24} md={10} lg={3} className="gutter-item">
            <Form.Item name="num_house_from">
              <Input name="num_house_from" placeholder="Nhập số hộ từ" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          {/* Cán bộ đọc */}
          <Col xs={24} sm={24} md={7} lg={5} className="gutter-item">
            <Form.Item name="staff_reading" label="Cán bộ đọc: ">
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
          <Col xs={24} sm={24} md={8} lg={5} className="gutter-item">
            <Form.Item name="line_reading" label="Tuyến đọc: ">
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
          <Col xs={24} sm={24} md={7} lg={5} className="gutter-item">
            <Form.Item name="size_limit" label="Phạm vi: ">
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
          <Col xs={24} sm={4} md={4} lg={3}>
            <Button className="contract-search-btn" type="primary">
              <SearchOutlined />
              Tìm kiếm
            </Button>
          </Col>

          {/* Tìm kiếm nâng cao */}
          <Col xs={24} sm={4} md={4} lg={2}>
            <Button type="primary">
              <SearchOutlined />
              Tìm kiếm nâng cao
            </Button>
          </Col>
        </Row>
      </Form>

      {/* render table */}
      <TableListContract />

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

export default Contract;

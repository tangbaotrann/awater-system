import { Button, Col, Divider, Form, Input, Row, Select, Table } from "antd";
import {
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
  SaveOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

function FormSortNumberClock({ hideModalSortNumber }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // cols
  const cols = [
    {
      key: "index",
      title: "STT",
      dataIndex: "index",
    },
    {
      key: "fullName",
      title: "Tên khách hàng",
      dataIndex: "fullName",
    },
    {
      key: "code_clock",
      title: "Mã đồng hồ",
      dataIndex: "code_clock",
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
    },
  ];

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values ->", values);
  };

  // handle submit error
  const handleSubmitFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
      {/* Tìm kiếm + Buttons + Tuyến đọc */}
      <Row>
        <Col xs={24} sm={19} md={11} lg={10}>
          <Form.Item
            name=""
            label="Tìm kiếm"
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Input name="" placeholder="Tìm kiếm" />
          </Form.Item>
        </Col>

        <Col xs={3} sm={2} md={1} lg={1} className="gutter-item">
          <Button type="primary">
            <LeftOutlined />
          </Button>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1} className="gutter-item">
          <Button type="primary">
            <RightOutlined />
          </Button>
        </Col>

        <Col xs={24} sm={23} md={10} lg={11}>
          <Form.Item name="" label="Tuyến đọc (*)">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "TD 1" }]}
              placeholder="Chọn mã tuyến đọc"
            />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* render table */}
      <div className="container-tbl-sort-number">
        <Table columns={cols} rowKey="index" size="small"></Table>
      </div>

      <Divider />

      {/* Buttons  */}
      <div className="func-sort-number-btn">
        <Button
          htmlType="submit"
          type="primary"
          className="item-sort-number-btn"
        >
          <SortAscendingOutlined />
          Sắp xếp theo TT ghi
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          className="item-sort-number-btn"
        >
          <SaveOutlined />
          Lưu
        </Button>
        <Button
          className="item-sort-number-btn-close"
          onClick={() => hideModalSortNumber()}
          type="primary"
        >
          <CloseOutlined />
          Đóng
        </Button>
      </div>
    </Form>
  );
}

export default FormSortNumberClock;

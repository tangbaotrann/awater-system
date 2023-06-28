import { Col, Form, Input, Row, Table } from "antd";
import { useMediaQuery } from "react-responsive";

function TableInfoContract() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const cols = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "num_contract",
      title: "Số HĐ",
      dataIndex: "num_contract",
    },
    {
      key: "fullName",
      title: "Tên",
      dataIndex: "fullName",
    },
    {
      key: "total",
      title: "Tổng tiền",
      dataIndex: "total",
    },
  ];

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
      <Table
        columns={cols}
        rowKey="index"
        size="small"
        scroll={{ x: 700 }}
      ></Table>

      {/* render form cart */}
      <Form
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        style={{ marginTop: "10px" }}
      >
        {/* Số HĐ + Tiền TT */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
              name=""
              label="Số HĐ"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Số hóa đơn" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
              name=""
              label="Tiền TT"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Tiền TT" />
            </Form.Item>
          </Col>
        </Row>

        {/* Tiền KH + Còn lại */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
              name=""
              label="Tiền KH"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Tiền khách đưa" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
              name=""
              label="Còn lại"
              className={isTabletOrMobile ? "" : "gutter-item"}
            >
              <Input name="" placeholder="Còn lại" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default TableInfoContract;

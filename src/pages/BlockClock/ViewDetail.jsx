import { Button, Col, Form, Input, Row, Table, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import { PrinterOutlined } from "@ant-design/icons";

const ViewDetail = ({ hideModal }) => {
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Mã block",
      dataIndex: "blockCode",
      key: "blockCode",
    },
    {
      title: "Tên block",
      dataIndex: "blockName",
      key: "blockName",
    },
    {
      title: "Tháng",
      children: [
        {
          title: "SL(m3)",
          dataIndex: "sl",
          key: "sl",
        },
        {
          title: "Xúc xả(m3)",
          dataIndex: "xx",
          key: "xx",
        },
        {
          title: "Công ích(m3)",
          dataIndex: "ci",
          key: "ci",
        },
        {
          title: "Khác(m3)",
          dataIndex: "other",
          key: "other",
        },
        {
          title: "SLĐHC(m3)",
          dataIndex: "sldhc",
          key: "sldhc",
        },
        {
          title: "TT(%)",
          dataIndex: "tt",
          key: "tt",
        },
      ],
    },
  ];

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  const { token } = theme.useToken();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const [form1] = Form.useForm();
  return (
    <>
      <Form
        form={form1}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Row>
          <Col
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohopdong" label="Số hợp đồng">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="makh" label="Mã KH">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="tenkh" label="Tên KH">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            span={isTabletOrMobile ? 24 : 24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Table
              size="small"
              rowKey="index"
              pagination={{
                current: 1,
                // total: initialData.length,
                pageSize: 18,
              }}
              scroll={{ x: 1200, y: 440 }}
              columns={columns}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop:"10px",
          }}
        >
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            icon={<PrinterOutlined />}
            style={{ marginRight: "10px" }}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            Tính thất thoát
          </Button>

          <Button
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            style={{ marginRight: "1px" }}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};
export default ViewDetail;
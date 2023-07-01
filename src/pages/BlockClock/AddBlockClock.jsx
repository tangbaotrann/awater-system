import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Space,
  Table,
  theme,
} from "antd";
import { useMediaQuery } from "react-responsive";
import {
  FastBackwardOutlined,
  FastForwardOutlined,
  PrinterOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";

const AddBlockClock = ({ hideModal }) => {
  const columns1 = [
    {
      title: "Đã chọn",
      dataIndex: "selected",
      render: (text, record) => (
        <Checkbox
          checked={record.selected}
          onChange={(e) => {
            // Xử lý sự kiện thay đổi trạng thái nhấn chọn
          }}
        />
      ),
    },
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerCode",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Tuyến",
      dataIndex: "route",
    },
    {
      title: "Số liệu",
      dataIndex: "data",
    },
    {
      title: "Kiểu đồng hồ",
      dataIndex: "clockType",
    },
  ];

  const columns2 = [
    {
      title: "Đã chọn",
      dataIndex: "selected",
      render: (text, record) => (
        <Checkbox
          checked={record.selected}
          onChange={(e) => {
            // Xử lý sự kiện thay đổi trạng thái nhấn chọn
          }}
        />
      ),
    },
    {
      title: "Số hợp đồng",
      dataIndex: "contractNumber",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerCode",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Tuyến",
      dataIndex: "route",
    },
    {
      title: "Số hiệu",
      dataIndex: "number",
    },
    {
      title: "Kiểu đồng hồ",
      dataIndex: "clockType",
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
            span={isTabletOrMobile ? 24 : 10}
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
              columns={columns1}
            />
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 2}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Space
              direction={isTabletOrMobile ? "horizontal" : "vertical"}
              style={{ marginTop: "60px", marginLeft: "40px" }}
            >
              <Button icon={<FastForwardOutlined />} />
              <Button icon={<StepForwardOutlined />} />
              <Button icon={<StepBackwardOutlined />} />
              <Button icon={<FastBackwardOutlined />} />
            </Space>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 10}
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
              columns={columns2}
            />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
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
            Cập nhật
          </Button>

          <Button
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            style={{ marginRight: "110px" }}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};
export default AddBlockClock;

import { Button, Col, Form, Input, Row, theme } from "antd";
import { useMediaQuery } from "react-responsive";
import {
  CloseOutlined,
  PlusCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const EditBlockClock = ({ hideModal }) => {
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
  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 30,
    },
  };
  return (
    <>
      <Form
        {...layout}
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
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="mablock" label="Mã block">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="tenblock" label="Tên Block">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="lydothay" label="Lý do thay">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={{ span: 19, flex: "auto" }}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
            style={!isTabletOrMobile ? { marginLeft: "-190px" } : {}}
          >
            <Form.Item name="diachi" label="Đia chỉ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="seri" label="Seri">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sohieu" label="Số hiệu">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="mavach" label="Mã vạch">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngaylap" label="Ngày lắp">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="nguoilap" label="Người lắp">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="mavung" label="Mã Vùng">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="khuvuc" label="Khu vực">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="nhanvien" label="Nhân viên">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="matuyendoc" label="Mã tuyến đọc">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="mablockcha" label="Mã block cha">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="chisodau" label="Chỉ số đầu">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="chisocuoi" label="Chỉ số cuối">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="trangthai" label="Trạng thái">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngaybd" label="Ngày BĐ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngayketthuc" label="Ngày kết thúc">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="nuocsx" label="Nước SX">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="hangsx" label="Hãng SX">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="kieudongho" label="Kiểu đồng hồ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="duongkinh" label="Đường kính">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="hopbaove" label="Hộp bảo vệ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="vitrilapdat" label="Vị trí lắp đặt">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngaykiemdinh" label="Ngày kiểm định">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="hieuluckd" label="Hiệu lực KĐ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 7}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="sophieuthay" label="Số phiếu thay">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="hinhthucxl" label="Hình thức XL">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="kinhdo" label="Kinh độ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            span={isTabletOrMobile ? 24 : 11}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="vido" label="Vĩ độ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
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
            icon={<PlusCircleOutlined />}
            style={{ marginRight: "10px" }}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            Lưu và thêm tiếp
          </Button>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            style={{ marginRight: "10px" }}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            Lưu và đóng
          </Button>
          <Button
            icon={<CloseOutlined />}
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            style={{ marginRight: "10px" }}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};
export default EditBlockClock;

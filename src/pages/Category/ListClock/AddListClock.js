import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  theme,
} from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
moment.locale("vi");
const AddListWatch = ({ hideModal }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const { Option } = Select;
  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  const layout = {
    labelCol: {
      span: 9,
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
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Mã đồng hồ">
              <Input style={{ width: "100%" }}></Input>
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Số seri">
              <Input style={{ width: "100%" }}></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Chỉ số đầu">
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Chỉ số cuối">
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Kiểu đồng hồ">
              <Select>
                <Option value="1">Kiểu đồng hồ 1</Option>
                <Option value="2">Kiểu đồng hồ 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Đường kính">
              <Input style={{ width: "100%" }}></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Nước sản xuất">
              <Select placeholder="Chọn nước sản xuất">
                <Option value="1">Nước sản xuất 1</Option>
                <Option value="2">Nước sản xuất 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Hãng sản xuất">
              <Select placeholder="Chọn hãng sản xuất">
                <Option value="1">Hãng sản xuất 1</Option>
                <Option value="2">Hãng sản xuất 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Ngày sản xuất">
              <DatePicker
                locale={viVN}
                style={{
                  width: "100%",
                }}
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Ngày kết thúc">
              <DatePicker
                locale={viVN}
                style={{
                  width: "100%",
                }}
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Số thứ tự">
              <InputNumber min={1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Đồng hồ cha">
              <Select placeholder="Chọn khu vực cha">
                <Option value="1">Đồng hồ cha 1</Option>
                <Option value="2">Đồng hồ cha 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Địa chỉ">
              <Input style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={11}
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Trạng thái">
              <Select placeholder="Chọn trạng thái">
                <Option value="1">Trạng thái 1</Option>
                <Option value="2">Trạng thái 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Button
            key="reset"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
          >
            Lưu Và Thêm Tiếp
          </Button>

          <Button
            key="submit"
            style={{
              marginLeft: "10px",
            }}
            htmlType="submit"
            icon={<SaveOutlined />}
            className="custom-btn-attachment-d"
          >
            Lưu Và Đóng
          </Button>

          <Button
            style={{
              marginLeft: "10px",
            }}
            icon={<CloseOutlined />}
            htmlType="submit"
            className="custom-btn-close-d"
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default AddListWatch;

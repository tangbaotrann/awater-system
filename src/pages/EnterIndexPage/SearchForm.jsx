import React from "react";
import { Button, Form, Row, Col, Select, DatePicker, theme } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";

const SearchForm = ({ hideModal }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const handleMonthChange = (date) => {
    if (date) {
      form1.setFieldsValue({ month: date.format("M/YYYY") });
    } else {
      form1.setFieldsValue({ month: undefined });
    }
  };
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };
  const { Option } = Select;
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const onReset = () => {
    form1.resetFields();
  };
  // Đoạn mã của bạn ở đây
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
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Loại khách hàng" name="customerType">
              <Select>
                {/* Thêm các lựa chọn loại khách hàng tại đây */}
                <Option value="1">Loại 1</Option>
                <Option value="2">Loại 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Phạm vi" name="range">
              <Select>
                {/* Thêm các lựa chọn phạm vi tại đây */}
                <Option value="1">Phạm vi 1</Option>
                <Option value="2">Phạm vi 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Vùng" name="region">
              <Select>
                {/* Thêm các lựa chọn vùng tại đây */}
                <Option value="1">Vùng 1</Option>
                <Option value="2">Vùng 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Khu vực" name="area">
              <Select>
                {/* Thêm các lựa chọn khu vực tại đây */}
                <Option value="1">Khu vực 1</Option>
                <Option value="2">Khu vực 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col
            span={12}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Ngày đọc từ" name="fromDate">
              <DatePicker
                locale={viVN}
                style={{
                  width: "100%",
                }}
                onChange={handleMonthChange}
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
          <Col
            span={11}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            <Form.Item label="Đến" name="toDate">
              <DatePicker
                locale={viVN}
                style={{
                  width: "100%",
                }}
                onChange={handleMonthChange}
                format="DD/MM/YYYY"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Nút Tìm kiếm, Xóa điều kiện TK và Đóng */}
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Tìm kiếm
          </Button>
          &nbsp;
          <Button
            key="reset"
            type="primary"
            icon={<RedoOutlined />}
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={onReset}
          >
            Xóa điều kiện TK
          </Button>
          &nbsp;
          <Button
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default SearchForm;

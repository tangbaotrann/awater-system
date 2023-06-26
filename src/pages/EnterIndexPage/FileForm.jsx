import React from "react";
import { Button, Row, Col, Upload, DatePicker, Input, Form, theme } from "antd";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";
const FileForm = ({ hideModal }) => {
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

  const [form1] = Form.useForm();
  const { token } = theme.useToken();

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
          <Col span={12} xs={24} sm={12}>
            <Form.Item label="Chọn tệp">
              <Upload>
                <Button>Chọn tệp từ thư mục máy</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12} xs={24} sm={12}>
            <Form.Item label="Chọn Tháng">
              <DatePicker
                locale={viVN}
                style={{
                  width: "100%",
                }}
                picker="month"
                onChange={handleMonthChange}
                format="MM/YYYY"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item label="Dữ liệu chỉ số trong tệp"></Form.Item>
            <Form.Item>
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Button
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            size="small"
          >
            Cập Nhật
          </Button>
          ,
          <Button
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
            size="small"
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default FileForm;

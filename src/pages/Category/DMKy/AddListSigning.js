import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, theme } from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { addKy } from "../../../redux/slices/DMKy/kySlice";

const AddDMKy = ({ hideModal }) => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form (main)
  const handleSubmit = (values) => {
    const data = { ...values };
    data.nhaMayId = 'NH1';
    if (data) {
      dispatch(addKy(data));
    }
    hideModal();
    form.resetFields();
  };

  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  const [form] = Form.useForm();
  const { token } = theme.useToken();

  const layout = {
    labelCol: {
      span: 5,
    },
  };
  return (
    <>
      <Form
        {...layout}
        form={form}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="keyId" label="Mã/Ký hiệu">
              <Input name="keyId" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="moTa" label="Tên/Mô tả">
              <Input name="moTa" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngaySuDungTu" label="Ngày sử dụng từ">
              <DatePicker name="ngaySuDungTu" placeholder="Chọn ngày" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngaySuDungDen" label="Ngày sử dụng đến">
              <DatePicker name="ngaySuDungDen" placeholder="Chọn ngày" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>{" "}
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item name="ngayHoaDon" label="Ngày hóa đơn">
              <DatePicker name="ngayHoaDon" placeholder="Chọn ngày" style={{ width: "100%" }} />
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

export default AddDMKy;

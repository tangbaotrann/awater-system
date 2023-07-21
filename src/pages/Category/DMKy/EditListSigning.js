import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, theme, message } from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { updateKy } from "../../../redux/slices/DMKy/kySlice";

const EditListSigning = ({ tabListbc, hideModal }) => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form (main)
  const handleSubmit = (values) => {
    if (values) {
      dispatch(updateKy(values));
      form.resetFields();
      hideModal();
      message.success("Cập nhật thành công.");
    }
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

  console.log(tabListbc);

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
        fields={[
          { name: "keyId", value: tabListbc ? tabListbc?.keyId : null },
          { name: "moTa", value: tabListbc ? tabListbc?.moTa : null },
          { name: "ngaySuDungTu", value: tabListbc ? tabListbc?.ngaySuDungTu : null },
          { name: "ngaySuDungDen", value: tabListbc ? tabListbc?.ngaySuDungDen : null },
          { name: "ngayHoaDon", value: tabListbc ?  tabListbc?.ngayHoaDon : null },
        ]}
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
            <Form.Item label="Mã/Ký hiệu" name="keyId">
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
            <Form.Item label="Tên/Mô tả" name="moTa">
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
            <Form.Item label="Ngày sử dụng từ" name="ngaySuDungTu">
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
            <Form.Item label="Ngày sử dụng đến" name="ngaySuDungDen">
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
            <Form.Item label="Ngày hóa đơn" name="ngayHoaDon">
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

export default EditListSigning;

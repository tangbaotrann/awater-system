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
import dayjs from "dayjs";

const EditListSigning = ({ tabKy, hideModal }) => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form (main)
  const handleSubmit = (values) => {
    if (values) {
      const data = { ...values };
      data.nhaMayId = 'NH1';
      dispatch(updateKy(data));
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
          { name: "keyId", value: tabKy ? tabKy?.keyId : null },
          { name: "moTa", value: tabKy ? tabKy?.moTa : null },
          { name: "ngaySuDungTu", value: tabKy ? dayjs(tabKy?.ngaySuDungTu) : null },
          { name: "ngaySuDungDen", value: tabKy ? dayjs(tabKy?.ngaySuDungDen) : null },
          { name: "ngayHoaDon", value: tabKy ? dayjs(tabKy?.ngayHoaDon) : null },
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
              <Input name="keyId" style={{ width: "100%" }} readOnly/>
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
              <DatePicker picker="date" format='YYYY-MM-DD' name="ngaySuDungTu" placeholder="Chọn ngày" style={{ width: "100%" }} />
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
              <DatePicker picker="date" format='YYYY-MM-DD' name="ngaySuDungDen" placeholder="Chọn ngày" style={{ width: "100%" }} />
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
              <DatePicker picker="date" format='YYYY-MM-DD' name="ngayHoaDon" placeholder="Chọn ngày" style={{ width: "100%" }} />
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

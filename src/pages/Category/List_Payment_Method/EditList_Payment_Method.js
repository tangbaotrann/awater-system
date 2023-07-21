import React from "react";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchApiUpdatePaymentMethod } from "../../../redux/slices/paymentMethodSlice/paymentMethodSlice";

const EditPaymentMethod = ({ tabListbc, hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const layout = {
    labelCol: {
      span: 5,
    },
  };

  // handle submit form
  const handleSubmit = (values) => {
    if (values) {
      dispatch(fetchApiUpdatePaymentMethod(values));
      form1.resetFields();
      hideModal();
    }
  };
  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
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
        fields={[
          { name: "keyId", value: tabListbc ? tabListbc?.keyId : null },
          {
            name: "moTaPhuongThuc",
            value: tabListbc ? tabListbc?.moTaPhuongThuc : null,
          },
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
            <Form.Item
              label="Mã/Ký hiệu"
              name="keyId"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                name="keyId"
                placeholder="Nhập ký hiệu"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item
              label="Tên/Mô tả"
              name="moTaPhuongThuc"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "100%" }}
                name="moTaPhuongThuc"
                placeholder="Nhập mô tả"
              />
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
          {/* <Button
            key="reset"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
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
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            Lưu Và Đóng
          </Button> */}
          <Button
            key="update"
            htmlType="submit"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
          >
            {/* Lưu Và Thêm Tiếp */}
            Cập nhật
          </Button>
          <Button
            style={{
              marginLeft: "10px",
            }}
            icon={<CloseOutlined />}
            htmlType="submit"
            className="custom-btn-close-d"
            // className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default EditPaymentMethod;

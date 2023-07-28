import React from "react";
import { Button, Col, Form, Input, Row, theme } from "antd";
import { CloseOutlined, FileAddOutlined } from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchApiUpdateCancel } from "../../../redux/slices/listCancelSlice/listCancelSlice";
import { toast } from "react-toastify";

const EditListCancel = ({ tabListCancel, hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const layout = {
    labelCol: {
      span: 4,
    },
  };

  // handle submit form (update price List Object)
  const handleSubmit = (values) => {
    if (values) {
      dispatch(fetchApiUpdateCancel(values));
      form1.resetFields();
      hideModal();
    }
  };

  // handle submit error (main)
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
          { name: "keyId", value: tabListCancel ? tabListCancel?.keyId : null },
          { name: "lyDo", value: tabListCancel ? tabListCancel?.lyDo : null },
        ]}
      >
        {/* <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item label="ID" name="id">
              <Input
                style={{ width: "100%" }}
                name="id"
                placeholder="Nhập ID"
              />
            </Form.Item>
          </Col>
        </Row> */}
        <Row gutter={24}>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={24}
            span={24}
            className={isTabletOrMobile ? "" : "gutter-item"}
          >
            <Form.Item label="Mã lý do hủy" name="keyId">
              <Input
                style={{ width: "100%" }}
                name="keyId"
                placeholder="Nhập mã lý do hủy"
              />
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
            <Form.Item label="Tên lý do hủy" name="lyDo">
              <Input
                style={{ width: "100%" }}
                name="lyDo"
                placeholder="Nhập tên lý do hủy"
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
          <Button
            key="update"
            htmlType="submit"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
          >
            Cập nhật
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

export default EditListCancel;

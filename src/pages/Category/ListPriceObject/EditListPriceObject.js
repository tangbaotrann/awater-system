import React from "react";
import { Button, Col, Form, Input, Row, theme } from "antd";
import { CloseOutlined, FileAddOutlined } from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchApiUpdatePriceObject } from "../../../redux/slices/priceObjectSlice/priceObjectSlice";
import { toast } from "react-toastify";

const EditListRegionLocation = ({ tabListPO, hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const layout = {
    labelCol: {
      span: 4,
    },
  };

  // handle submit form (main)
  const handleSubmit = (values) => {
    if (values) {
      dispatch(fetchApiUpdatePriceObject(values));

      form1.resetFields();
      hideModal();
      toast.success("Cập nhật thành công.");
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
          { name: "id", value: tabListPO ? tabListPO?.id : null },
          { name: "kyHieu", value: tabListPO ? tabListPO?.kyHieu : null },
          { name: "moTa", value: tabListPO ? tabListPO?.moTa : null },
          { name: "donViTinh", value: tabListPO ? tabListPO?.donViTinh : null },
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
            <Form.Item label="ID" name="id">
              <Input
                style={{ width: "100%" }}
                name="id"
                placeholder="Nhập ID"
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
            <Form.Item label="Mã/Ký hiệu" name="kyHieu">
              <Input
                style={{ width: "100%" }}
                name="kyHieu"
                placeholder="Ký hiệu"
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
            <Form.Item label="Tên/Mô tả" name="moTa">
              <Input
                style={{ width: "100%" }}
                name="moTa"
                placeholder="Nhập mô tả"
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
            <Form.Item label="Đơn vị tính" name="donViTinh">
              <Input
                style={{ width: "100%" }}
                name="donViTinh"
                placeholder="Nhập đơn vị"
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

export default EditListRegionLocation;

import React from "react";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import { CloseOutlined, FileAddOutlined } from "@ant-design/icons";

import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { fetchApiUpdateRegion } from "../../../redux/slices/regionSlice/regionSlice";

const EditListRegionLocation = ({ tabListbc, hideModal, factoryNames }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const layout = {
    labelCol: {
      span: 4,
    },
  };

  // handle submit form (update region)
  const handleSubmit = (values) => {
    if (values) {
      dispatch(fetchApiUpdateRegion(values));
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
          { name: "nhaMayId", value: tabListbc ? tabListbc?.nhaMayId : null },
          { name: "keyId", value: tabListbc ? tabListbc?.keyId : null },
          { name: "tenVung", value: tabListbc ? tabListbc?.tenVung : null },
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
            <Form.Item label="Tên nhà máy" name="nhaMayId">
              <Select placeholder="Chọn tên nhà máy" fieldNames="nhaMayId">
                {factoryNames?.length <= 0
                  ? []
                  : factoryNames.map((_factory) => {
                      return (
                        <Select.Option key={_factory.id} value={_factory.id}>
                          {_factory.tenNhaMay}
                        </Select.Option>
                      );
                    })}
              </Select>
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
            <Form.Item label="Mã Vùng" name="keyId">
              <Input style={{ width: "100%" }} name="keyId" />
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
            <Form.Item label="Tên Vùng" name="tenVung">
              <Input style={{ width: "100%" }} name="tenVung" />
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
            {/* Lưu Và Thêm Tiếp */}
            Cập nhật
          </Button>

          {/* <Button
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

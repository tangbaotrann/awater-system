import React, { useEffect, useRef } from "react";
import { Button, Col, Form, Input, Row, Select, theme } from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { fetchApiAllPriceObjectSelector } from "../../../redux/selector";
import { fetchApiAllPriceObject } from "../../../redux/slices/priceObjectSlice/priceObjectSlice";
import { fetchApiAddPriceObject } from "../../../redux/slices/priceObjectSlice/priceObjectSlice";
// import { fetchApiAllFactorySelector } from "../../../redux/selector";
// import { fetchApiAllFactory } from "../../../redux/slices/factorySlice/factorySlice";
// import { fetchApiAddRegion } from "../../../redux/slices/regionSlice/regionSlice";
const AddListPriceObject = ({ hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  const firstInputRef = useRef();

  const dispatch = useDispatch();

  const priceObject = useSelector(fetchApiAllPriceObjectSelector);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const layout = {
    labelCol: {
      span: 5,
    },
    // wrapperCol: {
    //   span: 40,
    // },
  };

  // useEffect(() => {
  //   dispatch(fetchApiAllPriceObject());
  // }, []);

  // handle save and close modal
  const handleSaveAndClose = () => {
    form1.validateFields().then((values) => {
      if (values) {
        dispatch(fetchApiAddPriceObject(values));

        form1.resetFields();
        hideModal();
        toast?.success("Thêm thành công.");
      }
    });
  };

  // handle save and continue add
  const handleSaveAndAdd = () => {
    form1.validateFields().then((values) => {
      if (values) {
        dispatch(fetchApiAddPriceObject(values));

        form1.resetFields();
        hideModal();
        toast?.success("Thêm thành công.");
      }
    });
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
            key="saveAndAdd"
            style={{
              marginLeft: "10px",
            }}
            icon={<FileAddOutlined />}
            className="custom-btn-reset-d"
            // htmlType="submit"
            onClick={handleSaveAndAdd}
          >
            Lưu Và Thêm Tiếp
          </Button>

          <Button
            key="saveAndClose"
            style={{
              marginLeft: "10px",
            }}
            htmlType="submit"
            icon={<SaveOutlined />}
            className="custom-btn-attachment-d"
            onClick={handleSaveAndClose}
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

export default AddListPriceObject;

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

import { fetchApiAllFactorySelector } from "../../../redux/selector";
import { fetchApiAllFactory } from "../../../redux/slices/factorySlice/factorySlice";
import { fetchApiAddRegion } from "../../../redux/slices/regionSlice/regionSlice";

const ListRegionsLocation = ({ hideModal }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  const firstInputRef = useRef();

  const dispatch = useDispatch();

  const factoryNames = useSelector(fetchApiAllFactorySelector);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const layout = {
    labelCol: {
      span: 5,
    },
    // wrapperCol: {
    //   span: 40,
    // },
  };

  useEffect(() => {
    dispatch(fetchApiAllFactory());
  }, []);

  // handle save and close modal
  const handleSaveAndClose = () => {
    form1.validateFields().then((values) => {
      if (values) {
        dispatch(fetchApiAddRegion(values));

        form1.resetFields();
        hideModal();
        toast.success("Thêm thành công vùng.");
      }
    });
  };

  // handle save and continue add
  const handleSaveAndAdd = () => {
    form1.validateFields().then((values) => {
      if (values) {
        dispatch(fetchApiAddRegion(values));

        form1.resetFields();
        firstInputRef.current.focus();
        toast.success("Thêm thành công vùng.");
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
            <Form.Item label="Tên nhà máy" name="nhaMayId">
              <Select
                ref={firstInputRef}
                options={factoryNames.map((_factory) => ({
                  label: _factory.tenNhaMay,
                  value: _factory.id,
                }))}
                fieldNames="nhaMayId"
                placeholder="Chọn tên nhà máy"
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
            <Form.Item label="Mã Vùng" name="id">
              <Input
                style={{ width: "100%" }}
                name="id"
                placeholder="Nhập mã vùng"
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

export default ListRegionsLocation;

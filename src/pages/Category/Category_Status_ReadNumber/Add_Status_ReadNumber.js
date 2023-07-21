import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  Input,
  Row,
  theme,
} from "antd";
import {
  CloseOutlined,
  FileAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addDMTrangThaiChiSo } from "../../../redux/slices/DMTrangThaiChiSo/trangThaiChiSoSlice";

const Add_Status_ReadNumber = ({ hideModal }) => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const isAddedSuccess = useSelector(
    (state) => state.trangThaiChiSo.isAddedSuccess
  );
  const [colorValue, setColorValue] = useState("");

  // handle submit form (main)
  const handleSubmit = (values) => {
    const data = { ...values };
    data.maMau = colorValue;
    if (data) {
      dispatch(addDMTrangThaiChiSo(data));
    }
    if (isAddedSuccess) {
      hideModal();
    }
  };

  const layout = {
    labelCol: {
      span: 5,
    },
  };

  const handleColorChange = (color) => {
    setColorValue(color.toHexString());
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      onFinish={handleSubmit}
      style={{
        maxWidth: "none",
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        padding: 10,
      }}
    >
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
            name="KeyId"
            label="Mã trạng thái"
            rules={[
              {
                required: true,
                message: "Mã trạng thái không được để trống",
              },
            ]}
          >
            <Input name="KeyId" style={{ width: "100%" }} />
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
            name="tenTrangThai"
            label="Tên trạng thái"
            rules={[
              {
                required: true,
                message: "Tên trạng thái không được để trống",
              },
            ]}
          >
            <Input name="tenTrangThai" style={{ width: "100%" }} />
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
          <Form.Item name="moTaNgan" label="Mô tả ngắn">
            <Input name="moTaNgan" style={{ width: "100%" }} />
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
          <Form.Item name="soTt" label="Số thứ tự">
            <Input
              placeholder="Nhập số thứ tự"
              type="Number"
              min={1}
              name="soTt"
              style={{ width: "100%" }}
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
          <Form.Item label="Mã màu" name="maMau">
            <ColorPicker
              name="maMau"
              color={colorValue}
              onChange={handleColorChange}
              showText={(color) => (
                <span> Mã màu : ({color.toHexString()})</span>
              )}
            />
          </Form.Item>
          <Form.Item label="Giá trị màu">
            <Input value={colorValue} readOnly />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col
          style={{ marginLeft: "40px" }}
          className={isTabletOrMobile ? "" : "gutter-item"}
        >
          <Form.Item name="khongChoPhepGhi" valuePropName="checked">
            <Checkbox name="khongChoPhepGhi">Không cho phép ghi</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col
          style={{ marginLeft: "40px" }}
          className={isTabletOrMobile ? "" : "gutter-item"}
        >
          <Form.Item name="khongChoPhepHienThi" valuePropName="checked">
            <Checkbox name="khongChoPhepHienThi">
              Không cho phép hiển thị trên thanh ghi chỉ số
            </Checkbox>
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
          style={{
            marginLeft: "10px",
          }}
          icon={<FileAddOutlined />}
          className="custom-btn-reset-d"
          onClick={onReset}
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
  );
};

export default Add_Status_ReadNumber;

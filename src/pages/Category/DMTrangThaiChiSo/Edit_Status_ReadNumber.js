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
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import { updateDMTrangThaiChiSo } from "../../../redux/slices/DMTrangThaiChiSo/trangThaiChiSoSlice";

const Edit_Status_ReadNumber = ({ hideModal }) => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const rowSelected = useSelector(btnClickTabListInvoicePrintSelector);
  const dispatch = useDispatch();
  const [colorValue, setColorValue] = useState("");

  // handle submit form (main)
  const handleSubmit = (values) => {
    const data = { ...values };
    data.maMau = colorValue;
    if (values) {
      dispatch(updateDMTrangThaiChiSo(data));
    }
    hideModal();
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  const onReset = () => {
    form.resetFields();
  };

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
          padding: 10,
        }}
        fields={form.setFieldsValue(rowSelected)}
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
            <Form.Item name="KeyId" label="Mã trạng thái" required>
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
            <Form.Item name="tenTrangThai" label="Tên trạng thái" required>
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
                name="soTt"
                placeholder="Nhập số thứ tự"
                type="Number"
                min={1}
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
            <Form.Item label="Mã màu">
              <ColorPicker
                size="large"
                onChange={(color) => setColorValue(color.toHexString())}
                showText={(color) => (
                  <span>Custom Text ({color.toHexString()})</span>
                )}
                value={rowSelected?.maMau}
              />
            </Form.Item>
            <Form.Item label="Giá trị màu" hidden>
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

        {/* Footer Button */}
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

export default Edit_Status_ReadNumber;

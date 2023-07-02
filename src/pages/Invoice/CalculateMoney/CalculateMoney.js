import { CloseOutlined, SaveFilled } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  theme,
} from "antd";
import { useState } from "react";

export const CalculateMoney = (props) => {
  const { isOpen } = props;
  const { token } = theme.useToken();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  console.log(isOpen);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Modal
      title="Tính tiền hóa đơn"
      open={isOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      width={600}
      footer={null}
      style={{
        top: 50,
      }}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Form.Item name="date" label="Tháng" style={{ marginRight: "70px" }}>
          <DatePicker
            allowClear
            placeholder="Chọn tháng"
            style={{ width: "100%" }}
            format="MM-YYYY"
            picker="month"
          />
        </Form.Item>
        <Form.Item
          name="person"
          label="Cán bộ đọc"
          style={{ marginRight: "70px" }}
        >
          <Select
            defaultValue="--Chọn cán bộ--"
            style={{
              width: "100%",
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="tuyendoc"
          label="Tuyến đọc"
          style={{ marginRight: "70px" }}
        >
          <Select
            defaultValue="--Chọn tuyến đọc--"
            style={{
              width: "100%",
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="status"
          label="Phạm vi"
          style={{ marginRight: "70px" }}
        >
          <Select
            defaultValue="--Chọn phạm vi--"
            style={{
              width: "100%",
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="place"
          label="Khách hàng"
          style={{ marginRight: "70px" }}
        >
          <Input placeholder="Tên khách hàng" />
        </Form.Item>
        <Form.Item
          name="ky"
          label="Số hợp đồng"
          style={{ marginRight: "70px" }}
        >
          <Input placeholder="Số hợp đồng, mã KH, IDKH" />
        </Form.Item>
        <Checkbox style={{ marginRight: "13px" }}>Tính lại tất cả</Checkbox>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "justify-between",
          marginBottom: 16,
          marginTop: 16,
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "auto" }}>
          <Button
            type="primary"
            icon={<SaveFilled />}
            style={{ marginRight: 5 }}
            size="middle"
          >
            Bắt đầu thực hiện
          </Button>
          <Button
            className="custom-btn-close"
            onClick={props.handleCancel}
            size="middle"
          >
            <CloseOutlined />
            Đóng
          </Button>
        </div>
      </div>
    </Modal>
  );
};

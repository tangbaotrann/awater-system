import React from "react";
import { Button, Form, Row, theme } from "antd";

import { useMediaQuery } from "react-responsive";
import WaterPriceTable from "../../../../utils/dataEnterIndexPage/data/WaterPriceTable";
const PriceTableButton = ({ hideModal }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  const [form1] = Form.useForm();
  const { token } = theme.useToken();

  // Đoạn mã của bạn ở đây
  return (
    <>
      <Form
        form={form1}
        onFinish={handleSubmit}
        onFinishFailed={handleFailed}
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        {/* Sử dụng thành phần WaterPriceTable để hiển thị bảng giá nước */}
        <WaterPriceTable />
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
          justify="end"
        >
          <Button
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
          >
            Cập Nhật
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            className={isTabletOrMobile ? "gutter-item-btn" : "gutter-item"}
            onClick={() => hideModal()}
          >
            Đóng
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default PriceTableButton;

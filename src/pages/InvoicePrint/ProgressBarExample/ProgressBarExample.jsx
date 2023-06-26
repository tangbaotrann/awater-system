import React from "react";
import { Progress, Row, Col, Form, theme } from "antd";
import { useMediaQuery } from "react-responsive";
const ProgressBarExample = (hideModal) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  return (
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
      <Row>
        <Col span={24}>
          <Row>
            <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Progress percent={10} format={(percent) => `${percent * 10}`} />
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Progress
                percent={60}
                strokeColor="yellow"
                format={(percent) => `${percent * 10}`}
              />
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Progress
                percent={70}
                strokeColor="red"
                format={(percent) => `${percent * 10}`}
              />
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Progress
                percent={30}
                strokeColor="#ff8033"
                format={(percent) => `${percent * 10}`}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default ProgressBarExample;

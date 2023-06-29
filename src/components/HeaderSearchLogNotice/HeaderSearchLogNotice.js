import { Button, Col, DatePicker, Form, Input, Row, Select, Space, theme } from "antd";

export const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = {
    maxWidth: "none",
    borderRadius: token.borderRadiusLG,
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 28,
    },
  };

  return (
    <Form
      {...layout}
      form={form}
      name="advanced_search"
      style={formStyle}
      onFinish={onFinish}
    //   size="small"   
    >
      <Row gutter={24}>
        <Col span={8} xs={24} sm={12} lg={8}>
          <Form.Item name="date" label="Ngày gửi">
            <div style={{ display: "flex", gap: "10px" }}>
              <DatePicker
                allowClear
                placeholder="Từ"
                format="DD-MM-YYYY"
              />
              <DatePicker
                allowClear
                placeholder="Đến"
                format="DD-MM-YYYY"
              />
            </div>
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={12} lg={8}>
          <Form.Item name="tuyendoc" label="Hình thức gửi">
            <Select
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
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={12} lg={8}>
          <Form.Item name="status" label="Người gửi">
            <Select
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
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6} xs={24} sm={12} lg={8}>
          <Form.Item name="place" label="Tên lần gửi">
              <Input/>
          </Form.Item>
        </Col>
        <Col span={6} xs={24} sm={12} lg={8}>
          <Form.Item name="ky" label="Đã trả tiền">
            <Select
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
        </Col>
        <Col span={6} xs={24} sm={12} lg={8}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

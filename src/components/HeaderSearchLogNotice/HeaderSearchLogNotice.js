import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

export const AdvancedSearchForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const layout = {
    labelCol: {
      span: 6,
    },
    // wrapperCol: {
    //   span: 22,
    // }, 
  };

  return (
    <Form
      {...layout}
      form={form}
      name="advanced_search"
      onFinish={onFinish}
      //   size="small" 
    >
      <Row gutter={24}>
        <Col span={8} xs={24} sm={12} md={12} lg={8}>
          <Form.Item name="date" label="Ngày gửi">
            <div style={{ display: "flex", gap: "10px" }}>
              <DatePicker allowClear placeholder="Từ" format="DD-MM-YYYY" />
              <DatePicker allowClear placeholder="Đến" format="DD-MM-YYYY" />
            </div>
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={12} md={12} lg={8}>
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
        <Col span={8} xs={24} sm={12} md={12} lg={8}>
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
        <Col span={6} xs={24} sm={12} md={12} lg={8}>
          <Form.Item name="place" label="Tên lần gửi">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6} xs={24} sm={12} md={12} lg={8}>
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
        <Col span={6} xs={24} sm={12} md={12} lg={8}>
          <div
            style={{
              textAlign: "end",
            }}
          >
            <Button
              className="custom-btn-search gutter-item-btn"
              htmlType="submit"
            >
              <SearchOutlined />
              Tìm kiếm
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

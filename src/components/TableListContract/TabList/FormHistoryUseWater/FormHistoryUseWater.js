import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";

function FormHistoryUseWater({ tabList }) {
  // handle submit form (history use water)
  const handleSubmit = (values) => {
    console.log("values ->", values);
  };

  // handle submit error (history use water)
  const handleSubmitFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitFailed}
      fields={[
        { name: "date_from_chk", value: false },
        { name: "date_to_chk", value: false },
      ]}
    >
      <Row>
        {/* Khách hàng */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="code_customer" label="Khách hàng: ">
            <Input name="code_customer" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>

        {/* Số hợp đồng */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="num_contract" label="Số hợp đồng: ">
            <Input name="num_contract" placeholder="Nhập số hợp đồng" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Từ ngày */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <Form.Item name="date_from" label="Từ ngày: ">
            <Select fieldNames="date_from" placeholder="Chọn ngày" />
          </Form.Item>
        </Col>

        {/* Checkbox (Từ ngày) */}
        <Col xs={24} sm={24} md={12} lg={3}>
          <Form.Item
            name="date_from_chk"
            rules={[
              {
                required: false,
              },
            ]}
            valuePropName="checked"
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>

        {/* Đến ngày */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <Form.Item name="date_to" label="Đến ngày: ">
            <Select fieldNames="date_to" placeholder="Chọn ngày" />
          </Form.Item>
        </Col>

        {/* Checkbox (Đến ngày) */}
        <Col xs={24} sm={24} md={12} lg={3} className="gutter-item">
          <Form.Item
            name="date_to_chk"
            rules={[
              {
                required: false,
              },
            ]}
            valuePropName="checked"
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>

        {/* Button */}
        <Col xs={24} sm={24} md={12} lg={3}>
          <Button htmlType="submit" type="primary">
            Xem báo cáo
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormHistoryUseWater;

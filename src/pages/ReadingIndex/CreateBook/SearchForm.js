import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  theme,
} from "antd";

export const SearchForm = () => {
  const [form] = Form.useForm();
  const { token } = theme.useToken();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const formStyle = {
    maxWidth: "none",
    // background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div>
      <Form
        form={form}
        name="advanced_search"
        style={formStyle}
        onFinish={onFinish}
        size="small"
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="date"
              label="Tháng"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                allowClear
                placeholder="Chọn tháng"
                style={{ width: "100%" }}
                format="MM-YYYY"
                picker="month"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="person"
              label="Cán bộ"
              rules={[
                {
                  required: true,
                },
              ]}
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
          </Col>
          <Col span={8}>
            <Form.Item name="tuyendoc" label="Tuyến đọc">
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
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item name="status" label="Phạm vi">
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
          </Col>
          <Col span={6}>
            <Form.Item name="place" label="Loại KH">
              <Select
                defaultValue="--Chọn loại KH--"
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
          <Col span={6}>
            <Form.Item name="ky" label="Số hợp đồng">
              <Input placeholder="Nhập số hợp đồng" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="numberName" label="Loại ĐH">
              <Select
                defaultValue="--Chọn loại ĐH--"
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
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Space size="small">
            <Button type="primary" htmlType="submit"  icon={<SearchOutlined />}>
              Tìm kiếm
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
              }}
            >
              Tìm mới
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

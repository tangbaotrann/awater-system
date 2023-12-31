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
import { ModalAdvanceSearch } from "../../pages/Invoice/ModalAdvanceSearch";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

export const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [isOpenModalSearch, setIsOpenModalSearch] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      style={{
        maxWidth: "none",
        // background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
      }}
      onFinish={onFinish}
      // size="small"
      labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
    >
      <Row gutter={24}>
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="date" label="Chọn tháng">
            <DatePicker
              allowClear
              placeholder="Chọn tháng"
              style={{ width: "100%" }}
              format="MM-YYYY"
              picker="month"
            />
          </Form.Item>
        </Col>
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="person" label="Cán bộ đọc">
            <Select
              // defaultValue="--Chọn cán bộ đọc--"
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
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="tuyendoc" label="Tuyến đọc">
            <Select
              // defaultValue="--Chọn tuyến đọc--"
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
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="status" label="Phạm vi">
            <Select
              // defaultValue="--Chọn phạm vi--"
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
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="status" label="Số hợp đồng">
            <Select
              // defaultValue="--Chọn số hợp đồng--"
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
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="place" label="Khách hàng">
            <Input placeholder="Tên khách hàng" />
          </Form.Item>
        </Col>
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="ky" label="Số hóa đơn">
            <div style={{ display: "flex", gap: "10px" }}>
              <Select
                // defaultValue="--Chọn số hóa đơn--"
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
              <DatePicker allowClear placeholder="Từ" format="DD-MM-YYYY" />
              <DatePicker allowClear placeholder="Đến" format="DD-MM-YYYY" />
            </div>
          </Form.Item>
        </Col>
        <Col span={6} xs={24} sm={12} lg={6}>
          <Form.Item name="numberName" label="TT Hóa đơn">
            <Select
              // defaultValue="--Chọn in hóa đơn--"
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
          <Button
            className="custom-btn-search gutter-item-btn"
            htmlType="submit"
          >
            <SearchOutlined />
            Tìm kiếm
          </Button>
          <Button
            onClick={() => setIsOpenModalSearch(true)}
            className="custom-btn-search gutter-item-btn"
          >
            <SearchOutlined />
            Tìm kiếm nâng cao
          </Button>
        </Space>
      </div>
      <ModalAdvanceSearch
        isOpenModalSearch={isOpenModalSearch}
        setIsOpenModalSearch={setIsOpenModalSearch}
      />
    </Form>
  );
};

import { Col, Form, Input, Row, Select, theme } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";

export const FormClock = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 26,
    },
  };
  return (
    <div className="clock-info">
      <Form  size="small">
        <Row gutter={24}>
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item name="date" label="Vùng">
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
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item name="person" label="Khu vực">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item
              name="tuyendoc"
              label="Nhân viên"
              rules={[{ required: true }]}
            >
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
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item name="date" label="Tuyến đọc">
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
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item name="person" label="Phạm vi">
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
          <Col
            style={{
              width: "100%",
            }}
            sm={24}
            md={8}
            lg={8}
          >
            <Form.Item name="tuyendoc" label="Số hợp đồng">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col
            sm={24}
            md={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            <Form.Item name="date" label="Mã đồng hồ">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col sm={24} md={12} lg={6}>
            <Form.Item
              name="person"
              label="CS đầu"
              rules={[{ required: true }]}
            >
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
          <Col sm={24} md={12} lg={6}>
            <Form.Item
              name="tuyendoc"
              label="CS cuối"
              rules={[{ required: true }]}
            >
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
          <Col
            sm={24}
            md={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            <Form.Item name="tuyendoc" label="Tiêu thụ">
              <Input placeholder="" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col sm={24} md={12} lg={6}>
            <Form.Item name="date" label="Mã đồng hồ cũ">
              <Input placeholder="" />
            </Form.Item>
          </Col>
          <Col sm={24} md={12} lg={6}>
            <Form.Item name="person" label="CS đầu cũ">
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
          <Col sm={24} md={12} lg={6}>
            <Form.Item name="tuyendoc" label="CS cuối cũ">
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
          <Col
            sm={24}
            md={12}
            lg={6}
            style={{
              width: "100%",
            }}
          >
            <Form.Item name="tuyendoc" label="Truy thu">
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
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="date" label="Loại hóa đơn">
              <Select
                defaultValue="--Chọn loại hóa đơn--"
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
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="person" label="Số nước KM">
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
          <Col span={12}>
            <Form.Item name="date" label="Hình thức TT">
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
          <Col span={12}>
            <Form.Item name="person" label="Đối tượng giá">
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
      </Form>
    </div>
  );
};

import { Button, Col, Collapse, Form, Input, Row } from "antd";
import {
  CloseOutlined,
  FormOutlined,
  PrinterOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

import InfoContract from "./InfoContract/InfoContract";
import InfoClock from "./InfoClock/InfoClock"; 
import InfoDetailClock from "./InfoDetailClock/InfoDetailClock";
import InfoCustomer from "./InfoCustomer/InfoCustomer";

function FormCreateContract({ tabList, hideModal }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // console.log(isTabletOrMobile);

  // collapse (Thông tin khách hàng)
  const items = [
    {
      key: "1",
      label: "Thông tin khách hàng",
      children: <InfoCustomer />,
    },
  ];

  // collapse (Thông tin hợp đồng)
  const itemsInfoContract = [
    {
      key: "2",
      label: "Thông tin hợp đồng",
      children: <InfoContract />,
    },
  ];

  // collapse (Đồng hồ)
  const itemsClock = [
    {
      key: "3",
      label: "Đồng hồ",
      children: <InfoClock />,
    },
  ];

  // collapse (Chi tiết đồng hồ)
  const itemsDetailClock = [
    {
      key: "4",
      label: "Chi tiết đồng hồ",
      children: <InfoDetailClock />,
    },
  ];

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form
      colon={true}
      onFinish={handleSubmit}
      onFinishFailed={handleFailed}
      fields={[
        {
          name: "type_customer",
          value: tabList ? tabList?.type_customer : "",
        },
        {
          name: "code_cus",
          value: tabList ? tabList?.code_customer : "",
        },
        {
          name: "fullName",
          value: tabList ? tabList?.fullName : "",
        },
        {
          name: "address_cus",
          value: tabList ? tabList?.address : "",
        },
        {
          name: "phone",
          value: tabList ? tabList?.phone : "",
        },
      ]}
    >
      {/* Mã khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="code_customer" label="Mã khách hàng: ">
            <Input name="code_customer" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Thông tin khách hàng + Đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Collapse
            key="1"
            size="small"
            items={items}
            accordion={false}
            defaultActiveKey={["1"]}
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className={!isTabletOrMobile ? "" : "collapse-space-top-mobile-item"}
        >
          <Collapse
            className="collapse-space-left-item"
            key="3"
            size="small"
            items={itemsClock}
            accordion={false}
            defaultActiveKey={["3"]}
          />
        </Col>
      </Row>

      {/* Thông tin hợp đồng + Chi tiết đồng hồ */}
      <Row className="space-col">
        <Col xs={24} sm={24} md={12} lg={12}>
          <Collapse
            key="2"
            size="small"
            items={itemsInfoContract}
            accordion={false}
            defaultActiveKey={["2"]}
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className={!isTabletOrMobile ? "" : "collapse-space-top-mobile-item"}
        >
          <Collapse
            className="collapse-space-left-item"
            key="4"
            size="small"
            items={itemsDetailClock}
            accordion={false}
            defaultActiveKey={["4"]}
          />
        </Col>
      </Row>

      {/* Bottom */}
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className={isTabletOrMobile ? "func-form-create-contract-mobile" : ""}
        >
          <Button htmlType="submit" className="custom-btn-attachment">
            <FormOutlined />
            Tệp đính kèm
          </Button>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className={isTabletOrMobile ? "func-form-create-contract-mobile" : ""}
        >
          <Button
            htmlType="submit"
            className={
              isTabletOrMobile
                ? "footer-func-btn-item-report custom-btn-agreement"
                : "gutter-item custom-btn-agreement"
            }
          >
            <FormOutlined />
            Biên bản thỏa thuận
          </Button>

          <Button
            htmlType="submit"
            className={
              isTabletOrMobile
                ? "footer-func-btn-item-print custom-btn-export"
                : "gutter-item custom-btn-export"
            }
          >
            <PrinterOutlined />
            In hợp đồng
          </Button>

          <Button
            htmlType="submit"
            className={
              isTabletOrMobile
                ? "footer-func-btn-item-save-add custom-btn-save-and-add"
                : "gutter-item custom-btn-save-and-add"
            }
          >
            <SaveOutlined />
            Lưu và thêm tiếp
          </Button>

          <Button
            htmlType="submit"
            className={
              isTabletOrMobile
                ? "footer-func-btn-item-save custom-btn-add"
                : "gutter-item custom-btn-add"
            }
          >
            <SaveOutlined />
            Lưu
          </Button>

          <Button
            className={
              isTabletOrMobile
                ? "footer-func-btn-item-close custom-btn-close"
                : "gutter-item custom-btn-close"
            }
            onClick={() => hideModal()}
          >
            <CloseOutlined />
            Đóng
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormCreateContract;

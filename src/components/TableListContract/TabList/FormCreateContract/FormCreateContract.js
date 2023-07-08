import { Button, Col, Form, Input, Row, Tabs } from "antd";
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

// Tabs
const tabs = [
  {
    id: "1",
    label: "Thông tin khách hàng",
  },
  {
    id: "2",
    label: "Đồng hồ",
  },
  {
    id: "3",
    label: "Thông tin hợp đồng",
  },
  {
    id: "4",
    label: "Chi tiết đồng hồ",
  },
];

function FormCreateContract({ tabList, hideModal }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  // console.log(isTabletOrMobile);

  // handle submit form (main)
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error (main)
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <>
      <div className="wrapper-tab-modal-create-contract">
        {/* Tabs options */}
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Tabs
              type="card"
              size="small"
              defaultActiveKey={tabs[0]}
              items={tabs.map((_tab) => {
                return {
                  label: <div>{_tab.label}</div>,
                  key: _tab.id,
                  children: (
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
                        <Col xs={24} sm={24} md={12} lg={10}>
                          <Form.Item name="code_customer" label="Mã khách hàng">
                            <Input
                              name="code_customer"
                              placeholder="Nhập mã khách hàng"
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      {/* Thông tin khách hàng + Đồng hồ */}
                      <Row>
                        {_tab.id === "1" ? (
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <InfoCustomer />
                          </Col>
                        ) : _tab.id === "2" ? (
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            className={
                              !isTabletOrMobile
                                ? ""
                                : "collapse-space-top-mobile-item"
                            }
                          >
                            <InfoClock />
                          </Col>
                        ) : null}
                      </Row>

                      {/* Thông tin hợp đồng + Chi tiết đồng hồ */}
                      <Row className="space-col">
                        {_tab.id === "3" ? (
                          <Col xs={24} sm={24} md={24} lg={24}>
                            <InfoContract />
                          </Col>
                        ) : _tab.id === "4" ? (
                          <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={24}
                            className={
                              !isTabletOrMobile
                                ? ""
                                : "collapse-space-top-mobile-item"
                            }
                          >
                            <InfoDetailClock />
                          </Col>
                        ) : null}
                      </Row>

                      {/* Bottom */}
                      <Row>
                        <Col
                          xs={24}
                          sm={24}
                          md={12}
                          lg={12}
                          className={
                            isTabletOrMobile
                              ? "func-form-create-contract-mobile"
                              : ""
                          }
                        >
                          <Button
                            htmlType="submit"
                            className="custom-btn-attachment"
                          >
                            <FormOutlined />
                            Tệp đính kèm
                          </Button>
                        </Col>

                        {/* Buttons */}
                        <Col
                          xs={24}
                          sm={24}
                          md={12}
                          lg={12}
                          className={
                            isTabletOrMobile
                              ? "func-form-create-contract-mobile"
                              : ""
                          }
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
                  ),
                };
              })}
            ></Tabs>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FormCreateContract;

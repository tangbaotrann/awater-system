import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Row, Tabs } from "antd";

import LocomotiveInfo from "./LocomotiveInfo/LocomotiveInfo";
import ClockCurrentInfo from "./ClockCurrentInfo/ClockCurrentInfo";
import ClockNewInfo from "./ClockNewInfo/ClockNewInfo";

// Tabs
const tabs = [
  {
    id: "1",
    label: "Thông tin đầu máy",
  },
  {
    id: "2",
    label: "Đồng hồ hiện tại",
  },
  {
    id: "3",
    label: "Đồng hồ mới",
  },
];

function FormUpdateClock({ tabList, hideModal }) {
  // form Thông tin đầu máy
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 4 },
      lg: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  // form Đồng hồ hiện tại
  const formItemLayoutClockNow = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 4 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  // handle submit form (change clock)
  const handleSubmitChangeClock = (values) => {
    console.log("values ->", values);
  };

  // handle submit error (history use water)
  const handleSubmitChangeClockFailed = (error) => {
    console.log({ error });
  };

  return (
    <div className="wrapper-form-update-clock">
      {/* Tabs options */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <h3>Thay đồng hồ mới</h3>
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
                    onFinish={handleSubmitChangeClock}
                    onFinishFailed={handleSubmitChangeClockFailed}
                    fields={[
                      {
                        name: "code_customer",
                        value: tabList ? tabList?.code_customer : "",
                      },
                      {
                        name: "fullName",
                        value: tabList ? tabList?.fullName : "",
                      },
                      {
                        name: "address",
                        value: tabList ? tabList?.address : "",
                      },
                    ]}
                    style={{ padding: "10px" }}
                  >
                    {/* render form (Thông tin đầu máy) */}
                    {_tab.id === "1" ? (
                      <LocomotiveInfo formItemLayout={formItemLayout} />
                    ) : _tab.id === "2" ? (
                      <ClockCurrentInfo
                        formItemLayoutClockNow={formItemLayoutClockNow}
                      />
                    ) : (
                      <ClockNewInfo
                        formItemLayoutClockNow={formItemLayoutClockNow}
                      />
                    )}

                    <Divider />

                    {/* Button */}
                    <div className="btn-func-change-clock">
                      <Button
                        htmlType="submit"
                        className="btn-update-change-clock custom-btn-update"
                      >
                        <EditOutlined />
                        Cập nhật
                      </Button>
                      <Button
                        onClick={() => hideModal()}
                        className="btn-close-change-clock custom-btn-close"
                      >
                        <CloseOutlined />
                        Đóng
                      </Button>
                    </div>
                  </Form>
                ),
              };
            })}
            style={{ marginTop: "12px" }}
          ></Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default FormUpdateClock;

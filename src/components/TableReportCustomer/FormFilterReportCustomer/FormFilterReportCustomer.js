import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";

import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";
import { useMediaQuery } from "react-responsive";

function FormFilterReportCustomer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: `${isTabletOrMobile ? 6 : 4}`,
    },
    wrapperCol: {
      span: 24,
    },
  };

  // handle filter change name factory
  const handleChangeNameFactory = (value) => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory(value));
  };

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form
      {...layout}
      onFinish={handleSubmit}
      onFinishFailed={handleFailed}
      initialValues={{
        unit: "all",
        employee: "all",
        reading_line: "all",
        watch_style: "all",
      }}
      fields={[
        { name: "no_val_one", value: false },
        { name: "no_val_two", value: false },
      ]}
    >
      {/* Đơn vị + Nhân viên */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="unit" label="Đơn vị: ">
            <Select
              fieldNames="unit"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "Nhà máy nước Hiệp Hòa 1" },
                { value: "opt_2", label: "Nhà máy nước Hiệp Hòa 2" },
              ]}
              onSelect={handleChangeNameFactory}
              className="gutter-item-inp"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="employee" label="Nhân viên: ">
            <Select
              fieldNames="employee"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "NV_01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Tìm kiếm tuyến + Tuyến dọc */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="online_search" label="Tìm tuyến: ">
            <Input name="online_search" placeholder="Tìm kiếm tuyến" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="reading_line" label="Tuyến đọc">
            <Select
              fieldNames="reading_line"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "TD_01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Từ ngày + Đến ngày */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="start_date" label="Từ ngày: ">
            <DatePicker className="date-time-inp" placeholder="Chọn ngày" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="end_start" label="Đến ngày: ">
            <DatePicker className="date-time-inp" placeholder="Chọn ngày" />
          </Form.Item>
        </Col>
      </Row>

      {/* Checkbox */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            rules={[
              {
                required: false,
              },
            ]}
            valuePropName="checked"
            hasFeedback
            name="no_val_one"
            label="Chọn"
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            rules={[
              {
                required: false,
              },
            ]}
            hasFeedback
            valuePropName="checked"
            name="no_val_two"
            label="Chọn"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      {/* Kiểu đồng hồ + Kích cở */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="watch_style" label="Kiểu đồng hồ">
            <Select
              fieldNames="watch_style"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "Kiểu 01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="size" label="Kích cỡ: ">
            <Input placeholder="Kích cỡ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              htmlType="submit"
              type="primary"
              className="gutter-item-btn"
            >
              Xem báo cáo
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterReportCustomer;

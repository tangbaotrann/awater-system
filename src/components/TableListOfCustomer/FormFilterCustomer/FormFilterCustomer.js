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
import { useMediaQuery } from "react-responsive";

import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";

function FormFilterCustomer() {
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

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };
  // handle filter change name factory
  const handleChangeNameFactory = (value) => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory(value));
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
        { name: "district", value: "all" },
        { name: "wards", value: "all" },
        { name: "area_tt", value: "all" },
        { name: "type_customer", value: "all" },
        { name: "form_tt", value: "all" },
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
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="employee" label="Nhân viên: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
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
          <Form.Item name="reading_line" label="Tuyến đọc: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
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
            hasFeedback
            valuePropName="checked"
            name="no_val_two"
            label="Chọn"
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      {/* Kiểu đồng hồ + Kích cở */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="watch_style" label="Kiểu đồng hồ: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="size" label="Kích cỡ: ">
            <Input placeholder="Kích cỡ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Quận huyện + Xã phường */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="district" label="Quận huyện: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="wards" label="Xã phường: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>
      </Row>

      {/* Khu vực TT + Loại khách hàng */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="area_tt" label="Khu vực TT: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="type_customer" label="Loại KH: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>
      </Row>

      {/* Hình thức TT */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="form_tt" label="Hình thức TT: ">
            <Select options={[{ value: "all", label: "Tất cả" }]} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}></Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              htmlType="submit"
              className="gutter-item-btn custom-btn-watch-report"
            >
              Xem báo cáo
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterCustomer;

import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";

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
    <Form
      onFinish={handleSubmitChangeClock}
      onFinishFailed={handleSubmitChangeClockFailed}
      fields={[
        {
          name: "code_customer",
          value: tabList ? tabList?.code_customer : "",
        },
        { name: "fullName", value: tabList ? tabList?.fullName : "" },
        { name: "address", value: tabList ? tabList?.address : "" },
      ]}
      style={{ padding: "10px" }}
    >
      {/* Card (Thông tin đầu máy) */}
      <Divider orientation="left" style={{ fontWeight: "bold" }}>
        Thông tin đầu máy
      </Divider>

      {/* Mã khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item
            name="code_customer"
            label="Mã khách hàng"
            {...formItemLayout}
          >
            <Input name="code_customer" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tên khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="fullName" label="Tên khách hàng" {...formItemLayout}>
            <Input name="fullName" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Địa chỉ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="address" label="Địa chỉ" {...formItemLayout}>
            <Input name="address" placeholder="Nhập Địa chỉ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tuyến đọc + Thứ tự */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="line_reading" label="Tuyến đọc" {...formItemLayout}>
            <Input name="line_reading" placeholder="Nhập tuyến đọc" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <Form.Item name="" label="Thứ tự" {...formItemLayout}>
            <Input name="" placeholder="Nhập thứ tự" />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* Card (Đồng hồ hiện tại) */}
      <Divider orientation="left" style={{ fontWeight: "bold" }}>
        Đồng hồ hiện tại
      </Divider>

      {/* Kiểu đồng hồ + Đường kính */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name="type_clock"
            label="Kiểu đồng hồ"
            {...formItemLayoutClockNow}
          >
            <Input name="type_clock" placeholder="Nhập Kiểu đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      {/* Mã đồng hồ + Seri đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Serial chỉ + Chỉ số đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial chỉ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập serial chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số đầu" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập chỉ số đầu" />
          </Form.Item>
        </Col>
      </Row>

      {/* Chỉ số cuối + Ngày lắp đặt */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số cuối" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập chỉ số cuối" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày lắp đặt" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập ngày lắp đặt" />
          </Form.Item>
        </Col>
      </Row>

      {/* Lý do hủy + Ngày bắt đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do hủy" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do hủy"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày bắt đầu: " {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày bắt đầu"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      {/*  + Ngày kết thúc */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Ngày kết thúc: "
            {...formItemLayoutClockNow}
          >
            <DatePicker
              name=""
              placeholder="Chọn ngày kết thúc"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* Card (Đồng hồ mới) */}
      <Divider orientation="left" style={{ fontWeight: "bold" }}>
        Đồng hồ mới
      </Divider>

      {/* Kiểu đồng hồ + Đường kính  */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Kiểu đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập Kiểu đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      {/* Mã đồng hồ + Seri đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial đồng hồ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Serial chỉ + Chỉ số đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial chỉ" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập serial chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số đầu" {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập chỉ số đầu" />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày sử dụng + Ngày kiểm định */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày sử dụng" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày sử dụng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày kiểm định" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn ngày kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Hiệu lực KĐ + Người thay */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hiệu lực KĐ" {...formItemLayoutClockNow}>
            <DatePicker
              name=""
              placeholder="Chọn hiệu lực KĐ"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người thay" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "NT 1" }]}
              placeholder="Chọn người thay"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Lý do thay + Hình thức xử lý */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do thay" {...formItemLayoutClockNow}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do thay"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Hình thức xử lý"
            {...formItemLayoutClockNow}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "NT 1" }]}
              placeholder="Chọn hình thức xử lý"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Ghi chú + Trạng thái ĐH lắp */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ghi chú: " {...formItemLayoutClockNow}>
            <Input name="" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name=""
            label="Trạng thái ĐH: "
            {...formItemLayoutClockNow}
          >
            <Select
              fieldNames=""
              options={[{ value: "1", label: "TT 1" }]}
              placeholder="Chọn trạng thái ĐH lắp"
            />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* Button */}
      <div className="btn-func-change-clock">
        <Button
          htmlType="submit"
          type="primary"
          className="btn-update-change-clock"
        >
          <EditOutlined />
          Cập nhật
        </Button>
        <Button
          onClick={() => hideModal()}
          className="btn-close-change-clock"
          type="primary"
        >
          <CloseCircleOutlined />
          Đóng
        </Button>
      </div>
    </Form>
  );
}

export default FormUpdateClock;

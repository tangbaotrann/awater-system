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
        <Col xs={24} sm={24} md={24} lg={24} className="gutter-item">
          <Form.Item name="code_customer" label="Mã khách hàng: ">
            <Input name="code_customer" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tên khách hàng */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} className="gutter-item">
          <Form.Item name="fullName" label="Tên khách hàng: ">
            <Input name="fullName" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Địa chỉ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} className="gutter-item">
          <Form.Item name="address" label="Địa chỉ: ">
            <Input name="address" placeholder="Nhập Địa chỉ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Tuyến đọc + Thứ tự */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name="line_reading"
            label="Tuyến đọc: "
            className="gutter-item"
          >
            <Input name="line_reading" placeholder="Nhập tuyến đọc" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Thứ tự: ">
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
            label="Kiểu đồng hồ: "
            className="gutter-item"
          >
            <Input name="type_clock" placeholder="Nhập Kiểu đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính: ">
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      {/* Mã đồng hồ + Seri đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đồng hồ: " className="gutter-item">
            <Input name="" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial đồng hồ: ">
            <Input name="" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Serial chỉ + Chỉ số đầu + Chỉ số cuối */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial chỉ: " className="gutter-item">
            <Input name="" placeholder="Nhập serial chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item name="" label="Chỉ số đầu: " className="gutter-item">
            <Input name="" placeholder="Nhập chỉ số đầu" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={6}>
          <Form.Item name="" label="Chỉ số cuối: ">
            <Input name="" placeholder="Nhập chỉ số cuối" />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày lắp đặt + Lý do hủy */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày lắp đặt: " className="gutter-item">
            <Input name="" placeholder="Nhập ngày lắp đặt" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do hủy: ">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do hủy"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày bắt đầu + Ngày kết thúc */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày bắt đầu: " className="gutter-item">
            <DatePicker
              name=""
              placeholder="Chọn ngày bắt đầu"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày kết thúc: " className="gutter-item">
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
          <Form.Item name="" label="Kiểu đồng hồ: " className="gutter-item">
            <Input name="" placeholder="Nhập Kiểu đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính: ">
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      {/* Mã đồng hồ + Seri đồng hồ */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã đồng hồ: " className="gutter-item">
            <Input name="" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial đồng hồ: ">
            <Input name="" placeholder="Nhập seri đồng hồ" />
          </Form.Item>
        </Col>
      </Row>

      {/* Serial chỉ + Chỉ số đầu */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Serial chỉ: " className="gutter-item">
            <Input name="" placeholder="Nhập serial chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Chỉ số đầu: ">
            <Input name="" placeholder="Nhập chỉ số đầu" />
          </Form.Item>
        </Col>
      </Row>

      {/* Ngày sử dụng + Ngày kiểm định */}
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày sử dụng: " className="gutter-item">
            <DatePicker
              name=""
              placeholder="Chọn ngày sử dụng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày kiểm định: " className="gutter-item">
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
          <Form.Item name="" label="Hiệu lực KĐ: " className="gutter-item">
            <DatePicker
              name=""
              placeholder="Chọn hiệu lực KĐ"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người thay: ">
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
          <Form.Item name="" label="Lý do thay: " className="gutter-item">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "LD 1" }]}
              placeholder="Chọn lý do thay"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hình thức xử lý: ">
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
          <Form.Item name="" label="Ghi chú: " className="gutter-item">
            <Input name="" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Trạng thái ĐH lắp: ">
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
        <Button htmlType="submit" type="primary">
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

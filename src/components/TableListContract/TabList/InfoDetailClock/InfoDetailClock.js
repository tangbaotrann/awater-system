import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

function InfoDetailClock() {
  return (
    <>
      <Row>
        {/* Đơn vị HC */}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="" label="Đơn vị HC: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Đơn vị 1" },
                { value: "2", label: "Đơn vị 2" },
              ]}
              placeholder="Chọn đơn vị"
            />
          </Form.Item>
        </Col>

        {/*  */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <Form.Item name="">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Đơn vị 1" },
                { value: "2", label: "Đơn vị 2" },
              ]}
              placeholder="Chọn đơn vị"
            />
          </Form.Item>
        </Col>

        {/*  */}
        <Col xs={24} sm={24} md={12} lg={7}>
          <Form.Item name="">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Đơn vị 1" },
                { value: "2", label: "Đơn vị 2" },
              ]}
              placeholder="Chọn đơn vị"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Vùng */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Vùng: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Vùng 1" },
                { value: "2", label: "Vùng 2" },
              ]}
              placeholder="Chọn vùng"
            />
          </Form.Item>
        </Col>

        {/* Khu vực */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Khu vực: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Khu vực 1" },
                { value: "2", label: "Khu vực 2" },
              ]}
              placeholder="Chọn khu vực"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nhân viên */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Nhân viên: (*)">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Nhân viên 1" },
                { value: "2", label: "Nhân viên 2" },
              ]}
              placeholder="Chọn nhân viên"
            />
          </Form.Item>
        </Col>

        {/* Tuyến đọc */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Tuyến đọc: (*)">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Tuyến đọc 1" },
                { value: "2", label: "Tuyến đọc 2" },
              ]}
              placeholder="Chọn tuyến đọc"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Phạm vi */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Phạm vi: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Phạm vi 1" },
                { value: "2", label: "Phạm vi 2" },
              ]}
              placeholder="Chọn phạm vi"
            />
          </Form.Item>
        </Col>

        {/* Mã */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Mã: (*)">
            <Input name="" placeholder="Nhập mã" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Đồng hồ block */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Đồng hồ block: ">
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Đồng hồ block 1" },
                { value: "2", label: "Đồng hồ block 2" },
              ]}
              placeholder="Chọn đồng hồ block"
            />
          </Form.Item>
        </Col>

        {/*  */}
        <Col xs={24} sm={24} md={12} lg={5} className="gutter-item">
          <Form.Item name="" label="Là đồng hồ phụ: ">
            <Button type="primary"></Button>
          </Form.Item>
        </Col>

        {/* Thứ tự */}
        <Col xs={24} sm={24} md={12} lg={5} className="gutter-item">
          <Form.Item name="" label="Thứ tự: ">
            <Input placeholder="Nhập thứ tự" />
          </Form.Item>
        </Col>

        {/* button (Thứ tự) */}
        <Col xs={24} sm={24} md={12} lg={1} className="gutter-item">
          <Button type="primary">
            <RedoOutlined />
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Seri */}
        <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
          <Form.Item name="" label="Seri: ">
            <Input name="" placeholder="Nhập seri" />
          </Form.Item>
        </Col>

        {/* Checkbox (Seri) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Form.Item name="">
            <Checkbox />
          </Form.Item>
        </Col>

        {/* Chỉ số bắt đầu */}
        <Col xs={24} sm={24} md={12} lg={7}>
          <Form.Item name="num_start" label="Chỉ số bắt đầu: ">
            <InputNumber name="num_start" placeholder="Số đầu" />
          </Form.Item>
        </Col>

        {/* Chỉ số cuối */}
        <Col xs={24} sm={24} md={12} lg={4}>
          <Form.Item name="num_end" label="Cuối: ">
            <InputNumber name="num_end" placeholder="Số cuối" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Seri chì */}
        <Col xs={24} sm={24} md={12} lg={6} className="gutter-item">
          <Form.Item name="" label="Seri chì: ">
            <Input name="" placeholder="Nhập seri chì" />
          </Form.Item>
        </Col>

        {/* Ngày lắp đặt */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          className="gutter-item gutter-item-date-picker"
        >
          <Form.Item name="" label="Ngày lắp đặt: ">
            <DatePicker name="" placeholder="Chọn ngày lắp đặt" />
          </Form.Item>
        </Col>

        {/* Ngày sử dụng */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <Form.Item name="" label="Ngày sử dụng: ">
            <DatePicker
              name=""
              placeholder="Chọn ngày sử dụng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={12} lg={22} className="gutter-item">
          <Form.Item name="" label="Địa chỉ (*)">
            <Input name="" placeholder="Nhập địa chỉ" />
          </Form.Item>
        </Col>

        {/* Checkbox (Seri) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Form.Item name="">
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Trạng thái */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Trạng thái">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Đang sử dụng" }]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>
        </Col>

        {/* Lý do hủy */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Lý do hủy">
            <Input name="" placeholder="Nhập lý do hủy" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nước sản xuất */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Nước SX">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Nước 1" }]}
              placeholder="Chọn nước"
            />
          </Form.Item>
        </Col>

        {/* Hãng sản xuất */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Hãng SX">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Nước 1" }]}
              placeholder="Chọn hãng"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Kiểu đồng hồ */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Kiểu đồng hồ">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Kiểu 1" }]}
              placeholder="Chọn kiểu đồng hồ"
            />
          </Form.Item>
        </Col>

        {/* Đường kính */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Đường kính">
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Hộp bảo vệ */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Hộp bảo vệ">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hộp 1" }]}
              placeholder="Chọn hộp bảo vệ"
            />
          </Form.Item>
        </Col>

        {/* Vị trí lắt đặt */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Vị trí lắt đặt">
            <Input name="" placeholder="Nhập vị trí lắt đặt" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default InfoDetailClock;

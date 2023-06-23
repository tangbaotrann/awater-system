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
import { RedoOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

function InfoDetailClock() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  return (
    <div className="container-detail-clock">
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
            <Checkbox name="" />
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
            <InputNumber
              name="num_start"
              placeholder="Số đầu"
              className={isTabletOrMobile ? "fix-input-number-mobile" : ""}
            />
          </Form.Item>
        </Col>

        {/* Chỉ số cuối */}
        <Col xs={24} sm={24} md={12} lg={4}>
          <Form.Item name="num_end" label="Cuối: ">
            <InputNumber
              name="num_end"
              placeholder="Số cuối"
              className={isTabletOrMobile ? "fix-input-number-mobile" : ""}
            />
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
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className={isTabletOrMobile ? "fix-date-picker-mobile" : ""}
            />
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

        {/* Vị trí lắp đặt */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Vị trí lắp đặt">
            <Input name="" placeholder="Nhập vị trí lắp đặt" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày kiểm định */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Ngày kiểm định">
            <DatePicker
              name=""
              placeholder="Chọn ngày kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Hiệu lực kiểm định */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Hiệu lực KĐ">
            <DatePicker
              name=""
              placeholder="Chọn Hiệu lực kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Lý do */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Lý do">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Lý do 1" }]}
              placeholder="Chọn lý do"
            />
          </Form.Item>
        </Col>

        {/* Van một chiều */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Van một chiều">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Van một chiều 1" }]}
              placeholder="Chọn van một chiều"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số tem */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Số tem">
            <Input name="" placeholder="Nhập số tem" />
          </Form.Item>
        </Col>

        {/* Số phiếu thay */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Số phiếu thay">
            <Input name="" placeholder="Nhập số phiếu thay" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Hình thức XL */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Hình thức XL">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hình thức XL 1" }]}
              placeholder="Chọn hình thức XL"
            />
          </Form.Item>
        </Col>

        {/* Lý do thay */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Lý do thay">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Lý do thay 1" }]}
              placeholder="Chọn lý do thay"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Mã ĐH thay */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Mã ĐH thay">
            <Input name="" placeholder="Nhập mã ĐH thay" />
          </Form.Item>
        </Col>

        {/* Người thay */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Người thay">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Người thay 1" }]}
              placeholder="Chọn người thay"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Kinh độ */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Kinh độ">
            <Input name="" placeholder="Nhập kinh độ" />
          </Form.Item>
        </Col>

        {/* Vĩ độ */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Vĩ độ">
            <Input name="" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Loại KM */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Loại KM">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Loại KM 1" }]}
              placeholder="Chọn loại KM"
            />
          </Form.Item>
        </Col>

        {/* Khuyến mãi */}
        <Col xs={24} sm={24} md={12} lg={9}>
          <Form.Item name="" label="Khuyến mãi">
            <InputNumber
              name=""
              placeholder="Chọn số"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* text */}
        <Col xs={24} sm={24} md={12} lg={2} style={{ marginLeft: "2px" }}>
          (m3)
        </Col>
      </Row>

      <Row>
        {/* Trạng thái ĐH lấp */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="" label="Trạng thái ĐH lấp">
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Trạng thái ĐH lấp 1" }]}
              placeholder="Chọn trạng thái ĐH lấp"
            />
          </Form.Item>
        </Col>

        {/* Ống dẫn */}
        <Col xs={24} sm={24} md={12} lg={11}>
          <Form.Item name="" label="Ống dẫn">
            <Input name="" placeholder="Nhập ống dẫn" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Đai khởi thủy */}
        <Col xs={24} sm={24} md={12} lg={24}>
          <Form.Item name="" label="Đai khởi thủy">
            <Input name="" placeholder="Nhập đai khởi thủy" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoDetailClock;

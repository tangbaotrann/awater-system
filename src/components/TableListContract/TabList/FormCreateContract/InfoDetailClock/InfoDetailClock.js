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

function InfoDetailClock() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 7 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  return (
    <div className="container-detail-clock">
      <Row>
        {/* Đơn vị HC */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đơn vị HC" {...formItemLayout}>
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

        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="ĐV" {...formItemLayout}>
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
        {/*  */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đơn vị" {...formItemLayout}>
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

        {/* Vùng */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Vùng: " {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Khu vực */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Khu vực: " {...formItemLayout}>
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

        {/* Nhân viên */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Nhân viên (*)" {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Tuyến đọc */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Tuyến đọc (*)" {...formItemLayout}>
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

        {/* Phạm vi */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Phạm vi" {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Mã */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã (*)" {...formItemLayout}>
            <Input name="" placeholder="Nhập mã" />
          </Form.Item>
        </Col>

        {/* Đồng hồ block */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đồng hồ block" {...formItemLayout}>
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
      </Row>

      <Row>
        {/* Là đồng hồ phụ */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Là đồng hồ phụ" {...formItemLayout}>
            <Checkbox name="" />
          </Form.Item>
        </Col>

        {/* Thứ tự + button (Thứ tự) */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Thứ tự: " {...formItemLayout}>
            <div className="container-label-input">
              <Input placeholder="Nhập thứ tự" className="space-right-10" />
              <Button type="primary" className="custom-btn-reset-form-contract">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Seri + Checkbox (Seri) */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Seri" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name=""
                placeholder="Nhập seri"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col>

        {/* Chỉ số bắt đầu */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item
            name="num_start"
            label="Chỉ số bắt đầu"
            {...formItemLayout}
          >
            <InputNumber
              name="num_start"
              placeholder="Số đầu"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Chỉ số cuối */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="num_end" label="Cuối" {...formItemLayout}>
            <InputNumber
              name="num_end"
              placeholder="Số cuối"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Seri chì */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Seri chì" {...formItemLayout}>
            <Input name="" placeholder="Nhập seri chì" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày lắp đặt" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Ngày sử dụng */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày sử dụng" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Địa chỉ (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name=""
                placeholder="Nhập địa chỉ"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Trạng thái */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Trạng thái" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Đang sử dụng" }]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>
        </Col>

        {/* Lý do hủy */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do hủy" {...formItemLayout}>
            <Input name="" placeholder="Nhập lý do hủy" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nước sản xuất */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Nước SX" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Nước 1" }]}
              placeholder="Chọn nước"
            />
          </Form.Item>
        </Col>

        {/* Hãng sản xuất */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hãng SX" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Kiểu đồng hồ" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Kiểu 1" }]}
              placeholder="Chọn kiểu đồng hồ"
            />
          </Form.Item>
        </Col>

        {/* Đường kính */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đường kính" {...formItemLayout}>
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Hộp bảo vệ */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hộp bảo vệ" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hộp 1" }]}
              placeholder="Chọn hộp bảo vệ"
            />
          </Form.Item>
        </Col>

        {/* Vị trí lắp đặt */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Vị trí lắp đặt" {...formItemLayout}>
            <Input name="" placeholder="Nhập vị trí lắp đặt" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày kiểm định */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ngày kiểm định" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>

        {/* Hiệu lực kiểm định */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hiệu lực KĐ" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Lý do 1" }]}
              placeholder="Chọn lý do"
            />
          </Form.Item>
        </Col>

        {/* Van một chiều */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Van một chiều" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Số tem" {...formItemLayout}>
            <Input name="" placeholder="Nhập số tem" />
          </Form.Item>
        </Col>

        {/* Số phiếu thay */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Số phiếu thay" {...formItemLayout}>
            <Input name="" placeholder="Nhập số phiếu thay" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Hình thức XL */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Hình thức XL" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hình thức XL 1" }]}
              placeholder="Chọn hình thức XL"
            />
          </Form.Item>
        </Col>

        {/* Lý do thay */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Lý do thay" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Mã ĐH thay" {...formItemLayout}>
            <Input name="" placeholder="Nhập mã ĐH thay" />
          </Form.Item>
        </Col>

        {/* Người thay */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Người thay" {...formItemLayout}>
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
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Kinh độ" {...formItemLayout}>
            <Input name="" placeholder="Nhập kinh độ" />
          </Form.Item>
        </Col>

        {/* Vĩ độ */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Vĩ độ" {...formItemLayout}>
            <Input name="" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Loại KM */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Loại KM" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Loại KM 1" }]}
              placeholder="Chọn loại KM"
            />
          </Form.Item>
        </Col>

        {/* Khuyến mãi + text */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Khuyến mãi" {...formItemLayout}>
            <div className="container-label-input">
              <InputNumber
                name=""
                placeholder="Chọn số"
                style={{ width: "100%" }}
              />
              <span style={{ marginLeft: "2px" }}>(m3)</span>
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Trạng thái ĐH lấp */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Trạng thái ĐH" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Trạng thái ĐH lấp 1" }]}
              placeholder="Chọn trạng thái ĐH lấp"
            />
          </Form.Item>
        </Col>

        {/* Ống dẫn */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Ống dẫn" {...formItemLayout}>
            <Input name="" placeholder="Nhập ống dẫn" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Đai khởi thủy */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <Form.Item name="" label="Đai khởi thủy" {...formItemLayout}>
            <Input name="" placeholder="Nhập đai khởi thủy" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoDetailClock;

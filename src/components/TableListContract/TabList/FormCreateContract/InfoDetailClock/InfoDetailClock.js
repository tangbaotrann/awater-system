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
      sm: { span: 4 },
      md: { span: 10 },
      lg: { span: 6 },
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
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="DonViHC" label="Đơn vị HC" {...formItemLayout}>
            <Select
              fieldNames="DonViHC"
              options={[
                { value: "Bắc Giang", label: "Bắc Giang" },
                { value: "Thái Bình", label: "Thái Bình" },
                { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
              ]}
              placeholder="Chọn đơn vị hành chính"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label=" " {...formItemLayout}>
            <Select
              fieldNames=""
              options={[
                { value: "Hiệp hòa", label: "Hiệp hòa" },
                { value: "Huyện Bảo Yên", label: "Huyện Bảo Yên" },
                { value: "Tiền Hải", label: "Tiền Hải" },
              ]}
              placeholder="Chọn huyện"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label=" " {...formItemLayout}>
            <Select
              fieldNames=""
              options={[
                { value: "Nam Chính", label: "Nam Chính" },
                { value: "Tây Tiến", label: "Tây Tiến" },
                { value: "Vũ Lăng", label: "Vũ Lăng" },
                { value: "Xã Bảo Hà", label: "Xã Bảo Hà" },
                { value: "Xã Lương Phong", label: "Xã Lương Phong" },
                { value: "Xã Đoan Bái", label: "Xã Đoan Bái" },
                { value: "Xã Đông Lỗ", label: "Xã Đông Lỗ" },
              ]}
              placeholder="Chọn xã"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Vùng */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="PhamVi" label="PhamVi" {...formItemLayout}>
            <Select
              fieldNames="PhamVi"
              options={[
                { value: "1", label: "baovinh - Bảo Vinh" },
                { value: "2", label: "hungdao - Hưng Đạo_TB" },
                { value: "3", label: "lienha - Liên Hà" },
                { value: "4", label: "lamsan - Lâm Sản" },
                { value: "5", label: "leloiQ - Lê Lợi_Quang_TB" },
                { value: "6", label: "leloiT - Lê Lợi_Tuấn_TB" },
                { value: "7", label: "nguyetlu - Nguyệt Lũ_TB" },
                { value: "8", label: "thuongkiet - Thường Kiệt_TB" },
                { value: "9", label: "trungvuong - Trung Vương_TB" },
                { value: "10", label: "Tuyến 1 - Đông Lỗ - Tuyến 1 - Đông Lỗ" },
                { value: "11", label: "tanan - Tân An" },
                { value: "12", label: "tanlap - Tân Lập_TB" },
                { value: "13", label: "Taytien - Tây Tiến" },
                { value: "14", label: "Vulang - Vũ Lăng" },
                { value: "15", label: "dongcao1 - Đông Cao 1_TB" },
                { value: "16", label: "dongcao2T - Đông Cao 2_Tường_TB" },
                { value: "17", label: "dongcao2D - Đông Cao 2_Đảm_TB" },
              ]}
              placeholder="Chọn vùng"
            />
          </Form.Item>
        </Col>

        {/* Khu vực */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Khu vực: " {...formItemLayout} hidden>
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Bảo Vinh" },
                { value: "2", label: "Lâm Sản" },
                { value: "3", label: "Liên Hà 2" },
                { value: "4", label: "Liên Hà 3" },
                { value: "5", label: "Liên Hà 4" },
                { value: "6", label: "Liên Hà 5" },
                { value: "7", label: "Tân An 1" },
                { value: "8", label: "Tân An 2" },
                { value: "9", label: "Tây Tiến_TB" },
                { value: "10", label: "Vũ Lăng_TB" },
              ]}
              placeholder="Chọn khu vực"
            />
          </Form.Item>
        </Col> */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="DongHoChaId" label="ĐH block" {...formItemLayout}>
            <Select
              fieldNames="DongHoChaId"
              options={[
                { value: "1", label: "Đồng hồ block 1" },
                { value: "2", label: "Đồng hồ block 2" },
              ]}
              placeholder="Chọn đồng hồ block"
            />
          </Form.Item>
        </Col>

        {/* Nhân viên */}
        <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item
            name="NguoiQuanLyId"
            label="Nhân viên (*)"
            {...formItemLayout}
          >
            <Select
              fieldNames="NguoiQuanLyId"
              options={[
                { value: "1", label: "Duy Thành" },
                { value: "2", label: "Nguyễn Văn Hiệp" },
                { value: "3", label: "Trịnh Ngọc Tuấn" },
              ]}
              placeholder="Chọn nhân viên"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        {/* Là đồng hồ phụ */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Chọn" {...formItemLayout}>
            <Checkbox name="" /> Là đồng hồ phụ
          </Form.Item>
        </Col> */}

        {/* Ống dẫn */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Ống dẫn" {...formItemLayout}>
            <Input name="" placeholder="Nhập ống dẫn" />
          </Form.Item>
        </Col> */}

        {/* Thứ tự + button (Thứ tự) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="SoThuTu" label="Thứ tự: " {...formItemLayout}>
            <div className="container-label-input">
              <Input placeholder="Nhập thứ tự" className="space-right-10" />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Trạng thái */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="TrangThaiSuDung"
            label="Trạng thái"
            {...formItemLayout}
          >
            <Select
              fieldNames="TrangThaiSuDung"
              options={[{ value: "1", label: "Đang sử dụng" }]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>
        </Col>

        {/* Lý do hủy */}
        <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="LyDoHuy" label="Lý do hủy" {...formItemLayout}>
            <Select
              fieldNames="LyDoHuy"
              placeholder="Chọn lý do hủy"
              options={[{ value: "1", label: "LD 1" }]}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Seri + Checkbox (Seri) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="SeriDongHo" label="Seri" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="SeriDongHo"
                placeholder="Nhập seri"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col>

        {/* Chỉ số bắt đầu */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="ChiSoDau" label="CS đầu" {...formItemLayout}>
            <InputNumber
              name="ChiSoDau"
              placeholder="Chỉ số đầu"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Chỉ số cuối */}
        <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="ChiSoCuoi" label="CS cuối" {...formItemLayout}>
            <InputNumber
              name="ChiSoCuoi"
              placeholder="Chỉ số cuối"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày lắp đặt */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Ngày lắp đặt" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}

        {/* Ngày sử dụng */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Ngày SD" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày sử dụng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Địa chỉ */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
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
        </Col> */}

        {/* Đai khởi thủy */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Đai khởi thủy" {...formItemLayout}>
            <Input name="" placeholder="Nhập đai khởi thủy" />
          </Form.Item>
        </Col> */}

        {/* Trạng thái ĐH lấp */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Trạng thái ĐH" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Trạng thái ĐH lấp 1" }]}
              placeholder="Chọn trạng thái ĐH lấp"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Nước sản xuất */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Nước SX" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Nước 1" }]}
              placeholder="Chọn nước"
            />
          </Form.Item>
        </Col> */}

        {/* Hãng sản xuất */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Hãng SX" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Nước 1" }]}
              placeholder="Chọn hãng"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Kiểu đồng hồ */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Kiểu đồng hồ" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Kiểu 1" }]}
              placeholder="Chọn kiểu đồng hồ"
            />
          </Form.Item>
        </Col> */}

        {/* Đường kính */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Đường kính" {...formItemLayout}>
            <Input name="" placeholder="Nhập đường kính" />
          </Form.Item>
        </Col> */}

        {/* Hộp bảo vệ */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Hộp bảo vệ" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hộp 1" }]}
              placeholder="Chọn hộp bảo vệ"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Vị trí lắp đặt */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Vị trí lắp đặt" {...formItemLayout}>
            <Input name="" placeholder="Nhập vị trí lắp đặt" />
          </Form.Item>
        </Col> */}

        {/* Ngày kiểm định */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Ngày KĐ" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}

        {/* Hiệu lực kiểm định */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Hiệu lực KĐ" {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn Hiệu lực kiểm định"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Lý do */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Lý do" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Lý do 1" }]}
              placeholder="Chọn lý do"
            />
          </Form.Item>
        </Col> */}

        {/* Van một chiều */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Van một chiều" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Van một chiều 1" }]}
              placeholder="Chọn van một chiều"
            />
          </Form.Item>
        </Col> */}

        {/* Số tem */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Số tem" {...formItemLayout}>
            <Input name="" placeholder="Nhập số tem" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Số phiếu thay */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Số phiếu thay" {...formItemLayout}>
            <Input name="" placeholder="Nhập số phiếu thay" />
          </Form.Item>
        </Col> */}

        {/* Hình thức XL */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Hình thức XL" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Hình thức XL 1" }]}
              placeholder="Chọn hình thức XL"
            />
          </Form.Item>
        </Col> */}

        {/* Lý do thay */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Lý do thay" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Lý do thay 1" }]}
              placeholder="Chọn lý do thay"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Mã ĐH thay */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Mã ĐH thay" {...formItemLayout}>
            <Input name="" placeholder="Nhập mã ĐH thay" />
          </Form.Item>
        </Col> */}

        {/* Người thay */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Người thay" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Người thay 1" }]}
              placeholder="Chọn người thay"
            />
          </Form.Item>
        </Col> */}

        {/* Loại KM */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Loại KM" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Loại KM 1" }]}
              placeholder="Chọn loại KM"
            />
          </Form.Item>
        </Col> */}

        {/* Kinh độ */}
        {/* <Col xs={24} sm={24} md={7} lg={7}>
          <Form.Item name="" label="Kinh độ" {...formItemLayout}>
            <Input name="" placeholder="Nhập kinh độ" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Vĩ độ */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Vĩ độ" {...formItemLayout}>
            <Input name="" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col> */}

        {/* Loại KM */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Loại KM" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Loại KM 1" }]}
              placeholder="Chọn loại KM"
            />
          </Form.Item>
        </Col> */}

        {/* Khuyến mãi + text */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
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
        </Col> */}
      </Row>

      <Row>
        {/* Trạng thái ĐH lấp */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="" label="Trạng thái ĐH" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "Trạng thái ĐH lấp 1" }]}
              placeholder="Chọn trạng thái ĐH lấp"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Seri chì */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="SeriChi" label="Seri chì" {...formItemLayout}>
            <Input name="SeriChi" placeholder="Nhập seri chì" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="Id" label="Id" {...formItemLayout}>
            <Input name="Id" placeholder="Nhập id" />
          </Form.Item>
        </Col>
        
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="HopDongId" label="Hợp Đồng Id" {...formItemLayout}>
            <Input name="HopDongId" placeholder="Nhập id" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoDetailClock;

import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { RedoOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { getAllNguoiDung } from "../../../../../redux/slices/NguoiDungSlice/nguoidungSlice";
import {
  fetchApiAllReadingSelector,
  fetchApiGetAllManagerSelector,
} from "../../../../../redux/selector";

function InfoDetailClock() {
  const dispatch = useDispatch();

  const nameManagers = useSelector(fetchApiGetAllManagerSelector);
  const readings = useSelector(fetchApiAllReadingSelector);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
      md: { span: 10 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  const handleGetNameManager = () => {
    dispatch(getAllNguoiDung());
  };

  return (
    <div className="container-detail-clock">
      <Row>
        {/* Id */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="keyIdOfClockDetail"
            label="Mã đồng hồ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã đồng hồ.",
              },
            ]}
          >
            <Input name="keyIdOfClockDetail" placeholder="Nhập mã đồng hồ" />
          </Form.Item>
        </Col>

        {/* Đơn vị HC (Xã) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="donViHCXa"
            label="ĐVHC ở xã"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn đơn vị HC ở xã.",
              },
            ]}
          >
            <Select
              fieldNames="donViHCXa"
              options={[
                { value: "Bắc Giang", label: "Bắc Giang" },
                { value: "Thái Bình", label: "Thái Bình" },
                { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
              ]}
              placeholder="Chọn đơn vị hành chính ở xã"
            />
          </Form.Item>
        </Col>

        {/* Đơn vị HC (Huyện) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="donViHCHuyen"
            label="ĐVHC ở huyện"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn đơn vị HC ở huyện.",
              },
            ]}
          >
            <Select
              fieldNames="donViHCHuyen"
              options={[
                { value: "Bắc Giang", label: "Bắc Giang" },
                { value: "Thái Bình", label: "Thái Bình" },
                { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
              ]}
              placeholder="Chọn đơn vị hành chính ở huyện"
            />
          </Form.Item>
        </Col>

        {/* Đơn vị HC (Tỉnh) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="donViHCTinh"
            label="ĐVHC ở tỉnh"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn đơn vị HC ở tỉnh.",
              },
            ]}
          >
            <Select
              fieldNames="donViHCTinh"
              options={[
                { value: "Bắc Giang", label: "Bắc Giang" },
                { value: "Thái Bình", label: "Thái Bình" },
                { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
              ]}
              placeholder="Chọn đơn vị hành chính ở tỉnh"
            />
          </Form.Item>
        </Col>

        {/* Vùng -> load from api */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="phamVi"
            label="Phạm vi"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn phạm vi.",
              },
            ]}
          >
            <Select
              fieldNames="phamVi"
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

        {/* Khu vực -> load from api */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="khuVuc"
            label="Khu vực"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn khu vực.",
              },
            ]}
          >
            <Select
              fieldNames="khuVuc"
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
              placeholder="Chọn khu vực"
            />
          </Form.Item>
        </Col>

        {/* Người quản lý id */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="nguoiQuanLyId"
            label="Người QL"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn người quản lý.",
              },
            ]}
          >
            <Select
              fieldNames="nguoiQuanLyId"
              options={
                nameManagers?.length <= 0
                  ? []
                  : nameManagers.map((_nameManager) => ({
                      label: _nameManager.dangNhapId,
                      value: _nameManager.id,
                    }))
              }
              onClick={handleGetNameManager}
              placeholder="Chọn người quản lý"
            />
          </Form.Item>
        </Col>

        {/* Tuyến đọc id (load from api) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="tuyenDocId"
            label="Tuyến đọc"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn tuyến đọc.",
              },
            ]}
          >
            <Select
              fieldNames="tuyenDocId"
              options={
                readings?.length <= 0
                  ? []
                  : readings.map((_reading) => ({
                      label: _reading.tenTuyen,
                      value: _reading.id,
                    }))
              }
              placeholder="Chọn tuyến đọc"
            />
          </Form.Item>
        </Col>

        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="ngayLapDatOfDetailClock"
            label="Ngày lắp đặt"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày lắp đặt.",
              },
            ]}
          >
            <DatePicker
              name="ngayLapDatOfDetailClock"
              placeholder="Nhập ngày lắp đặt"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Ngày sử dụng */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="ngaySDOfDetailClock"
            label="Ngày sử dụng"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày sử dụng.",
              },
            ]}
          >
            <DatePicker
              name="ngaySDOfDetailClock"
              placeholder="Chọn ngày sử dụng"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="diachi"
            label="Địa chỉ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập địa chỉ.",
              },
            ]}
          >
            <Input
              name="diachi"
              placeholder="Nhập địa chỉ"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Nước sản xuất */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="nuocSX"
            label="Nước sản xuất"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập nước sản xuất.",
              },
            ]}
          >
            <Input
              name="nuocSX"
              placeholder="Nhập nước sản xuất"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Hãng sản xuất */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="hangSX"
            label="Hãng sản xuất"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập hãng sản xuất.",
              },
            ]}
          >
            <Input
              name="hangSX"
              placeholder="Nhập hãng sản xuất"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Loại đồng hồ */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="loaiDongHo"
            label="Loại ĐH"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập loại đồng hồ.",
              },
            ]}
          >
            <Input name="loaiDongHo" placeholder="Loại đồng hồ" />
          </Form.Item>
        </Col>

        {/* Đường kính */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="duongKinh"
            label="Đường kính"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập đường kính.",
              },
            ]}
          >
            <Input
              name="duongKinh"
              placeholder="Nhập đường kính"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Hộp bảo vệ */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="hopBaoVe"
            label="Hộp bảo vệ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn hộp bảo vệ.",
              },
            ]}
          >
            <Select
              fieldNames="hopBaoVe"
              options={[
                { value: "beTong", label: "Bê tong" },
                { value: "gangDoi", label: "Gang đôi" },
                { value: "gangDon", label: "Gang đơn" },
                { value: "inox", label: "Inox" },
                { value: "ton", label: "Tôn" },
                { value: "khac", label: "Khác" },
              ]}
              placeholder="Chọn hộp bảo vệ"
            />
          </Form.Item>
        </Col>

        {/* Vị trí lắp đặt */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="viTriLapDat"
            label="Vị trí lắp đặt"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập vị trí lắp đặt.",
              },
            ]}
          >
            <Input
              name="viTriLapDat"
              placeholder="Nhập vị trí lắp đặt"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Ngày kiểm định */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="ngayKiemDinh"
            label="Ngày KĐ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày có kiểm định.",
              },
            ]}
          >
            <DatePicker
              name="ngayKiemDinh"
              placeholder="Chọn ngày có kiểm định"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Hiệu lực kiểm định */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="hieuLucKiemDinh"
            label="Hiệu lực KĐ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn hiệu lực kiểm định.",
              },
            ]}
          >
            <DatePicker
              name="hieuLucKiemDinh"
              placeholder="Chọn hiệu lực kiểm định"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Lý do kiểm định */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="lyDoKiemDinh"
            label="Lý do KĐ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn lý do kiểm định.",
              },
            ]}
          >
            <Select
              fieldNames="lyDoKiemDinh"
              options={[
                { value: "KhachHang", label: "Khách hàng yêu cầu" },
                { value: "CongTy", label: "Công ty yêu cầu" },
                { value: "Lich", label: "Lịch kiểm định" },
              ]}
              placeholder="Chọn lý do kiểm định"
            />
          </Form.Item>
        </Col>

        {/* Van 1 chiều */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="vanMotChieu"
            label="Van một chiều"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập van một chiều.",
              },
            ]}
          >
            <Input
              name="vanMotChieu"
              placeholder="Nhập van một chiều"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Số tem */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="soTem"
            label="Số tem"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số tem.",
              },
            ]}
          >
            <Input
              name="soTem"
              placeholder="Nhập số tem"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Số phiếu thay */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="soPhieuThay"
            label="Số phiếu thay"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số phiếu thay.",
              },
            ]}
          >
            <Input
              name="soPhieuThay"
              placeholder="Nhập số phiếu thay"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Hình thức xử lý */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="hinhThucXuLy"
            label="Hình thức xử lý"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập hình thức xử lý.",
              },
            ]}
          >
            <Input
              name="hinhThucXuLy"
              placeholder="Nhập hình thức xử lý"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Lý do thay */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="lyDoThay"
            label="Lý do thay"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn lý do thay.",
              },
            ]}
          >
            <Select
              fieldNames="lyDoThay"
              placeholder="Chọn lý do thay"
              options={[{ value: "1", label: "LD 1" }]}
            />
          </Form.Item>
        </Col>

        {/* Lý do hủy */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="lyDoHuy"
            label="Lý do hủy"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn lý do hủy.",
              },
            ]}
          >
            <Select
              fieldNames="lyDoHuy"
              placeholder="Chọn lý do hủy"
              options={[{ value: "1", label: "LD 1" }]}
            />
          </Form.Item>
        </Col>

        {/* Seri + Checkbox (Seri) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="seriDongHo"
            label="Seri"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập seri đồng hồ.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <Input
              name="seriDongHo"
              placeholder="Nhập seri"
              className="space-right-10"
            />
            {/* <Checkbox /> */}
            {/* </div> */}
          </Form.Item>
        </Col>

        {/* Seri chì */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="seriChi"
            label="Seri chì"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập seri chì.",
              },
            ]}
          >
            <Input name="seriChi" placeholder="Nhập seri chì" />
          </Form.Item>
        </Col>

        {/* Trạng thái */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="trangThaiSuDung"
            label="Trạng thái"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn trạng thái sử dụng.",
              },
            ]}
          >
            <Select
              fieldNames="trangThaiSuDung"
              options={[{ value: "1", label: "Đang sử dụng" }]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>
        </Col>

        {/* Thứ tự + button (Thứ tự) */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="soThuTu"
            label="Thứ tự: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số thứ tự.",
              },
            ]}
          >
            <div className="container-label-input">
              <Input
                name="soThuTu"
                placeholder="Nhập thứ tự"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Chỉ số bắt đầu */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="chiSoDau"
            label="CS đầu"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập chỉ số đầu.",
              },
            ]}
          >
            <InputNumber
              name="chiSoDau"
              placeholder="Chỉ số đầu"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Chỉ số cuối */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="chiSoCuoi"
            label="CS cuối"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập chỉ số cuối.",
              },
            ]}
          >
            <InputNumber
              name="chiSoCuoi"
              placeholder="Chỉ số cuối"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Đồng hồ block */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="dongHoChaId" label="ĐH block" {...formItemLayout}>
            <Select
              fieldNames="dongHoChaId"
              options={[
                { value: "1", label: "Đồng hồ block 1" },
                { value: "2", label: "Đồng hồ block 2" },
              ]}
              placeholder="Chọn đồng hồ block"
            />
          </Form.Item>
        </Col>

        {/* Mã ĐH thay */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="maDHThay" label="Mã ĐH thay" {...formItemLayout}>
            <Input name="maDHThay" placeholder="Nhập mã đồng hồ thay" />
          </Form.Item>
        </Col>

        {/* Người thay */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="nguoiThay" label="Người thay" {...formItemLayout}>
            <Select
              fieldNames="nguoiThay"
              options={[{ value: "1", label: "Người thay 1" }]}
              placeholder="Chọn người thay"
            />
          </Form.Item>
        </Col>

        {/* Loại khuyến mãi */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="loaiKhuyenMai" label="Loại KM" {...formItemLayout}>
            <Select
              fieldNames="loaiKhuyenMai"
              options={[
                { value: "1", label: "Trừ dần theo hóa đơn" },
                { value: "2", label: "Tháng nào cũng được khuyến mãi" },
                { value: "3", label: "Đơn giá theo %" },
                { value: "4", label: "Không khuyến mãi" },
              ]}
              placeholder="Chọn loại KM"
            />
          </Form.Item>
        </Col>

        {/* Khuyến mãi + text */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="khuyenMai" label="Khuyến mãi" {...formItemLayout}>
            <div className="container-label-input">
              <InputNumber
                name="khuyenMai"
                placeholder="Chọn số"
                style={{ width: "100%" }}
              />
              <span style={{ marginLeft: "2px" }}>(m3)</span>
            </div>
          </Form.Item>
        </Col>

        {/* Trạng thái ĐH lấp */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="trangThaiDHLap"
            label="Trạng thái ĐH"
            {...formItemLayout}
          >
            <Select
              fieldNames="trangThaiDHLap"
              options={[{ value: "1", label: "Trạng thái ĐH lấp 1" }]}
              placeholder="Chọn trạng thái ĐH lấp"
            />
          </Form.Item>
        </Col>

        {/* Ống dẫn */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="ongDan" label="Ống dẫn" {...formItemLayout}>
            <Input name="ongDan" placeholder="Nhập ống dẫn" />
          </Form.Item>
        </Col>

        {/* Đai khởi thủy */}
        <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item
            name="daiKhoiThuy"
            label="Đai khởi thủy"
            {...formItemLayout}
          >
            <Input name="daiKhoiThuy" placeholder="Nhập đai khởi thủy" />
          </Form.Item>
        </Col>

        {/* Hợp đồng id */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
          <Form.Item name="HopDongId" label="Hợp đồng Id" {...formItemLayout}>
            <Input name="HopDongId" placeholder="Nhập id" />
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
    </div>
  );
}

export default InfoDetailClock;

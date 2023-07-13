import { RedoOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";

function InfoContract() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
      md: { span: 7 },
      lg: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      lg: { span: 24 },
    },
  };

  return (
    <div className="container-info-contract">
      <Row>
        {/* Số hợp đồng + Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="Id" label="Hợp đồng Id (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="Id"
                placeholder="Nhập số hợp đồng"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Mã đăng ký + Button ... (Mã đăng ký) */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Mã đăng ký" {...formItemLayout} hidden>
            <div className="container-label-input">
              <Input
                name=""
                placeholder="Nhập mã đăng ký"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button>
            </div>
          </Form.Item>
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={10}>
          {/* KH id */}
          <Form.Item
            name="KhachHangId"
            label="Khách hàng Id (*)" 
            {...formItemLayout}
          >
            <div className="container-label-input">
              <Input
                name="KhachHangId"
                placeholder="Nhập số hợp đồng"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* ĐT giá */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="DoiTuongGiaId"
            label="ĐT giá (*)"
            {...formItemLayout}
          >
            <Select
              fieldNames="DoiTuongGiaId"
              options={[
                { value: "1", label: "SH - Sinh hoạt Lào Cai" },
                { value: "2", label: "UT - Ưu đãi LC" },
                { value: "3", label: "HC - Tổ Chức LC" },
                { value: "4", label: "SH_TB - Sinh hoạt Tây Tiến" },
                { value: "5", label: "KD - Kinh Doanh LC" },
                { value: "6", label: "SH_LV - Sinh hoạt Vũ Lăng" },
                { value: "7", label: "SH_KTT - sinh hoạt không mức tối thiểu" },
                { value: "8", label: "SH_ĐL - Nhà máy Đông Lỗ tối thiểu" },
                { value: "9", label: "SH_DL_KM - SH Khuyến mại" },
                { value: "10", label: "SH 10k - sinh hoạt Bảo Hà 10k" },
                { value: "11", label: "HC_DL - Tổ chức sự nghiệp ĐL" },
                { value: "12", label: "HDSX_DL - hoạt động sản xuất vật chất" },
                { value: "13", label: "KDDV_DL - kinh doanh dịch vụ Đông Lỗ" },
                { value: "14", label: "SH_DLCS - COVID19" },
                { value: "15", label: "KD_TT - Kinh Doanh Tây Tiến" },
                {
                  value: "16",
                  label: "HC_SN Vũ Lăng - Hành chính sự nghiệp Vũ Lăng",
                },
                {
                  value: "17",
                  label: "HC_SN Tây Tiến - Hành chính sự nghiệp Tây Tiến",
                },
                { value: "18", label: "SXVC_TB - Sản xuất vật chất Thái Bình" },
                { value: "19", label: "SH.1 - Sinh hoạt 1 giá" },
                {
                  value: "20",
                  label: "SH_VL_TT - Sinh hoạt Vũ Lăng tối thiểu",
                },
                { value: "21", label: "KCN - Khu công nghiệp Đoan Bái" },
                { value: "22", label: "SX_VL - Trại Gà" },
                { value: "23", label: "HDSX_LC - Sản xuất Lào Cai" },
              ]}
              placeholder="Chọn giá"
            />
          </Form.Item>
        </Col>

        {/* Mục đích SD */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="MucDichSuDung"
            label="Mục đích SD"
            {...formItemLayout}
          >
            <Select
              fieldNames="MucDichSuDung"
              options={[
                { value: "1", label: "Hành Chính, Sự Nghiệp" },
                { value: "2", label: "Sinh hoạt" },
                { value: "3", label: "Sinh Hoạt_TB" },
                { value: "4", label: "Sản xuất" },
              ]}
              placeholder="Chọn mục đích SD"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Khu vực TT */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="KhuVucThanhToan"
            label="Khu vực TT: "
            {...formItemLayout}
          >
            <Select
              fieldNames="KhuVucThanhToan"
              options={[
                { value: "1", label: "KV 1" },
                { value: "2", label: "KV 2" },
              ]}
              placeholder="Chọn khu vực TT"
            />
          </Form.Item>
        </Col>

        {/* Hình thức TT */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="PhuongThucThanhToanId"
            label="Hình thức TT: "
            {...formItemLayout}
          >
            <Select
              fieldNames="PhuongThucThanhToanId"
              options={[
                { value: "1", label: "1 - TM hoặc CK" },
                { value: "2", label: "2 - Chuyển khoản" },
                { value: "3", label: "3 - Tiền mặt" },
                { value: "4", label: "4 - Trừ lương" },
              ]}
              placeholder="Chọn hình thức TT"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Mã vạch */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Mã vạch: " {...formItemLayout}>
            <Input name="" placeholder="Nhập mã vạch" />
          </Form.Item>
        </Col> */}

        {/* Ngày ký hợp đồng */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Ngày ký HĐ: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày ký hợp đồng"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Ngày lắp đặt */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Ngày lắp đặt: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày lắp đặt"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}

        {/* Người lắp đặt */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Người lắp đặt: " {...formItemLayout}>
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "Văn Tèo" },
                { value: "2", label: "Tài Siêu" },
              ]}
              placeholder="Chọn người lắp đặt"
            />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Ngày NT */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Ngày NT " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày NT"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}

        {/* Tiền lắp đặt */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Tiền lắp đặt" {...formItemLayout}>
            <Input name="" placeholder="Nhập tiền lắp đặt" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Người nộp */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Người nộp" {...formItemLayout}>
            <Input name="" placeholder="Nhập người nộp" />
          </Form.Item>
        </Col> */}

        {/* Tiền đặt cọc */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Tiền đặt cọc" {...formItemLayout}>
            <Input name="" placeholder="Nhập tiền đặt cọc" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Giảm trừ theo */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Giảm trừ theo" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "tiền / hóa đơn" }]}
              placeholder="Lựa chọn"
            />
          </Form.Item>
        </Col> */}

        {/* Số tiền */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Số tiền" {...formItemLayout}>
            <Input name="" placeholder="Nhập số tiền" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Ngày đặt cọc */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="" label="Ngày đặt cọc: " {...formItemLayout}>
            <DatePicker
              name=""
              placeholder="Chọn ngày đặt cọc"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col> */}

        {/* Chứng từ */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Chứng từ" {...formItemLayout}>
            <Input name="" placeholder="Nhập chứng từ" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Cam kết sử dụng nước */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="test-chk"
            label="Cam kết SD nước"
            valuePropName="checked"
            {...formItemLayout}
          >
            <Checkbox name="test-chk" />
          </Form.Item>
        </Col> */}

        {/* Khối lượng cam kết */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="KL cam kết" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[{ value: "1", label: "CK 1" }]}
              placeholder="Lựa chọn"
            />
          </Form.Item>
        </Col> */}

        {/* Kinh độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="KinhDo" label="Kinh độ" {...formItemLayout}>
            <Input name="KinhDo" placeholder="Nhập kinh độ" />
          </Form.Item>
        </Col>

        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="Diachi" label="Địa chỉ (*)" {...formItemLayout}>
            <Input
              name="Diachi"
              placeholder="Nhập địa chỉ"
              className="space-right-10"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Vĩ độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="ViDo" label="Vĩ độ" {...formItemLayout}>
            <Input name="ViDo" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>

        {/* Ghi chú */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="GhiChu" label="Ghi chú: " {...formItemLayout}>
            <Input name="GhiChu" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ngày kí hợp đồng */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="NgayKyHopDong"
            label="Ngày kí hợp đồng"
            {...formItemLayout}
          >
            <Input name="NgayKyHopDong" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="NgayCoHieuLuc"
            label="Ngày có hiệu lực"
            {...formItemLayout}
          >
            <Input name="NgayCoHieuLuc" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="NgayLapDat" label="Ngày lắp đặt" {...formItemLayout}>
            <Input name="NgayLapDat" placeholder="Nhập vĩ độ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="" label="Tuyến đọc (*)" {...formItemLayout}>
            <Select
              fieldNames=""
              options={[
                { value: "1", label: "baovinh - Bảo Vinh" },
                { value: "2", label: "bosung1 - tuyến bổ sung" },
                { value: "3", label: "CatnuocBH - tuyến cắt nước" },
                { value: "4", label: "DN250baoha - Đồng hồ tổng Bảo Hà" },
                { value: "5", label: "lamsan - lâm Sản" },
                { value: "6", label: "lienha - Liên Hà" },
                { value: "7", label: "tanan - Tân An" },
              ]}
              placeholder="Chọn tuyến đọc"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoContract;

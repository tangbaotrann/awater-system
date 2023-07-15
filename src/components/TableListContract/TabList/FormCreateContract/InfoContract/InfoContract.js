import { RedoOutlined } from "@ant-design/icons";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchApiAllCustomerSelector,
  fetchApiAllPaymentMethodSelector,
  fetchApiAllPriceObjSelector,
  fetchApiAllReadingSelector,
} from "../../../../../redux/selector";
import { fetchApiAllPriceObj } from "../../../../../redux/slices/priceObjSlice/priceObjSlice";
import { fetchApiAllPaymentMethod } from "../../../../../redux/slices/paymentMethodSlice/paymentMethodSlice";
import { fetchApiAllReading } from "../../../../../redux/slices/readingSlice/readingSlice";

function InfoContract() {
  const dispatch = useDispatch();

  const customers = useSelector(fetchApiAllCustomerSelector);
  const objPrices = useSelector(fetchApiAllPriceObjSelector);
  const paymentMethods = useSelector(fetchApiAllPaymentMethodSelector);
  const readings = useSelector(fetchApiAllReadingSelector);

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

  useEffect(() => {
    dispatch(fetchApiAllPriceObj());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchApiAllPaymentMethod());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchApiAllReading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-info-contract">
      <Row>
        {/* Số hợp đồng + Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="keyIdOfContract"
            label="Hợp đồng Id (*)"
            {...formItemLayout}
          >
            <div className="container-label-input">
              <Input
                name="keyIdOfContract"
                placeholder="Nhập số hợp đồng"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={10}>
          {/* KH id */}
          <Form.Item
            name="khachHangId"
            label="Khách hàng Id (*)"
            {...formItemLayout}
            hidden
          >
            {/* <Select
              fieldNames="khachHangId"
              options={
                customers?.length <= 0
                  ? []
                  : customers.map((_customer) => ({
                      label: _customer.tenKhachHang,
                      value: _customer.id,
                    }))
              }
              className="space-right-10"
              placeholder="Chọn tên khách hàng"
            /> */}
            <Input name="khachHangId" />
          </Form.Item>
        </Col>

        {/* Nhà máy id */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="NhaMayId" label="Nhà máy id" {...formItemLayout}>
            <Input name="NhaMayId" />
          </Form.Item>
        </Col>

        {/* ĐT giá (load from api) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="doiTuongGiaId"
            label="ĐT giá (*)"
            {...formItemLayout}
          >
            {/* <Select
              fieldNames="doiTuongGiaId"
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
            /> */}
            <Select
              fieldNames="doiTuongGiaId"
              options={
                objPrices?.length <= 0
                  ? []
                  : objPrices.map((_objPrice) => ({
                      label: _objPrice.id,
                      value: _objPrice.id,
                    }))
              }
              placeholder="Chọn đối tượng giá"
            />
          </Form.Item>
        </Col>

        {/* Mục đích SD */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="mucDichSuDung"
            label="Mục đích SD"
            {...formItemLayout}
          >
            <Select
              fieldNames="mucDichSuDung"
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

        {/* Hình thức TT */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="phuongThucThanhToanId"
            label="Phương thức TT"
            {...formItemLayout}
          >
            <Select
              fieldNames="phuongThucThanhToanId"
              options={
                paymentMethods?.length <= 0
                  ? []
                  : paymentMethods.map((_payMethod) => ({
                      label: _payMethod.moTaPhuongThuc,
                      value: _payMethod.id,
                    }))
              }
              placeholder="Chọn phương thức thanh toán"
            />
          </Form.Item>
        </Col>

        {/* Khu vực TT */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="khuVucThanhToan"
            label="Khu vực TT: "
            {...formItemLayout}
          >
            <Select
              fieldNames="khuVucThanhToan"
              options={[
                { value: "1", label: "KV 1" },
                { value: "2", label: "KV 2" },
              ]}
              placeholder="Chọn khu vực TT"
            />
          </Form.Item>
        </Col>

        {/* Tuyến đọc id (load from api) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="tuyenDocId"
            label="Tuyến đọc (*)"
            {...formItemLayout}
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

        {/* Ngày ký hợp đồng */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayKyHopDong"
            label="Ngày ký hợp đồng"
            {...formItemLayout}
          >
            <DatePicker
              name="ngayKyHopDong"
              placeholder="Ngày ký hợp đồng"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="ngayLapDat" label="Ngày lắp đặt" {...formItemLayout}>
            <DatePicker
              name="ngayLapDat"
              placeholder="Nhập ngày lắp đặt"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Kinh độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="kinhDo" label="Kinh độ" {...formItemLayout}>
            <InputNumber
              name="kinhDo"
              style={{ width: "100%" }}
              placeholder="Nhập kinh độ"
            />
          </Form.Item>
        </Col>

        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="diachi" label="Địa chỉ (*)" {...formItemLayout}>
            <Input
              name="diachi"
              placeholder="Nhập địa chỉ"
              className="space-right-10"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Vĩ độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="viDo" label="Vĩ độ" {...formItemLayout}>
            <InputNumber
              name="viDo"
              style={{ width: "100%" }}
              placeholder="Nhập vĩ độ"
            />
          </Form.Item>
        </Col>

        {/* Ghi chú */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="ghiChuOfContract"
            label="Ghi chú: "
            {...formItemLayout}
          >
            <Input name="ghiChuOfContract" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayCoHieuLuc"
            label="Ngày có hiệu lực"
            {...formItemLayout}
          >
            <DatePicker
              name="ngayCoHieuLuc"
              placeholder="Chọn ngày có hiệu lực"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoContract;

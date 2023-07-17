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
  fetchApiAllFactorySelector,
  fetchApiAllPaymentMethodSelector,
  fetchApiAllPriceObjSelector,
  fetchApiAllReadingSelector,
} from "../../../../../redux/selector";
import { fetchApiAllPriceObj } from "../../../../../redux/slices/priceObjSlice/priceObjSlice";
import { fetchApiAllPaymentMethod } from "../../../../../redux/slices/paymentMethodSlice/paymentMethodSlice";
import { fetchApiAllReading } from "../../../../../redux/slices/readingSlice/readingSlice";
import { fetchApiAllFactory } from "../../../../../redux/slices/factorySlice/factorySlice";

function InfoContract() {
  const dispatch = useDispatch();

  const objPrices = useSelector(fetchApiAllPriceObjSelector);
  const paymentMethods = useSelector(fetchApiAllPaymentMethodSelector);
  const readings = useSelector(fetchApiAllReadingSelector);
  const factorys = useSelector(fetchApiAllFactorySelector);

  // console.log(objPrices);

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

  useEffect(() => {
    dispatch(fetchApiAllFactory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-info-contract">
      <Row>
        {/* Số hợp đồng + Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="keyIdOfContract"
            label="Mã hợp đồng"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã hợp đồng.",
              },
            ]}
          >
            <div className="container-label-input">
              <Input
                name="keyIdOfContract"
                placeholder="Nhập mã hợp đồng"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* KH id */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="khachHangId"
            label="Khách hàng Id (*)"
            {...formItemLayout}
            hidden
          >
            <Input name="khachHangId" />
          </Form.Item>
        </Col> */}

        {/* Nhà máy id */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="nhaMayId"
            label="Nhà máy"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn tên nhà máy.",
              },
            ]}
          >
            <Select
              fieldNames="nhaMayId"
              options={
                factorys?.length <= 0
                  ? []
                  : factorys.map((_factory) => ({
                      label: _factory.tenNhaMay,
                      value: _factory.id,
                    }))
              }
              placeholder="Chọn tên nhà máy"
            />
          </Form.Item>
        </Col>

        {/* ĐT giá (load from api) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="doiTuongGiaId"
            label="ĐT giá"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn đối tượng giá.",
              },
            ]}
          >
            <Select
              fieldNames="doiTuongGiaId"
              options={[
                {
                  value: "5fdd8745-de3e-4aec-8eb7-34691c8fa50a",
                  label: "SH - Sinh hoạt Lào Cai",
                },
                {
                  value: "889a01e9-2140-46d4-81a8-87a32f995792",
                  label: "UT - Ưu đãi LC",
                },
                {
                  value: "f7089569-24a1-45cb-81ea-10d69a4e5000",
                  label: "HC - Tổ Chức LC",
                },
              ]}
              placeholder="Chọn giá"
            />
            {/* <Select
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
            /> */}
          </Form.Item>
        </Col>

        {/* Mục đích SD */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="mucDichSuDung"
            label="Mục đích SD"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn mục đích sử dụng.",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn phương thức thanh toán.",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn khu vực thanh toán.",
              },
            ]}
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

        {/* Ngày ký hợp đồng */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayKyHopDong"
            label="Ngày ký hợp đồng"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày ký hợp đồng.",
              },
            ]}
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
          <Form.Item
            name="ngayLapDat"
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
              name="ngayLapDat"
              placeholder="Nhập ngày lắp đặt"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Ngày có hiệu lực */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayCoHieuLuc"
            label="Ngày có hiệu lực"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày có hiệu lực.",
              },
            ]}
          >
            <DatePicker
              name="ngayCoHieuLuc"
              placeholder="Chọn ngày có hiệu lực"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Kinh độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="kinhDo"
            label="Kinh độ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập kinh độ.",
              },
            ]}
          >
            <InputNumber
              name="kinhDo"
              style={{ width: "100%" }}
              placeholder="Nhập kinh độ"
            />
          </Form.Item>
        </Col>

        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={11} lg={10}>
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
      </Row>

      <Row>
        {/* Vĩ độ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="viDo"
            label="Vĩ độ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập vĩ độ.",
              },
            ]}
          >
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
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập ghi chú.",
              },
            ]}
          >
            <Input name="ghiChuOfContract" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoContract;

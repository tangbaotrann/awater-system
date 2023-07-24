import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
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
  fetchApiAllPriceObjectSelector,
} from "../../../../../redux/selector";
import { fetchApiAllPaymentMethod } from "../../../../../redux/slices/paymentMethodSlice/paymentMethodSlice";
import { fetchApiAllReading } from "../../../../../redux/slices/readingSlice/readingSlice";
import { fetchApiAllFactory } from "../../../../../redux/slices/factorySlice/factorySlice";
import { fetchApiAllPriceObject } from "../../../../../redux/slices/priceObjectSlice/priceObjectSlice";

function InfoContract() {
  const dispatch = useDispatch();

  const objPrices = useSelector(fetchApiAllPriceObjectSelector);
  const paymentMethods = useSelector(fetchApiAllPaymentMethodSelector);
  const factorys = useSelector(fetchApiAllFactorySelector);

  // console.log(objPrices);

  const formItemLayout = {
    labelCol: {
      xs: { span: 22 },
      sm: { span: 5 },
      md: { span: 7 },
      lg: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 22 },
      sm: { span: 22 },
      md: { span: 22 },
      lg: { span: 22 },
    },
  };

  useEffect(() => {
    dispatch(fetchApiAllPriceObject());
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
        <Col xs={24} sm={24} md={24} lg={24}>
          <Divider orientation="left">Thông tin hợp đồng</Divider>
        </Col>

        {/* Mã đăng ký */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="maDangKy"
            label="Mã đăng ký"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã đăng ký.",
              },
            ]}
          >
            <Input name="maDangKy" placeholder="Nhập mã đăng ký" />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Số hợp đồng + Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={11} lg={12}>
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

        {/* Mã vạch */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="maVach"
            label="Mã vạch"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã vạch.",
              },
            ]}
          >
            <Input name="maVach" placeholder="Nhập mã vạch" />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Nhà máy id */}
        {/* <Col xs={24} sm={24} md={8} lg={8}>
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
        </Col> */}

        {/* ĐT giá (load from api) */}
        <Col xs={24} sm={24} md={11} lg={12}>
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

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Hình thức TT */}
        <Col xs={24} sm={24} md={11} lg={12}>
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
        <Col xs={24} sm={24} md={11} lg={10}>
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

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Ngày ký hợp đồng */}
        <Col xs={24} sm={24} md={11} lg={12}>
          <Form.Item
            name="ngayKyHopDong"
            label="Ngày ký HĐ"
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
              placeholder="Chọn ngày ký hợp đồng"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        {/* Ngày lắp đặt */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayLapDat"
            label="Ngày LĐ"
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
              placeholder="Chọn ngày lắp đặt"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Người lắp đặt */}
        <Col xs={24} sm={24} md={11} lg={12}>
          <Form.Item
            name="nguoiLapDat"
            label="Người LĐ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập tên người lắp đặt.",
              },
            ]}
          >
            <Input name="nguoiLapDat" placeholder="Nhập tên người lắp đặt" />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Ngày nộp tiền */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayNopTien"
            label="Ngày NT"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày nộp tiền.",
              },
            ]}
          >
            <DatePicker
              name="ngayNopTien"
              placeholder="Chọn ngày nộp tiền"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Tiền lắp đặt */}
        <Col xs={24} sm={24} md={11} lg={12}>
          <Form.Item
            name="tienLapDat"
            label="Tiền LĐ"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số tiền lắp đặt.",
              },
            ]}
          >
            <Input name="tienLapDat" placeholder="Nhập số tiền lắp đặt" />
          </Form.Item>
        </Col>

        {/* Người nộp */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="nguoiNop"
            label="Người nộp"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập tên người nộp.",
              },
            ]}
          >
            <Input name="nguoiNop" placeholder="Nhập tên người nộp" />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Tiền cọc */}
        <Col xs={24} sm={24} md={11} lg={12}>
          <Form.Item
            name="tienCoc"
            label="Tiền cọc"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số tiền cọc.",
              },
            ]}
          >
            <Input name="tienCoc" placeholder="Nhập số tiền cọc" />
          </Form.Item>
        </Col>

        {/* Ngày đặt cọc */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="ngayDatCoc"
            label="Ngày ĐC"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày đặt cọc.",
              },
            ]}
          >
            <DatePicker
              name="ngayDatCoc"
              placeholder="Chọn ngày đặt cọc"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Cam kết sử dụng nước */}
        <Col xs={24} sm={24} md={11} lg={12}>
          <Form.Item
            name="camKetSDNuoc"
            label="Cam kết SDN"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải cam kết sử dụng nước.",
              },
            ]}
          >
            <Checkbox name="camKetSDNuoc" />
          </Form.Item>
        </Col>

        {/* Khối lượng cam kết */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="khoiLuongCamKet"
            label="KL cam kết"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số tiền cọc.",
              },
            ]}
          >
            <Input
              name="khoiLuongCamKet"
              placeholder="Nhập khối lượng cam kết"
            />
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Kinh độ */}
        <Col xs={24} sm={24} md={11} lg={12}>
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

        <Col xs={1} sm={1} md={1} lg={1}></Col>

        {/* Ghi chú */}
        <Col xs={24} sm={24} md={11} lg={12}>
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

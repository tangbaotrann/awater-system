import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchApiAllFactory } from "../../../../../redux/slices/factorySlice/factorySlice";
import { fetchApiAllFactorySelector } from "../../../../../redux/selector";

function InfoCustomer() {
  const dispatch = useDispatch();

  const factorys = useSelector(fetchApiAllFactorySelector);

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
    dispatch(fetchApiAllFactory());
  }, []);

  return (
    <div className="container-info-customer">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Divider orientation="left">Thông tin khách hàng</Divider>
        </Col>

        {/* Mã khách hàng + Button reset */}
        <Col xs={20} sm={22} md={11} lg={10}>
          <Form.Item
            name="keyIdOfCustomer"
            label="Mã KH"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã khách hàng.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <Input
              name="keyIdOfCustomer"
              placeholder="Nhập mã khách hàng"
              className="space-right-10"
            />
            {/* </div> */}
          </Form.Item>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1}>
          <Form.Item {...formItemLayout}>
            <Button className="custom-btn-reset-form-contract custom-btn-reset space-left-6 space-top-40">
              <RedoOutlined />
            </Button>
          </Form.Item>
        </Col>

        {/* Loại khách hàng */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="loaiKhachHang"
            label="Loại KH"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn loại khách hàng.",
              },
            ]}
          >
            <Select
              fieldNames="loaiKhachHang"
              options={[
                { value: "Cá nhân", label: "1 - Cá nhân" },
                { value: "Đơn vị, tổ chức", label: "2 - Đơn vị, tổ chức" },
              ]}
              placeholder="Chọn loại khách hàng"
            />
          </Form.Item>
        </Col>

        {/* Nhà máy id */}
        {/* <Col xs={22} sm={22} md={12} lg={10}>
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

        {/* Nguồn nước */}
        {/* <Col xs={22} sm={22} md={11} lg={10}>
          <Form.Item
            name="nguonNuoc"
            label="Nguồn nước"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập nguồn nước.",
              },
            ]}
          >
            <Input
              name="nguonNuoc"
              placeholder="nguồn nước"
              className="space-right-10"
            />
          </Form.Item>
        </Col> */}

        {/* Địa chỉ khách hàng */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="addressOfCustomer"
            label="Địa chỉ KH"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập địa chỉ khách hàng.",
              },
            ]}
          >
            <Input
              name="addressOfCustomer"
              placeholder="Nhập địa chỉ khách hàng"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Ghi chú */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="ghiChu"
            label="Ghi chú: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập ghi chú.",
              },
            ]}
          >
            <Input name="ghiChu" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên khách hàng + */}
        <Col xs={20} sm={22} md={11} lg={10}>
          <Form.Item
            name="tenKhachHang"
            label="Tên KH"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập tên khách hàng.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <Input
              name="tenKhachHang"
              placeholder="Nhập tên khách hàng"
              className="space-right-10"
            />
          </Form.Item>
        </Col>

        {/* Button ... (tên khách hàng) */}
        <Col xs={1} sm={1} md={1} lg={1}>
          <Form.Item {...formItemLayout}>
            <Button
              type="primary"
              className="custom-btn-3-form-contract space-left-6 space-top-40"
            >
              ...
            </Button>
          </Form.Item>
        </Col>

        {/* Người ĐD */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="nguoiDaiDien"
            label="Người ĐD: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập tên người đại diện.",
              },
            ]}
          >
            <Input name="nguoiDaiDien" placeholder="Nhập tên người đại điện" />
          </Form.Item>
        </Col>

        {/* Số GCN */}
        {/* <Col xs={22} sm={22} md={12} lg={10}>
          <Form.Item
            name="soGcn"
            label="Số GCN"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số GCN.",
              },
            ]}
          >
            <Input name="soGcn" placeholder="Nhập số GCN" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Tên thường gọi */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="tenThuongGoi"
            label="Tên TG"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập tên thường gọi.",
              },
            ]}
          >
            <Input name="tenThuongGoi" placeholder="Nhập tên thường gọi" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Số hộ */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="soHo"
            label="Số hộ: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số hộ.",
              },
            ]}
          >
            <InputNumber
              name="soHo"
              placeholder="Nhập số hộ"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số khẩu + Button ... (số khẩu) */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="soKhau"
            label="Số khẩu: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số khẩu.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <InputNumber
              name="soKhau"
              placeholder="Nhập số khẩu"
              className="space-right-10"
              style={{ width: "100%" }}
            />
            {/* <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button> */}
            {/* </div> */}
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Email + button (email) */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="email"
            label="Email: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập email.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <Input
              name="email"
              placeholder="Nhập email"
              className="space-right-10"
            />
            {/* <Checkbox name="" /> */}
            {/* </div> */}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Điện thoại */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="dienThoai"
            label="Điện thoại: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số điện thoại.",
              },
            ]}
          >
            <Input name="dienThoai" placeholder="Nhập số điện thoại" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Đối tượng */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="doiTuong"
            label="Đối tượng: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn đối tượng.",
              },
            ]}
          >
            <Select
              fieldNames="doiTuong"
              options={[
                { value: "1", label: "Đối tượng 1" },
                { value: "2", label: "Đối tượng 2" },
              ]}
              placeholder="Chọn đối tượng"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số CMND + Checkbox (số CMND) */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="soCmnd"
            label="Số CMND: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập số CMND.",
              },
            ]}
          >
            {/* <div className="container-label-input"> */}
            <Input
              name="soCmnd"
              placeholder="Nhập CMND"
              className="space-right-10"
            />
            {/* <Checkbox /> */}
            {/* </div> */}
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Ngày cấp */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="ngayCapCmnd"
            label="Ngày cấp"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải chọn ngày cấp CMND.",
              },
            ]}
          >
            <DatePicker
              name="ngayCapCmnd"
              placeholder="Chọn ngày cấp"
              className="gutter-item-date-picker"
              picker="date"
              format="YYYY/MM/DD"
            />
            {/* <Input name="ngayCapCmnd" placeholder="Nhập ngày cấp" /> */}
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nơi cấp */}
        <Col xs={24} sm={22} md={11} lg={10}>
          <Form.Item
            name="noiCapCmnd"
            label="Nơi cấp: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập nơi cấp CMND.",
              },
            ]}
          >
            <Input name="noiCapCmnd" placeholder="Nhập nơi cấp" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={22} md={1} lg={1}></Col>

        {/* Mã số thuế */}
        <Col xs={24} sm={22} md={12} lg={12}>
          <Form.Item
            name="maSoThue"
            label="Mã số thuế: "
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "Bạn cần phải nhập mã số thuế.",
              },
            ]}
          >
            <Input name="maSoThue" placeholder="Nhập mã số thuế" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên ngân hàng */}
        {/* <Col xs={22} sm={22} md={12} lg={10}>
          <Form.Item
            name="name_bank"
            label="Tên ngân hàng: "
            {...formItemLayout}
          >
            <Select
              fieldNames="name_bank"
              options={[{ value: "1", label: "Vietinbank" }]}
              placeholder="Chọn tên ngân hàng"
            />
          </Form.Item>
        </Col> */}

        {/* Số GCN + Checkbox (số GCN) */}
        {/* <Col xs={22} sm={22} md={11} lg={10}>
          <Form.Item name="num_gcn" label="Số GCN: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="num_gcn"
                placeholder="Nhập số gcn"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Tên TKNH */}
        {/* <Col xs={22} sm={22} md={12} lg={10}>
          <Form.Item
            name="name_acc_bank"
            label="Tên TKNH: "
            {...formItemLayout}
          >
            <Input name="name_acc_bank" placeholder="Nhập tên TKNH" />
          </Form.Item>
        </Col> */}

        {/* Số TKNH */}
        {/* <Col xs={22} sm={22} md={11} lg={10}>
          <Form.Item name="num_acc_bank" label="Số TKNH: " {...formItemLayout}>
            <Input name="num_acc_bank" placeholder="Nhập số TKNH" />
          </Form.Item>
        </Col> */}
      </Row>
    </div>
  );
}

export default InfoCustomer;

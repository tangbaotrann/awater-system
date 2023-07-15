import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

function InfoCustomer() {
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
    <div className="container-info-customer">
      <Row>
        {/* Mã khách hàng + Button reset */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="keyIdOfCustomer"
            label="Mã KH (*)"
            {...formItemLayout}
          >
            <div className="container-label-input">
              <Input
                name="keyIdOfCustomer"
                placeholder="Nhập mã khách hàng"
                className="space-right-10"
              />
              <Button className="custom-btn-reset-form-contract custom-btn-reset">
                <RedoOutlined />
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Loại khách hàng */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="loaiKhachHang"
            label="Loại khách hàng"
            {...formItemLayout}
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
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="nhaMayId" label="Nhà máy id" {...formItemLayout}>
            <Input name="nhaMayId" value="1" />
          </Form.Item>
        </Col>

        {/* Xác nhận + Button ... (số khẩu) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="nguonNuoc" label="Nguồn nước" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="nguonNuoc"
                placeholder="nguồn nước"
                className="space-right-10"
              />
              <Checkbox name="" />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên khách hàng + + Button ... (tên khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="tenKhachHang" label="Tên KH (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="tenKhachHang"
                placeholder="Nhập tên khách hàng"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Số GCN */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="soGcn" label="Số GCN" {...formItemLayout}>
            <Input name="soGcn" placeholder="Nhập Số GCN" />
          </Form.Item>
        </Col>

        {/* Địa chỉ + Checkbox */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="address" label="Địa chỉ: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="address"
                placeholder="Nhập địa chỉ"
                className="space-right-10"
              />
              <Checkbox name="test-1" />
            </div>
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Tên thường gọi */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="tenThuongGoi"
            label="Tên thường gọi"
            {...formItemLayout}
          >
            <Input name="tenThuongGoi" placeholder="Nhập tên thường gọi" />
          </Form.Item>
        </Col>

        {/* Số hộ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="soHo" label="Số hộ: " {...formItemLayout}>
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
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="soKhau" label="Số khẩu: " {...formItemLayout}>
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

        {/* Email + button (email) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="email" label="Email: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="email"
                placeholder="Nhập email"
                className="space-right-10"
              />
              <Checkbox name="" />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Điện thoại */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="dienThoai" label="Điện thoại: " {...formItemLayout}>
            <Select
              fieldNames="dienThoai"
              options={[{ value: "023104921", label: "023104921" }]}
            />
          </Form.Item>
        </Col>

        {/* Đối tượng */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="doiTuong" label="Đối tượng: " {...formItemLayout}>
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

        {/* Xác nhận + Button ... (số khẩu) */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="no1" label="Xác nhận" {...formItemLayout}>
            <div className="container-label-input">
              <Input name="no1" className="space-right-10" />
              <Checkbox name="" />
            </div>
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Số CMND + Checkbox (số CMND) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="soCmnd" label="Số CMND: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="soCmnd"
                placeholder="Nhập CMND"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col>

        {/* Ngày cấp */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="ngayCapCmnd" label="Ngày cấp: " {...formItemLayout}>
            {/* <DatePicker
              name="ngayCapCmnd"
              placeholder="Chọn ngày cấp"
              className="gutter-item-date-picker"
              format="DD/MM/YYYY"
            /> */}
            <Input name="ngayCapCmnd" placeholder="Nhập ngày cấp" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nơi cấp */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="noiCapCmnd" label="Nơi cấp: " {...formItemLayout}>
            <Input name="noiCapCmnd" placeholder="Nhập nơi cấp" />
          </Form.Item>
        </Col>

        {/* Mã số thuế */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="maSoThue" label="Mã số thuế: " {...formItemLayout}>
            <Input name="maSoThue" placeholder="Nhập mã số thuế" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên ngân hàng */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
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
        {/* <Col xs={24} sm={24} md={11} lg={10}>
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
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="name_acc_bank"
            label="Tên TKNH: "
            {...formItemLayout}
          >
            <Input name="name_acc_bank" placeholder="Nhập tên TKNH" />
          </Form.Item>
        </Col> */}

        {/* Số TKNH */}
        {/* <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="num_acc_bank" label="Số TKNH: " {...formItemLayout}>
            <Input name="num_acc_bank" placeholder="Nhập số TKNH" />
          </Form.Item>
        </Col> */}
      </Row>

      <Row>
        {/* Nguồn nước */}
        {/* <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="water_source"
            label="Nguồn nước: "
            {...formItemLayout}
          >
            <Select
              fieldNames="water_source"
              options={[
                { value: "1", label: "Nguồn nước 1" },
                { value: "2", label: "Nguồn nước 2" },
              ]}
              placeholder="Chọn nguồn nước"
            />
          </Form.Item>
        </Col> */}

        {/* Ghi chú */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="ghiChu" label="Ghi chú: " {...formItemLayout}>
            <Input name="ghiChu" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        {/* Người ĐD */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="nguoiDaiDien"
            label="Người đại diện: "
            {...formItemLayout}
          >
            <Input name="nguoiDaiDien" placeholder="Nhập tên người đại điện" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoCustomer;

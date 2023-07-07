import { RedoOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
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
        {/* Loại khách hàng */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="type_customer"
            label="Loại khách hàng"
            {...formItemLayout}
          >
            <Select
              fieldNames="type_customer"
              options={[
                { value: "1", label: "1 - Cá nhân" },
                { value: "2", label: "2 - Cá nhân" },
              ]}
              placeholder="Chọn loại khách hàng"
            />
          </Form.Item>
        </Col>

        {/* Mã khách hàng + Button reset */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="code_cus" label="Mã KH (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="code_cus"
                placeholder="Nhập mã khách hàng"
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
        {/* Tên khách hàng + + Button ... (tên khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="fullName" label="Tên KH (*)" {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="fullName"
                placeholder="Nhập tên khách hàng"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button>
            </div>
          </Form.Item>
        </Col>

        {/* Địa chỉ + Checkbox */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="address_cus" label="Địa chỉ: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="address_cus"
                placeholder="Nhập địa chỉ"
                className="space-right-10"
              />
              <Checkbox name="test-1" />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên thường gọi */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="name_cus" label="Tên thường gọi" {...formItemLayout}>
            <Input name="name_cus" placeholder="Nhập tên thường gọi" />
          </Form.Item>
        </Col>

        {/* Số hộ */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="num_house" label="Số hộ: " {...formItemLayout}>
            <Input name="num_house" placeholder="Nhập số hộ" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số khẩu + Button ... (số khẩu) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="num_guns" label="Số khẩu: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="num_guns"
                placeholder="Nhập số khẩu"
                className="space-right-10"
              />
              <Button type="primary" className="custom-btn-3-form-contract">
                ...
              </Button>
            </div>
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
          <Form.Item name="phone" label="Điện thoại: " {...formItemLayout}>
            <Select
              fieldNames="phone"
              options={[{ value: "023104921", label: "023104921" }]}
            />
          </Form.Item>
        </Col>

        {/* Xác nhận + Button ... (số khẩu) */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="no1" label="Xác nhận" {...formItemLayout}>
            <div className="container-label-input">
              <Input name="no1" className="space-right-10" />
              <Checkbox name="" />
            </div>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số CMND + Checkbox (số CMND) */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="num_identity" label="Số CMND: " {...formItemLayout}>
            <div className="container-label-input">
              <Input
                name="num_identity"
                placeholder="Nhập CMND"
                className="space-right-10"
              />
              <Checkbox />
            </div>
          </Form.Item>
        </Col>

        {/* Ngày cấp */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="date_range" label="Ngày cấp: " {...formItemLayout}>
            <DatePicker
              name="date_range"
              placeholder="Chọn ngày cấp"
              className="gutter-item-date-picker"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nơi cấp */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="place_range" label="Nơi cấp: " {...formItemLayout}>
            <Input name="place_range" placeholder="Nhập nơi cấp" />
          </Form.Item>
        </Col>

        {/* Mã số thuế */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="tax_code" label="Mã số thuế: " {...formItemLayout}>
            <Input name="tax_code" placeholder="Nhập mã số thuế" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên ngân hàng */}
        <Col xs={24} sm={24} md={12} lg={10}>
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
        </Col>

        {/* Số GCN + Checkbox (số GCN) */}
        <Col xs={24} sm={24} md={11} lg={10}>
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
        </Col>
      </Row>

      <Row>
        {/* Tên TKNH */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item
            name="name_acc_bank"
            label="Tên TKNH: "
            {...formItemLayout}
          >
            <Input name="name_acc_bank" placeholder="Nhập tên TKNH" />
          </Form.Item>
        </Col>

        {/* Số TKNH */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="num_acc_bank" label="Số TKNH: " {...formItemLayout}>
            <Input name="num_acc_bank" placeholder="Nhập số TKNH" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nguồn nước */}
        <Col xs={24} sm={24} md={12} lg={10}>
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
        </Col>

        {/* Người ĐD */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item
            name="representative_name"
            label="Người ĐD: "
            {...formItemLayout}
          >
            <Input
              name="representative_name"
              placeholder="Nhập tên người đại điện"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ghi chú */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Form.Item name="note" label="Ghi chú: " {...formItemLayout}>
            <Input name="note" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        {/* Đối tượng */}
        <Col xs={24} sm={24} md={11} lg={10}>
          <Form.Item name="obj_name" label="Đối tượng: " {...formItemLayout}>
            <Select
              fieldNames="obj_name"
              options={[
                { value: "1", label: "Đối tượng 1" },
                { value: "2", label: "Đối tượng 2" },
              ]}
              placeholder="Chọn đối tượng"
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default InfoCustomer;

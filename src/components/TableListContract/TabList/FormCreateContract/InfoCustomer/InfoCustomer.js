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
import { useMediaQuery } from "react-responsive";

function InfoCustomer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  return (
    <>
      <Row>
        {/* Loại khách hàng */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="type_customer" label="Loại khách hàng: ">
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

        {/* Mã khách hàng */}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="code_cus" label="Mã KH: (*)">
            <Input name="code_cus" placeholder="Nhập mã khách hàng" />
          </Form.Item>
        </Col>

        {/* Button reset (mã khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={2}>
          <Button type="primary">
            <RedoOutlined />
          </Button>
        </Col>
      </Row>

      <Row>
        {/* Tên khách hàng */}
        <Col xs={24} sm={24} md={12} lg={21} className="gutter-item">
          <Form.Item name="fullName" label="Tên KH: (*)">
            <Input name="fullName" placeholder="Nhập tên khách hàng" />
          </Form.Item>
        </Col>

        {/* Button ... (tên khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={2}>
          <Button type="primary">...</Button>
        </Col>
      </Row>

      <Row>
        {/* Địa chỉ */}
        <Col xs={24} sm={24} md={12} lg={21} className="gutter-item">
          <Form.Item name="address_cus" label="Địa chỉ: ">
            <Input name="address_cus" placeholder="Nhập địa chỉ" />
          </Form.Item>
        </Col>

        {/* Button ... (tên khách hàng) */}
        <Col xs={24} sm={24} md={12} lg={2}>
          <Form.Item name="">
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên thường gọi */}
        <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
          <Form.Item name="name_cus" label="Tên thường gọi: ">
            <Input name="name_cus" placeholder="Nhập tên thường gọi" />
          </Form.Item>
        </Col>

        {/* Số hộ */}
        <Col xs={24} sm={24} md={12} lg={6} className="gutter-item">
          <Form.Item name="num_house" label="Số hộ: ">
            <Input name="num_house" placeholder="Nhập số hộ" />
          </Form.Item>
        </Col>

        {/* Số khẩu */}
        <Col xs={24} sm={24} md={12} lg={6} className="gutter-item">
          <Form.Item name="num_guns" label="Số khẩu: ">
            <Input name="num_guns" placeholder="Nhập số khẩu" />
          </Form.Item>
        </Col>

        {/* Button ... (số khẩu) */}
        <Col xs={24} sm={24} md={12} lg={2}>
          <Button type="primary">...</Button>
        </Col>
      </Row>

      <Row>
        {/* Email */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <Form.Item name="email" label="Email: ">
            <Input name="email" placeholder="Nhập email" />
          </Form.Item>
        </Col>

        {/* button (email) */}
        <Col xs={24} sm={24} md={12} lg={1} className="gutter-item">
          <Form.Item name="">
            <Checkbox name="" />
          </Form.Item>
        </Col>

        {/* Điện thoại */}
        <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
          <Form.Item name="phone" label="Điện thoại: ">
            <Select
              fieldNames="phone"
              options={[{ value: "023124921", label: "023124921" }]}
            />
          </Form.Item>
        </Col>

        {/*  */}
        <Col xs={24} sm={24} md={12} lg={4} className="gutter-item">
          <Form.Item name="no1">
            <Input name="no1" />
          </Form.Item>
        </Col>

        {/* Button ... (số khẩu) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Form.Item name="">
            <Checkbox name="" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Số CMND */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="num_identity" label="Số CMND: ">
            <Input name="num_identity" placeholder="Nhập CMND" />
          </Form.Item>
        </Col>

        {/* Checkbox (số CMND) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Form.Item name="">
            <Checkbox />
          </Form.Item>
        </Col>

        {/* Ngày cấp */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={9}
          className={isTabletOrMobile ? "" : "gutter-item"}
        >
          <Form.Item name="date_range" label="Ngày cấp: ">
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
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="place_range" label="Nơi cấp: ">
            <Input name="place_range" placeholder="Nhập nơi cấp" />
          </Form.Item>
        </Col>

        {/* Mã số thuế */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <Form.Item name="tax_code" label="Mã số thuế: ">
            <Input name="tax_code" placeholder="Nhập mã số thuế" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên ngân hàng */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="name_bank" label="Tên ngân hàng: ">
            <Select
              fieldNames="name_bank"
              options={[{ value: "1", label: "Vietinbank" }]}
              placeholder="Chọn tên ngân hàng"
            />
          </Form.Item>
        </Col>

        {/* Số GCN */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <Form.Item name="num_gcn" label="Số GCN: ">
            <Input name="num_gcn" placeholder="Nhập số gcn" />
          </Form.Item>
        </Col>

        {/* Checkbox (số GCN) */}
        <Col xs={24} sm={24} md={12} lg={1}>
          <Form.Item name="">
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Tên TKNH */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="name_acc_bank" label="Tên TKNH: ">
            <Input name="name_acc_bank" placeholder="Nhập tên TKNH" />
          </Form.Item>
        </Col>

        {/* Số TKNH */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <Form.Item name="num_acc_bank" label="Số TKNH: ">
            <Input name="num_acc_bank" placeholder="Nhập số TKNH" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Nguồn nước */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="water_source" label="Nguồn nước: ">
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
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <Form.Item name="representative_name" label="Người ĐD: ">
            <Input
              name="representative_name"
              placeholder="Nhập tên người đại điện"
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Ghi chú */}
        <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
          <Form.Item name="note" label="Ghi chú: ">
            <Input name="note" placeholder="Nhập ghi chú" />
          </Form.Item>
        </Col>

        {/* Đối tượng */}
        <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
          <Form.Item name="obj_name" label="Đối tượng: ">
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
    </>
  );
}

export default InfoCustomer;

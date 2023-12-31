import { useDispatch } from "react-redux";
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

import reportContractSlice from "../../../redux/slices/reportContractSlice/reportContractSlice";
import { useMediaQuery } from "react-responsive";

function FormFilterReportCustomer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: `${isTabletOrMobile ? 6 : 4}`,
    },
    wrapperCol: {
      span: 24,
    },
  };

  // handle filter change name factory
  const handleChangeNameFactory = (value) => {
    dispatch(reportContractSlice.actions.btnClickOptionFactory(value));
  };

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form
      {...layout}
      onFinish={handleSubmit}
      onFinishFailed={handleFailed}
      initialValues={{
        unit: "all",
        employee: "all",
        reading_line: "all",
        watch_style: "all",
      }}
      fields={[
        { name: "no_val_one", value: false },
        { name: "no_val_two", value: false },
      ]}
    >
      {/* Đơn vị + Nhân viên */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="unit" label="Đơn vị: ">
            <Select
              fieldNames="unit"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "Nhà máy nước Hiệp Hòa 1" },
                { value: "opt_2", label: "Nhà máy nước Hiệp Hòa 2" },
              ]}
              onSelect={handleChangeNameFactory}
              className="gutter-item-inp"
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="employee" label="Nhân viên: ">
            <Select
              fieldNames="employee"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "NV_01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Tìm kiếm tuyến + Tuyến dọc */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="online_search" label="Tìm tuyến: ">
            <Input name="online_search" placeholder="Tìm kiếm tuyến" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="reading_line" label="Tuyến đọc">
            <Select
              fieldNames="reading_line"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "TD_01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>

        {/* Đối tượng giá */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="doiTuongGia" label="Đối tượng giá">
            <Input name="doiTuongGia" placeholder="Nhập đối tượng giá" />
          </Form.Item>
        </Col>

        {/* Tình trạng đồng hồ */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="tinhTrangDongHo" label="Tình trạng">
            <Select
              fieldNames="tinhTrangDongHo"
              options={[{ label: "TT 1", value: "tt1" }]}
              placeholder="Chọn tình trạng của đồng hồ"
            />
          </Form.Item>
        </Col>

        {/* Quận/ Huyện */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="quanHuyen" label="Quận/ Huyện">
            <Input name="quanHuyen" placeholder="Nhập quận - huyện" />
          </Form.Item>
        </Col>

        {/* Xã/ Phường */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="xaPhuong" label="Xã/ Phường">
            <Input name="xaPhuong" placeholder="Nhập xã - phường" />
          </Form.Item>
        </Col>

        {/* Khu vực thanh toán */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="khuVucTT" label="Khu vực TT">
            <Input name="khuVucTT" placeholder="Nhập khu vực thanh toán" />
          </Form.Item>
        </Col>

        {/* Hình thức thanh toán */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="hinhThucTT" label="Hình thức TT">
            <Input name="hinhThucTT" placeholder="Nhập hình thức thanh toán" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        {/* Từ ngày (Ngày lắp đặt) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngayLapDatTuNgay" label="Từ ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày lắp đặt"
            />
          </Form.Item>
        </Col>

        {/*  Đến ngày (Ngày lắp đặt) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngayLapDatDenNgay" label="Đến ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày lắp đặt"
            />
          </Form.Item>
        </Col>

        {/*  Từ ngày (Ngày đăng ký hợp đồng) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngayDKHDTuNgay" label="Từ ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày đăng ký hợp đồng"
            />
          </Form.Item>
        </Col>

        {/*  Đến ngày (Ngày đăng ký hợp đồng) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngayDKHDDenNgay" label="Đến ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày đăng ký hợp đồng"
            />
          </Form.Item>
        </Col>

        {/*  Từ ngày (Ngày sử dụng) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngaySDTuNgay" label="Từ ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày sử dụng"
            />
          </Form.Item>
        </Col>

        {/*  Đến ngày (Ngày sử dụng) */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="ngaySDDenNgay" label="Đến ngày: ">
            <DatePicker
              name=""
              className="date-time-inp"
              placeholder="Chọn ngày sử dụng"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Checkbox */}
      {/* <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            rules={[
              {
                required: false,
              },
            ]}
            valuePropName="checked"
            hasFeedback
            name="no_val_one"
            label="Chọn"
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            rules={[
              {
                required: false,
              },
            ]}
            hasFeedback
            valuePropName="checked"
            name="no_val_two"
            label="Chọn"
            className={isTabletOrMobile ? "gutter-item-mobile" : "gutter-item"}
          >
            <Checkbox>Không có giá trị</Checkbox>
          </Form.Item>
        </Col>
      </Row> */}

      {/* Kiểu đồng hồ + Kích cở */}
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="watch_style" label="Kiểu đồng hồ">
            <Select
              fieldNames="watch_style"
              options={[
                { value: "all", label: "Tất cả" },
                { value: "opt_1", label: "Kiểu 01" },
              ]}
              onSelect={handleChangeNameFactory}
            />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="size" label="Kích cỡ: ">
            <Input placeholder="Kích cỡ" />
          </Form.Item>
        </Col>

        {/* Loại khách hàng */}
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item name="loaiKH" label="Loại KH">
            <Input name="loaiKH" placeholder="Nhập loại khách hàng" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              htmlType="submit"
              className="gutter-item-btn custom-btn-watch-report"
            >
              Xem báo cáo
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default FormFilterReportCustomer;

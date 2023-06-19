import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Table,
  Tabs,
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  CloseCircleOutlined,
  FileExcelOutlined,
  RetweetOutlined,
  BarsOutlined,
  DashboardOutlined,
  RedoOutlined,
  DownloadOutlined,
  FormOutlined,
  PrinterOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { dataContractClockOnModal } from "../../../utils/dataContract";

// Tabs bottom
const tabs = [
  {
    id: "1",
    label: "Lập hợp đồng",
    icon: <PlusCircleOutlined />,
  },
  {
    id: "2",
    label: "Sửa hợp đồng",
    icon: <EditOutlined />,
  },
  {
    id: "3",
    label: "Xóa",
    icon: <CloseCircleOutlined />,
  },
  {
    id: "4",
    label: "Xuất excel",
    icon: <FileExcelOutlined />,
  },
  {
    id: "5",
    label: "Chuyển",
    icon: <RetweetOutlined />,
  },
  {
    id: "6",
    label: "Lịch sử SD nước",
    icon: <BarsOutlined />,
  },
  {
    id: "7",
    label: "Thay đồng hồ",
    icon: <DashboardOutlined />,
  },
];

function TabList({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);

  // handle change tabs
  const handleChangeTabs = (key) => {
    console.log(key);
    if (key === "1") {
      setOpenModal(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
  };

  // handle submit form
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  // handle submit error
  const handleFailed = (error) => {
    console.log({ error });
  };

  // collapse (Thông tin khách hàng)
  const items = [
    {
      key: "1",
      label: "Thông tin khách hàng",
      children: (
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
              <Form.Item name="name_cus" label="Tên KH: (*)">
                <Input name="name_cus" placeholder="Nhập tên khách hàng" />
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
              <Button type="primary"></Button>
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
              <Button type="primary"></Button>
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
            <Col xs={24} sm={24} md={12} lg={9} className="gutter-item">
              <Form.Item name="date_range" label="Ngày cấp: ">
                <DatePicker name="date_range" placeholder="Chọn ngày cấp" />
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
      ),
    },
  ];

  // collapse (Thông tin hợp đồng)
  const itemsInfoContract = [
    {
      key: "2",
      label: "Thông tin hợp đồng",
      children: (
        <>
          <Row>
            {/* Mã đăng ký */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Mã đăng ký: ">
                <Input name="" placeholder="Nhập mã đăng ký" />
              </Form.Item>
            </Col>

            {/* Button ... (Mã đăng ký) */}
            <Col xs={24} sm={24} md={12} lg={2}>
              <Button type="primary">...</Button>
            </Col>

            {/* Số hợp đồng*/}
            <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
              <Form.Item name="" label="Số hợp đồng: (*)">
                <Input name="" placeholder="Nhập số hợp đồng" />
              </Form.Item>
            </Col>

            {/* Button reset (mã khách hàng) */}
            <Col xs={24} sm={24} md={12} lg={1}>
              <Button type="primary">
                <RedoOutlined />
              </Button>
            </Col>
          </Row>

          <Row>
            {/* ĐT giá */}
            <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
              <Form.Item name="" label="ĐT giá: (*)">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "100000" },
                    { value: "2", label: "200000" },
                  ]}
                  placeholder="Chọn giá"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Mục đích SD */}
            <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
              <Form.Item name="" label="Mục đích SD: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "SD 1" },
                    { value: "2", label: "SD 2" },
                  ]}
                  placeholder="Chọn mục đích SD"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Khu vực TT */}
            <Col xs={24} sm={24} md={12} lg={23} className="gutter-item">
              <Form.Item name="" label="Khu vực TT: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "KV 1" },
                    { value: "2", label: "KV 2" },
                  ]}
                  placeholder="Chọn khu vực TT"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Hình thức TT */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Hình thức TT: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "HT 1" },
                    { value: "2", label: "HT 2" },
                  ]}
                  placeholder="Chọn hình thức TT"
                />
              </Form.Item>
            </Col>

            {/* Mã vạch */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Mã vạch: ">
                <Input name="" placeholder="Nhập mã vạch" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Ngày ký hợp đồng */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Ngày ký HĐ: ">
                <DatePicker
                  name=""
                  placeholder="Chọn ngày ký hợp đồng"
                  className="gutter-item-date-picker"
                />
              </Form.Item>
            </Col>

            {/* Ngày lắp đặt */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Ngày lắp đặt: ">
                <DatePicker
                  name=""
                  placeholder="Chọn ngày lắp đặt"
                  className="gutter-item-date-picker"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Người lắp đặt */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Người lắp đặt: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Văn Tèo" },
                    { value: "2", label: "Tài Siêu" },
                  ]}
                  placeholder="Chọn người lắp đặt"
                />
              </Form.Item>
            </Col>

            {/* Ngày NT */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Ngày NT: ">
                <DatePicker
                  name=""
                  placeholder="Chọn ngày NT"
                  className="gutter-item-date-picker"
                />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  // cols (collapse Đồng hồ)
  const colsClock = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      key: "code",
      title: "Mã",
      dataIndex: "code",
    },
    {
      key: "seri",
      title: "seri",
      dataIndex: "seri",
    },
    {
      key: "date_use",
      title: "Ngày sử dụng",
      dataIndex: "date_use",
    },
  ];

  // collapse (Đồng hồ)
  const itemsClock = [
    {
      key: "3",
      label: "Đồng hồ",
      children: (
        <>
          <Row>
            {/* Table */}
            <Col xs={24} sm={24} md={12} lg={20} className="gutter-item">
              <div className="tablist-tbl-clock-on-modal">
                <Table
                  columns={colsClock}
                  dataSource={dataContractClockOnModal.map((_clock, index) => ({
                    index: index + 1,
                    status: _clock.status,
                    code: _clock.code,
                    seri: _clock.seri,
                    date_use: _clock.date_use,
                  }))}
                  pagination={{
                    pageSize: 5,
                  }}
                  rowKey="index"
                ></Table>
              </div>
            </Col>

            {/* Func */}
            <Col xs={24} sm={24} md={12} lg={2}>
              <Button type="primary" className="tablist-func-clock-btn">
                <PlusCircleOutlined />
                Thêm
              </Button>
              <Button type="primary" className="tablist-func-clock-btn">
                <DashboardOutlined />
                Thay
              </Button>
              <Button type="primary" className="tablist-func-clock-btn">
                <DownloadOutlined />
                Xuất
              </Button>
              <Button type="primary">
                <CloseCircleOutlined />
                Xóa
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  // collapse (Chi tiết đồng hồ)
  const itemsDetailClock = [
    {
      key: "4",
      label: "Chi tiết đồng hồ",
      children: (
        <>
          <Row>
            {/* Đơn vị HC */}
            <Col xs={24} sm={24} md={12} lg={8} className="gutter-item">
              <Form.Item name="" label="Đơn vị HC: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Đơn vị 1" },
                    { value: "2", label: "Đơn vị 2" },
                  ]}
                  placeholder="Chọn đơn vị"
                />
              </Form.Item>
            </Col>

            {/*  */}
            <Col xs={24} sm={24} md={12} lg={7} className="gutter-item">
              <Form.Item name="">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Đơn vị 1" },
                    { value: "2", label: "Đơn vị 2" },
                  ]}
                  placeholder="Chọn đơn vị"
                />
              </Form.Item>
            </Col>

            {/*  */}
            <Col xs={24} sm={24} md={12} lg={7}>
              <Form.Item name="">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Đơn vị 1" },
                    { value: "2", label: "Đơn vị 2" },
                  ]}
                  placeholder="Chọn đơn vị"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Vùng */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Vùng: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Vùng 1" },
                    { value: "2", label: "Vùng 2" },
                  ]}
                  placeholder="Chọn vùng"
                />
              </Form.Item>
            </Col>

            {/* Khu vực */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Khu vực: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Khu vực 1" },
                    { value: "2", label: "Khu vực 2" },
                  ]}
                  placeholder="Chọn khu vực"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Nhân viên */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Nhân viên: (*)">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Nhân viên 1" },
                    { value: "2", label: "Nhân viên 2" },
                  ]}
                  placeholder="Chọn nhân viên"
                />
              </Form.Item>
            </Col>

            {/* Tuyến đọc */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Tuyến đọc: (*)">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Tuyến đọc 1" },
                    { value: "2", label: "Tuyến đọc 2" },
                  ]}
                  placeholder="Chọn tuyến đọc"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Phạm vi */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Phạm vi: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Phạm vi 1" },
                    { value: "2", label: "Phạm vi 2" },
                  ]}
                  placeholder="Chọn phạm vi"
                />
              </Form.Item>
            </Col>

            {/* Mã */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Mã: (*)">
                <Input name="" placeholder="Nhập mã" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Đồng hồ block */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Đồng hồ block: ">
                <Select
                  fieldNames=""
                  options={[
                    { value: "1", label: "Đồng hồ block 1" },
                    { value: "2", label: "Đồng hồ block 2" },
                  ]}
                  placeholder="Chọn đồng hồ block"
                />
              </Form.Item>
            </Col>

            {/*  */}
            <Col xs={24} sm={24} md={12} lg={5} className="gutter-item">
              <Form.Item name="" label="Là đồng hồ phụ: ">
                <Button type="primary"></Button>
              </Form.Item>
            </Col>

            {/* Thứ tự */}
            <Col xs={24} sm={24} md={12} lg={5} className="gutter-item">
              <Form.Item name="" label="Thứ tự: ">
                <Input placeholder="Nhập thứ tự" />
              </Form.Item>
            </Col>

            {/* button (Thứ tự) */}
            <Col xs={24} sm={24} md={12} lg={1} className="gutter-item">
              <Button type="primary">
                <RedoOutlined />
              </Button>
            </Col>
          </Row>

          <Row>
            {/* Seri */}
            <Col xs={24} sm={24} md={12} lg={10} className="gutter-item">
              <Form.Item name="" label="Seri: ">
                <Input name="" placeholder="Nhập seri" />
              </Form.Item>
            </Col>

            {/* Checkbox (Seri) */}
            <Col xs={24} sm={24} md={12} lg={1}>
              <Form.Item name="">
                <Checkbox />
              </Form.Item>
            </Col>

            {/* Chỉ số bắt đầu */}
            <Col xs={24} sm={24} md={12} lg={7}>
              <Form.Item name="num_start" label="Chỉ số bắt đầu: ">
                <InputNumber name="num_start" placeholder="Số đầu" />
              </Form.Item>
            </Col>

            {/* Chỉ số cuối */}
            <Col xs={24} sm={24} md={12} lg={4}>
              <Form.Item name="num_end" label="Cuối: ">
                <InputNumber name="num_end" placeholder="Số cuối" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Seri chì */}
            <Col xs={24} sm={24} md={12} lg={6} className="gutter-item">
              <Form.Item name="" label="Seri chì: ">
                <Input name="" placeholder="Nhập seri chì" />
              </Form.Item>
            </Col>

            {/* Ngày lắp đặt */}
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={8}
              className="gutter-item gutter-item-date-picker"
            >
              <Form.Item name="" label="Ngày lắp đặt: ">
                <DatePicker name="" placeholder="Chọn ngày lắp đặt" />
              </Form.Item>
            </Col>

            {/* Ngày sử dụng */}
            <Col xs={24} sm={24} md={12} lg={8}>
              <Form.Item name="" label="Ngày sử dụng: ">
                <DatePicker
                  name=""
                  placeholder="Chọn ngày sử dụng"
                  className="gutter-item-date-picker"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Địa chỉ */}
            <Col xs={24} sm={24} md={12} lg={22} className="gutter-item">
              <Form.Item name="" label="Địa chỉ (*)">
                <Input name="" placeholder="Nhập địa chỉ" />
              </Form.Item>
            </Col>

            {/* Checkbox (Seri) */}
            <Col xs={24} sm={24} md={12} lg={1}>
              <Form.Item name="">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Trạng thái */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Trạng thái">
                <Select
                  fieldNames=""
                  options={[{ value: "1", label: "Đang sử dụng" }]}
                  placeholder="Chọn trạng thái"
                />
              </Form.Item>
            </Col>

            {/* Lý do hủy */}
            <Col xs={24} sm={24} md={12} lg={11}>
              <Form.Item name="" label="Lý do hủy">
                <Input name="" placeholder="Nhập lý do hủy" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Nước sản xuất */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Nước SX">
                <Select
                  fieldNames=""
                  options={[{ value: "1", label: "Nước 1" }]}
                  placeholder="Chọn nước"
                />
              </Form.Item>
            </Col>

            {/* Hãng sản xuất */}
            <Col xs={24} sm={24} md={12} lg={11}>
              <Form.Item name="" label="Hãng SX">
                <Select
                  fieldNames=""
                  options={[{ value: "1", label: "Nước 1" }]}
                  placeholder="Chọn hãng"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Kiểu đồng hồ */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Kiểu đồng hồ">
                <Select
                  fieldNames=""
                  options={[{ value: "1", label: "Kiểu 1" }]}
                  placeholder="Chọn kiểu đồng hồ"
                />
              </Form.Item>
            </Col>

            {/* Đường kính */}
            <Col xs={24} sm={24} md={12} lg={11}>
              <Form.Item name="" label="Đường kính">
                <Input name="" placeholder="Nhập đường kính" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            {/* Hộp bảo vệ */}
            <Col xs={24} sm={24} md={12} lg={12} className="gutter-item">
              <Form.Item name="" label="Hộp bảo vệ">
                <Select
                  fieldNames=""
                  options={[{ value: "1", label: "Hộp 1" }]}
                  placeholder="Chọn hộp bảo vệ"
                />
              </Form.Item>
            </Col>

            {/* Vị trí lắt đặt */}
            <Col xs={24} sm={24} md={12} lg={11}>
              <Form.Item name="" label="Vị trí lắt đặt">
                <Input name="" placeholder="Nhập vị trí lắt đặt" />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: (
              <div>
                {_tab.icon} {_tab.label}
              </div>
            ),
            key: _tab.id,
          };
        })}
        onChange={handleChangeTabs}
      />

      {/* Modal (Lập hợp đồng) */}
      <Modal
        open={openModal}
        onCancel={hideModal}
        width={2000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">
          Cập nhật thông tin hợp đồng
        </h2>

        <Form onFinish={handleSubmit} onFinishFailed={handleFailed}>
          <Row>
            {/* Mã khách hàng */}
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item name="code_customer" label="Mã khách hàng: ">
                <Input name="code_customer" placeholder="Nhập mã khách hàng" />
              </Form.Item>
            </Col>
          </Row>

          {/* Thông tin khách hàng */}
          <Row>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingRight: "10px" }}
            >
              <Collapse
                key="1"
                items={items}
                accordion={false}
                defaultActiveKey={["1"]}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Collapse
                key="3"
                items={itemsClock}
                accordion={false}
                defaultActiveKey={["3"]}
              />
            </Col>
          </Row>

          {/* Thông tin hợp đồng */}
          <Row className="space-col">
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              style={{ paddingRight: "10px" }}
            >
              <Collapse
                key="2"
                items={itemsInfoContract}
                accordion={false}
                defaultActiveKey={["2"]}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <Collapse
                key="4"
                items={itemsDetailClock}
                accordion={false}
                defaultActiveKey={["4"]}
              />
            </Col>
          </Row>

          {/* Bottom */}
          <Row justify="end">
            <Col xs={24} sm={24} md={12} lg={4}>
              <Button htmlType="submit" type="primary">
                <FormOutlined />
                Biên bản thỏa thuận
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={3}>
              <Button htmlType="submit" type="primary">
                <PrinterOutlined />
                In hợp đồng
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={3}>
              <Button htmlType="submit" type="primary">
                <SaveOutlined />
                Lưu và thêm tiếp
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={2} style={{ marginLeft: "28px" }}>
              <Button htmlType="submit" type="primary">
                <SaveOutlined />
                Lưu
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={1} style={{ marginRight: "28px" }}>
              <Button htmlType="submit" type="primary">
                <CloseCircleOutlined />
                Đóng
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default TabList;

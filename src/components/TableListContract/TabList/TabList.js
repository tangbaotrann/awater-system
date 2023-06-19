import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
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
} from "@ant-design/icons";
import { useState } from "react";

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

  // items content collapse
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
            <Col xs={24} sm={24} md={12} lg={2} className="gutter-item-chk">
              <Checkbox />
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
            <Col xs={24} sm={24} md={12} lg={1} className="gutter-item-chk">
              <Checkbox />
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
            <Col xs={24} sm={24} md={12} lg={1} className="gutter-item-chk">
              <Checkbox />
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

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey=""
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
            <Col xs={24} sm={24} md={12} lg={12}>
              <Collapse items={items} />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default TabList;

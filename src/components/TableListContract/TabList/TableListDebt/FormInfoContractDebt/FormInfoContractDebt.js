import {
  CloseCircleOutlined,
  CloseOutlined,
  EditOutlined,
  PlusCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row, Table } from "antd";

function FormInfoContractDebt({
  handleOpenModalUpdateInfoDebt,
  hideModal,
  tabList,
}) {
  // Cols
  const cols = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "code_debt",
      title: "Mã nợ",
      dataIndex: "code_debt",
    },
    {
      key: "name_debt",
      title: "Tên nợ",
      dataIndex: "name_debt",
    },
    {
      key: "name_type_debt",
      title: "Tên loại nợ",
      dataIndex: "name_type_debt",
    },
    {
      key: "date_loan",
      title: "Ngày vay",
      dataIndex: "date_loan",
    },
    {
      key: "money_loan",
      title: "Tiền vay",
      dataIndex: "money_loan",
    },
    {
      key: "install_pay",
      title: "Tiền trả góp",
      dataIndex: "install_pay",
    },
    {
      key: "money_paid",
      title: "Tiền đã trả",
      dataIndex: "money_paid",
    },
  ];

  // handle submit form (Thông tin hợp đồng nợ)
  const handleSubmit = (values) => {
    console.log("values ->", values);
  };

  // handle submit error (Thông tin hợp đồng nợ)
  const handleSubmitFailed = (error) => {
    console.log({ error });
  };

  return (
    <Form
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitFailed}
      fields={[
        { name: "fullName", value: tabList ? tabList?.fullName : "" },
        {
          name: "code_customer",
          value: tabList ? tabList?.code_customer : "",
        },
        { name: "address", value: tabList ? tabList?.address : "" },
        { name: "phone", value: tabList ? tabList?.phone : "" },
      ]}
    >
      {/* Info customer */}
      <Divider orientation="left">Thông tin khách hàng</Divider>

      {/* Tên KH + Mã KH */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="fullName" label="Tên KH" className="gutter-item">
            <Input name="fullName" placeholder="Thông tin khách hàng" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="code_customer" label="Mã KH">
            <Input name="code_customer" placeholder="Mã khách hàng" />
          </Form.Item>
        </Col>
      </Row>

      {/* Địa chỉ + Sđt */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="address" label="Địa chỉ" className="gutter-item">
            <Input name="address" placeholder="Địa chỉ" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="phone" label="Điện thoại">
            <Input name="phone" placeholder="Điện thoại" />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* Info Contract */}
      <Divider orientation="left">Thông tin hợp đồng</Divider>

      {/* Số hợp đồng */}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item name="" label="Số hợp đồng" className="gutter-item">
            <Input name="" placeholder="Số hợp đồng" />
          </Form.Item>
        </Col>
      </Row>

      <Divider />

      {/* render table */}
      <div className="container-tbl-debt">
        <Table columns={cols} rowKey="index" size="small"></Table>
      </div>

      <Divider />

      {/* Func buttons */}
      <div className="debt-func-btn">
        <Button htmlType="submit" type="primary" className="space-btn-item">
          <RedoOutlined />
          Làm mới
        </Button>

        <Button
          htmlType="submit"
          onClick={handleOpenModalUpdateInfoDebt}
          type="primary"
          className="space-btn-item"
        >
          <PlusCircleOutlined />
          Thêm mới
        </Button>

        <Button htmlType="submit" type="primary" className="space-btn-item">
          <EditOutlined />
          Sửa
        </Button>

        <Button htmlType="submit" type="primary" className="space-btn-item">
          <CloseCircleOutlined />
          Xóa
        </Button>

        <Button onClick={() => hideModal()} type="primary">
          <CloseOutlined />
          Đóng
        </Button>
      </div>
    </Form>
  );
}

export default FormInfoContractDebt;

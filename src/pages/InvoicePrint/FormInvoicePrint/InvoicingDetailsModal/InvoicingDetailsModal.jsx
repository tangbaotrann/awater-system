// InvoicingDetailsModal.jsx

import {
  CloseOutlined,
  PrinterOutlined,
  SearchOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Modal, Form, Input, Table, Button, theme, Row, Col } from "antd";

const InvoicingDetailsModal = ({ visible, onCancel, data }) => {
  const [form1] = Form.useForm();
  const { token } = theme.useToken();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Modal
      title="Chi tiết phiếu in"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form1}
        onFinish={onFinish}
        name="nest-messages"
        style={{
          maxWidth: "none",
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
      >
        <Row>
          <Col span={24}>
            <Form.Item label="Mã khách hàng">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Số hợp đồng">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Số hóa đơn">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Tên khách hàng">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button icon={<SearchOutlined />} size="small" type="primary">
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>
      <Table
        dataSource={data}
        size="small"
        scroll={{ x: 2000, y: 150 }}
        columns={[
          {
            title: "Số thứ tự",
            dataIndex: "order",
            key: "order",
          },
          {
            title: "Sê ri",
            dataIndex: "serialNumber",
            key: "serialNumber",
          },
          {
            title: "Số hóa đơn",
            dataIndex: "invoiceNumber",
            key: "invoiceNumber",
          },
          {
            title: "Tên khách hàng",
            dataIndex: "customerName",
            key: "customerName",
          },
          {
            title: "Số hợp đồng",
            dataIndex: "contractNumber",
            key: "contractNumber",
          },
          {
            title: "Tiêu thụ",
            dataIndex: "consumption",
            key: "consumption",
          },
          {
            title: "Thành tiền",
            dataIndex: "amountDue",
            key: "amountDue",
          },
          {
            title: "Phí VAT",
            dataIndex: "vatFee",
            key: "vatFee",
          },
          {
            title: "Phí BVMT",
            dataIndex: "environmentalFee",
            key: "environmentalFee",
          },
          {
            title: "Tổng tiền",
            dataIndex: "totalAmountDue",
            key: "totalAmountDue",
          },
          {
            title: "Ngày in",
            dataIndex: "printDate",
            key: "printDate",
          },
          {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "Ghi chú",
            dataIndex: "notes",
            key: "notes",
          },
        ]}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button icon={<PrinterOutlined />} size="small" type="primary">
          Cập nhật hóa đơn chưa in
        </Button>
        <Button icon={<WarningOutlined />} size="small" type="primary">
          Cập nhật hóa đơn hỏng
        </Button>
        <Button
          icon={<CloseOutlined />}
          size="small"
          type="primary"
          onClick={onCancel}
        >
          Đóng
        </Button>
      </div>
    </Modal>
  );
};

export default InvoicingDetailsModal;

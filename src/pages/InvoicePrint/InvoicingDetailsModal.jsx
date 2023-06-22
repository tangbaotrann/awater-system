// InvoicingDetailsModal.jsx
import { useState } from "react";
import { Modal, Form, Input, Table, Button } from "antd";

const InvoicingDetailsModal = ({ visible, onCancel, data }) => {
  return (
    <Modal
      title="Chi tiết phiếu in"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form layout="vertical">
        <Form.Item label="Mã khách hàng">
          <Input />
        </Form.Item>
        <Form.Item label="Số hợp đồng">
          <Input />
        </Form.Item>
        <Form.Item label="Số hóa đơn">
          <Input />
        </Form.Item>
        <Form.Item label="Tên khách hàng">
          <Input />
        </Form.Item>
        <Button>Tìm kiếm</Button>
      </Form>
      <Table
        dataSource={data}
        size="small"
        pagination={{
          current: 1,
          total: 10000,
          pageSize: 50,
        }}
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
        <Button type="primary">Cập nhật hóa đơn chưa in</Button>
        <Button type="primary">Cập nhật hóa đơn hỏng</Button>
        <Button type="primary" onClick={onCancel}>
          Đóng
        </Button>
      </div>
    </Modal>
  );
};

export default InvoicingDetailsModal;

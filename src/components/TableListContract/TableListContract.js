import { Button, Modal, Table } from "antd";
import { UndoOutlined } from "@ant-design/icons";
import { useState } from "react";

import "./TableListContract.css";
import { dataContract, dataContractOnModal } from "../../utils/dataContract";

function TableListContract() {
  const [open, setOpen] = useState(false);

  // cols table main
  const cols = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      title: "",
      render: () => {
        return (
          <Button className="contract-tbl-icon-btn">
            <UndoOutlined />
          </Button>
        );
      },
    },
    {
      key: "type_customer",
      title: "Loại KH",
      dataIndex: "type_customer",
    },
    {
      key: "fullName",
      title: "Tên khách hàng",
      dataIndex: "fullName",
    },
    {
      key: "code_customer",
      title: "Mã khách hàng",
      dataIndex: "code_customer",
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      key: "phone",
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
  ];

  // hide modal
  const hideModal = () => {
    setOpen(false);
  };

  // cols table modal
  const colsTableModal = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "code_clock",
      title: "Mã đồng hồ",
      dataIndex: "code_clock",
    },
    {
      key: "status",
      title: "Tình trạng SD",
      dataIndex: "status",
    },
    {
      key: "num_start",
      title: "Chỉ số đầu",
      dataIndex: "num_start",
    },
    {
      key: "write_order",
      title: "Thứ tự ghi",
      dataIndex: "write_order",
    },
    {
      key: "seri",
      title: "Seri",
      dataIndex: "seri",
    },
    {
      key: "line_reading",
      title: "Tuyến đọc",
      dataIndex: "line_reading",
    },
    {
      key: "address_use",
      title: "Địa chỉ sử dụng",
      dataIndex: "address_use",
    },
    {
      key: "block_clock",
      title: "Đồng hồ khối",
      dataIndex: "block_clock",
    },
    {
      key: "type_clock",
      title: "Kiểu đồng hồ",
      dataIndex: "type_clock",
    },
    {
      key: "date_use",
      title: "Ngày sử dụng",
      dataIndex: "date_use",
    },
    {
      key: "date_install",
      title: "Ngày lắp đặt",
      dataIndex: "date_install",
    },
  ];

  return (
    <div className="container-tbl-contract">
      <Table
        columns={cols}
        dataSource={dataContract.map((_contract, index) => ({
          index: index + 1,
          type_customer: _contract.type_customer,
          fullName: _contract.fullName,
          code_customer: _contract.code_customer,
          address: _contract.address,
          phone: _contract.phone,
          email: _contract.email,
        }))}
        pagination={{
          pageSize: 10,
        }}
        rowKey="index"
        onRow={(record, index) => {
          return {
            onClick: () => {
              console.log(record);
              setOpen(true);
            },
          };
        }}
      ></Table>

      {/* Show modal contract */}
      <Modal
        open={open}
        onCancel={hideModal}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        className="container-modal-tbl-contract"
        width={1600}
        centered={true}
      >
        <div className="inner-modal-tbl-contract">
          <Table
            columns={colsTableModal}
            dataSource={dataContractOnModal.map((_contract, index) => ({
              index: index + 1,
              code_clock: _contract.code_clock,
              status: _contract.status,
              num_start: _contract.num_start,
              write_order: _contract.write_order,
              seri: _contract.seri,
              line_reading: _contract.line_reading,
              address_use: _contract.address_use,
              block_clock: _contract.block_clock,
              type_clock: _contract.type_clock,
              date_use: _contract.date_use,
              date_install: _contract.date_install,
            }))}
            rowKey="index"
            pagination={{
              pageSize: 5,
            }}
          ></Table>
        </div>
      </Modal>
    </div>
  );
}

export default TableListContract;

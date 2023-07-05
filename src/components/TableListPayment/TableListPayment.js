import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Table } from "antd";
import { UnlockOutlined } from "@ant-design/icons";

import "./TableListPayment.css";
import { dataOnModalDoubleClick, dataPayment } from "../../utils/dataPayment";
import CustomRowTooltip from "../CustomRowTooltip/CustomRowTooltip";
import tabListContractSlice from "../../redux/slices/tabListContractSlice/tabListContractSlice";
import { btnClickTabListContractSelector } from "../../redux/selector";
import { formatPrice } from "../../utils/formatPrice";

function TableListPayment() {
  const [modalDoubleClick, setModalDoubleClick] = useState(false);

  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);

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
            <UnlockOutlined />
          </Button>
        );
      },
    },
    {
      key: "status_payment",
      title: "Thanh toán",
      dataIndex: "status_payment",
    },
    {
      key: "fall_day",
      title: "Ngày thu",
      dataIndex: "fall_day",
    },
    {
      key: "collector",
      title: "Người thu",
      dataIndex: "collector",
    },
    {
      key: "total",
      title: "Tổng tiền",
      dataIndex: "total",
    },
    {
      key: "amount_spent",
      title: "Số tiền đã TT",
      dataIndex: "amount_spent",
    },
    {
      key: "code_contract",
      title: "Số hợp đồng",
      dataIndex: "code_contract",
    },
    {
      key: "line_reading",
      title: "Tuyến đọc",
      dataIndex: "line_reading",
    },
    {
      key: "fullName",
      title: "Tên khách hàng",
      dataIndex: "fullName",
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
      key: "payments",
      title: "Hình thức TT",
      dataIndex: "payments",
    },
    {
      key: "seri_bill",
      title: "Seri hóa đơn",
      dataIndex: "seri_bill",
    },
    {
      key: "num_bill",
      title: "Số hóa đơn",
      dataIndex: "num_bill",
    },
    {
      key: "consume",
      title: "Tiêu thụ",
      dataIndex: "consume",
    },
    {
      key: "into_money",
      title: "Thành tiền",
      dataIndex: "into_money",
    },
    {
      key: "dtdn",
      title: "Phí DTĐN",
      dataIndex: "dtdn",
    },
    {
      key: "bvmt",
      title: "Phí BVMT",
      dataIndex: "bvmt",
    },
    {
      key: "vat",
      title: "Phí VAT",
      dataIndex: "vat",
    },
    {
      key: "date_of_contract",
      title: "Ngày lập HĐ",
      dataIndex: "date_of_contract",
    },
    {
      key: "note",
      title: "Ghi chú TT",
      dataIndex: "note",
    },
  ];

  const colsTblModalDoubleClick = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "category",
      title: "Hạng mục",
      dataIndex: "category",
    },
    {
      key: "quantity",
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      key: "price",
      title: "Đơn giá",
      dataIndex: "price",
    },
    {
      key: "into_money",
      title: "Thành tiền",
      dataIndex: "into_money",
    },
  ];

  // hide modal double clicked
  const hideModalDoubleClick = () => {
    setModalDoubleClick(false);
  };

  // handle row select
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(
      tabListContractSlice.actions.btnClickTabListContract(selectedRows[0])
    );
  };

  return (
    <>
      <div className="container-tbl-payment">
        {/* Table payment main */}
        <Table
          columns={cols}
          dataSource={dataPayment.map((_pay, index) => ({
            index: index + 1,
            status_payment: _pay.status_payment,
            fall_day: _pay.fall_day,
            collector: _pay.collector,
            total: formatPrice(_pay.total),
            amount_spent: formatPrice(_pay.amount_spent),
            code_contract: _pay.code_contract,
            line_reading: _pay.line_reading,
            fullName: _pay.fullName,
            address: _pay.address,
            phone: _pay.phone,
            payments: _pay.payments,
            seri_bill: _pay.seri_bill,
            num_bill: _pay.num_bill,
            consume: _pay.consume,
            into_money: formatPrice(_pay.into_money),
            dtdn: _pay.dtdn,
            bvmt: _pay.bvmt,
            vat: _pay.vat,
            date_of_contract: _pay.date_of_contract,
            note: _pay.note,
          }))}
          rowKey="index"
          components={{
            body: {
              row: CustomRowTooltip,
            },
          }}
          onRow={(record, index) => {
            return {
              onDoubleClick: () => {
                console.log(record);
                setModalDoubleClick(true);
              },
            };
          }}
          rowSelection={{
            type: "radio",
            onChange: (selectedRowKeys, selectedRows) =>
              handleRowSelection(selectedRowKeys, selectedRows),
            selectedRowKeys: tabList ? [tabList.index] : [],
          }}
          size="small"
          scroll={{
            x: 2600,
          }}
        ></Table>
      </div>

      {/* Show modal when double click on row (Thanh toán)  */}
      <Modal
        open={modalDoubleClick}
        onCancel={hideModalDoubleClick}
        width={1600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        {/* render table */}
        <Table
          columns={colsTblModalDoubleClick}
          dataSource={dataOnModalDoubleClick.map((_payChild, index) => ({
            index: index + 1,
            category: _payChild.category,
            quantity: _payChild.quantity,
            price: formatPrice(_payChild.price),
            into_money: formatPrice(_payChild.into_money),
          }))}
          rowKey="index"
          size="small"
        ></Table>
      </Modal>
    </>
  );
}

export default TableListPayment;

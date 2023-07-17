import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderPriceObj from "../../../components/CategoryHeader/CategoryHeaderPriceObj";

import ModalAddPriceList from "./components/ModalAddPriceList/ModalAddPriceList";
import { fetchApiAllPriceObject } from "../../../redux/slices/priceObjectSlice/priceObjectSlice";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllPriceObjectSelector,
} from "../../../redux/selector";

import { Tooltip, Table } from "antd";
import { RedoOutlined } from "@ant-design/icons";
const ManagementPriceList = () => {
  const [isOpenModalAddPriceList, setIsOpenModalAddPriceList] = useState(false);

  const dispatch = useDispatch();
  const tabListPO = useSelector(btnClickTabListInvoicePrintSelector);
  const priceObject = useSelector(fetchApiAllPriceObjectSelector);
  console.log(priceObject);
  useEffect(() => {
    dispatch(fetchApiAllPriceObject());
  }, []);

  const handleOk = (type) => {
    if (type === "addPriceList") {
      setIsOpenModalAddPriceList(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "addPriceList") {
      setIsOpenModalAddPriceList(false);
    }
  };
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Tên đối tượng giá",
      dataIndex: "keyId",
      key: "keyId",
      // width: 70,
    },
    {
      title: "Đối tượng giá",
      key: "danhSachDoiTuongGiaId",
      dataIndex: "danhSachDoiTuongGiaId",
      // width: 140,
    },
    {
      title: "Từ ngày",
      key: "ngayBatDau",
      dataIndex: "ngayBatDau",
      // width: 140,
    },
    {
      title: "Đến Ngày",
      key: "ngayKetThuc",
      dataIndex: "ngayKetThuc",
    },
    {
      title: "Phí VAT (%)",
      key: "vat",
      dataIndex: "vat",
    },
    {
      title: "Phí bảo vệ môi trường",
      key: "phiBvmt",
      dataIndex: "phiBvmt",
    },
  ];

  // handle row select
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
        selectedRows[0]
      )
    );
  };

  // handle un-check radio
  const handleUncheckRadio = () => {
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <HeaderPriceObj
          setIsOpenModalAddPriceList={setIsOpenModalAddPriceList}
        />
      </div>
      {/* <div className="management-price-subject-table"> */}
      <div>
        {/* <TablePriceList /> */}

        <Table
          style={{ marginTop: "10px" }}
          size="small"
          bordered
          rowKey="index"
          scroll={{ x: 1000, y: 480 }}
          columns={columns.map((column) => ({
            ...column,
            className: "cell-wrap",
          }))}
          dataSource={priceObject.map((_priceObject, index) => ({
            index: index + 1,
            keyId: _priceObject.keyId,
            danhSachDoiTuongGiaId: _priceObject.danhSachDoiTuongGiaId,
            ngayBatDau: _priceObject.ngayBatDau,
            ngayKetThuc: _priceObject.ngayKetThuc,
            vat: _priceObject.vat,
            phiBvmt: _priceObject.phiBvmt,
          }))}
          onRow={(record, index) => {
            return {
              onClick: () => {
                // clicked row to check radio
                dispatch(
                  tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
                    record
                  )
                );
              },
            };
          }}
          rowSelection={{
            type: "radio",
            columnTitle: () => {
              return (
                <Tooltip title="Bỏ chọn hàng hiện tại.">
                  <RedoOutlined
                    className="icon-reset-rad-btn"
                    onClick={handleUncheckRadio}
                  />
                </Tooltip>
              );
            },
            onChange: (selectedRowKeys, selectedRows) =>
              handleRowSelection(selectedRowKeys, selectedRows),
            selectedRowKeys: tabListPO ? [tabListPO.index] : [],
          }}
        />
      </div>
      <ModalAddPriceList
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddPriceList}
      />
    </div>
  );
};

export default ManagementPriceList;

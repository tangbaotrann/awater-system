import React from "react";
import { Table } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./TableReading.css";
import tabListInvoicePrintSlice from "../../../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "gmail" : "key",
    dataIndex: showHeader ? "gmail" : "key",
    align: "center",
    width: 140,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    key: "codeLine",
    title: showHeader ? "Mã tuyến" : "",
    dataIndex: "codeLine",
    width: 165,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    key: "nameLine",
    title: showHeader ? "Tên tuyến" : "",
    dataIndex: "nameLine",
    width: 140,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    key: "cashier",
    title: showHeader ? "Nhân viên thu tiền" : "",
    dataIndex: "cashier",
    width: 180,
    ellipsis: {
      showTitle: false,
    },
  },
  // {
  //   key: "indexingPeriod",
  //   title: showHeader ? "Kỳ ghi chỉ số" : "",
  //   dataIndex: "indexingPeriod",
  //   width: 130,
  // },
  {
    key: "area",
    title: showHeader ? "Khu vực" : "",
    dataIndex: "area",
    width: 130,
    ellipsis: {
      showTitle: false,
    },
  },
  // {
  //   key: "unit",
  //   title: showHeader ? "Đơn vị" : "",
  //   dataIndex: "unit",
  // },
];

const TableReading = () => {
  const dispatch = useDispatch();
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const danhSachNguoiDung = useSelector(state => state.nguoidung.danhSachNguoiDung)
  const danhSachTuyenDoc = useSelector(state => state.tuyendoc.danhSachTuyenDoc)
  const listAreas = useSelector(state => state.areaSlice.data);

  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(btnClickTabListContract(selectedRows[0]));
  };

  const data = danhSachNguoiDung.map((nguoiDung, i) => {

    let tuyenDocNguoiDung;
    if (danhSachTuyenDoc && danhSachTuyenDoc.length > 0) {
      tuyenDocNguoiDung = danhSachTuyenDoc.filter((tuyenDoc) => {
        return tuyenDoc.nguoiQuanLyId === nguoiDung.id;
      });
    }

    // const areas = listAreas.filter(() => {})
    const tuyenDocNguoiDungMoi = tuyenDocNguoiDung.map((nguoiDung) => {
      let name = '';
      listAreas.forEach((area) => {
        if (nguoiDung.khuVucId === area.id) {
          name = area.tenKhuVuc;
        }
      });
      return { ...nguoiDung, name };
    });

    return {
      gmail: nguoiDung.email,
      key: nguoiDung.id,
      data: tuyenDocNguoiDungMoi && tuyenDocNguoiDungMoi.length > 0 && tuyenDocNguoiDungMoi?.map((tuyenDoc, i) => {
        return {
          key: i,
          index: i,
          codeLine: tuyenDoc.keyId,
          nameLine: tuyenDoc.tenTuyen,
          cashier: tuyenDoc.nguoiThuTienId,
          indexingPeriod: `Kỳ ghi ${i}`,
          area: tuyenDoc.name,
          unit: `Đơn vị ${i}`,
        }
      })
    }
  })

  // console.log('danh sach KhuVuc', listAreas);
  // console.log('danh sach NguoiDung', danhSachNguoiDung);
  // console.log('danh sach TuyenDoc', danhSachTuyenDoc);
  return (
    <Table
      className="parent-table"
      columns={readingColumns(true)}
      dataSource={data}
      scroll={{
        // y: 380,
        x: 1100,
        scrollToFirstRowOnChange: true,
      }}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <Table
              className="child-table"
              columns={readingColumns(false).map((column) => ({
                ...column,
                render: (text) => <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>{text}</div>,
              }))}
              dataSource={record.data}
              pagination={false}
              rowKey="key"
              scroll={{
                x: 1100,
              }}
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
                onClick: (selectedRowKeys, selectedRows) => {
                  console.log(selectedRows)
                  // handleRowSelection(selectedRowKeys, selectedRows)
                },
                selectedRowKeys: tabList ? [tabList.key] : [],
              }}
              bordered
            />
          );
        },
        // onExpand: (expanded, record) => {
        //   console.log(record);
        // },
      }}
    />
  );
};

export default TableReading;

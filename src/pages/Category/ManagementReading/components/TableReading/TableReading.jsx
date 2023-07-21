import React from "react";
import { Table, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RedoOutlined } from "@ant-design/icons";

import {
  btnClickTabListReading,
  tabListReadingSlice,
} from "../../../../../redux/slices/tabListReading/tabListReaingSlice";
import "./TableReading.css";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "gmail" : "key",
    dataIndex: showHeader ? "gmail" : "key",
    align: "center",
    width: 80
  },
  {
    key: "KeyId",
    title: showHeader ? "" : "Mã tuyến",
    dataIndex: "KeyId",
    width: 100,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    key: "tenTuyen",
    title: showHeader ? "" : "Tên tuyến",
    dataIndex: "tenTuyen",
    width: 140,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    key: "nguoiThuTienId",
    title: showHeader ? "" : "Nhân viên thu tiền",
    dataIndex: "nguoiThuTienId",
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
    key: "tenKhuVuc",
    title: showHeader ? "" : "Khu vực",
    dataIndex: "tenKhuVuc",
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
  const danhSachNguoiDung = useSelector(
    (state) => state.nguoidung.danhSachNguoiDung
  );
  const danhSachTuyenDoc = useSelector(
    (state) => state.tuyendoc.danhSachTuyenDoc
  );
  const listAreas = useSelector((state) => state.areaSlice.data);
  const rowSelected = useSelector(
    (state) => state.tabListReadingSlice.rowSelected
  );

  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(btnClickTabListReading(selectedRows[0]));
  };

  const handleUncheckRadio = () => {
    dispatch(tabListReadingSlice.actions.btnClickTabListReading(null));
  };

  const data =
    danhSachNguoiDung &&
    danhSachNguoiDung.length > 0 &&
    danhSachNguoiDung.map((nguoiDung, i) => {
      let tuyenDocNguoiDung;
      if (danhSachTuyenDoc && danhSachTuyenDoc.length > 0) {
        tuyenDocNguoiDung = danhSachTuyenDoc.filter((tuyenDoc) => {
          return tuyenDoc.nguoiQuanLyId === nguoiDung.id;
        });
      }

      const tuyenDocNguoiDungMoi = tuyenDocNguoiDung?.map((nguoiDung) => {
        let name = "";
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
        data:
          tuyenDocNguoiDungMoi &&
          tuyenDocNguoiDungMoi.length > 0 &&
          tuyenDocNguoiDungMoi?.map((tuyenDoc, i) => {
            // console.log({tuyenDoc});
            return {
              key: i,
              index: i,
              KeyId: tuyenDoc.keyId,
              tenTuyen: tuyenDoc.tenTuyen,
              nguoiThuTienId: tuyenDoc.nguoiThuTienId,
              nguoiQuanLyId: tuyenDoc.nguoiQuanLyId,
              // indexingPeriod: `Kỳ ghi ${i}`,
              tenKhuVuc: tuyenDoc.name,
              khuVucId: tuyenDoc.khuVucId,
              // unit: `Đơn vị ${i}`,
            };
          }),
      };
    });

    console.log(rowSelected);
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
                render: (text) => (
                  <div
                    style={{ wordWrap: "break-word", wordBreak: "break-all" }}
                  >
                    {text}
                  </div>
                ),
              }))}
              dataSource={record.data}
              pagination={false}
              rowKey="index"
              scroll={{
                x: 1100,
              }}
              onRow={(record, index) => {
                return {
                  onClick: () => {
                    // clicked row to dispatch key to store
                    // console.log('record dispatch: ', record);
                    dispatch(
                      tabListReadingSlice.actions.btnClickTabListReading(record)
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
                selectedRowKeys: rowSelected ? [rowSelected.index] : [],
              }}
              bordered
            />
          );
        },
      }}
    />
  );
};

export default TableReading;

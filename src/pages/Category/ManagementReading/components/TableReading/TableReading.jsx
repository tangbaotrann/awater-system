import React, { useEffect } from "react";
import { Table } from "antd";

import { useDispatch, useSelector } from "react-redux";
import tabListContractSlice, {
  btnClickTabListContract,
} from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./TableReading.css";
import {
  btnClickTabListContractSelector,
  fetchApiAllReadingSelector,
} from "../../../../../redux/selector";
import { fetchApiAllReading } from "../../../../../redux/slices/readingSlice/readingSlice";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "nguoiQuanLyId" : "key",
    dataIndex: showHeader ? "nguoiQuanLyId" : "key",
    align: "center",
    width: 140,
  },
  {
    key: "index",
    title: showHeader ? "STT" : "",
    dataIndex: "index",
    align: "center",
    width: 70,
  },
  {
    key: "maTuyen",
    title: showHeader ? "Mã tuyến" : "",
    dataIndex: "maTuyen",
    width: 140,
  },
  {
    key: "tenTuyen",
    title: showHeader ? "Tên tuyến" : "",
    dataIndex: "tenTuyen",
    width: 140,
  },
  {
    key: "nguoiThuTienId",
    title: showHeader ? "Nhân viên thu tiền" : "",
    dataIndex: "nguoiThuTienId",
    width: 180,
  },
  // {
  //   key: "indexingPeriod",
  //   title: showHeader ? "Kỳ ghi chỉ số" : "",
  //   dataIndex: "indexingPeriod",
  //   width: 130,
  // },
  {
    key: "khuVucId",
    title: showHeader ? "Khu vực" : "",
    dataIndex: "khuVucId",
    width: 130,
  },
  // {
  //   key: "unit",
  //   title: showHeader ? "Đơn vị" : "",
  //   dataIndex: "unit",
  // },
];

const TableReading = () => {
  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);
  const readings = useSelector(fetchApiAllReadingSelector);

  // console.log(readings);

  useEffect(() => {
    dispatch(fetchApiAllReading());
  }, []);

  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(btnClickTabListContract(selectedRows[0]));
  };

  const paginationOptions = {
    defaultPageSize: 10,
    pageSizeOptions: ["10", "25", "50"],
    showSizeChanger: true,
  };

  return (
    <Table
      rowKey="index"
      className="parent-table"
      columns={readingColumns(true)}
      dataSource={
        readings?.length <= 0
          ? []
          : readings.map((_reading, index) => ({
              index: index + 1,
              nguoiQuanLyId: _reading.nguoiQuanLyId,
            }))
      }
      scroll={{
        y: 380,
        x: 1100,
        scrollToFirstRowOnChange: true,
      }}
      pagination={paginationOptions}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <Table
              rowKey={record.index}
              className="child-table"
              columns={readingColumns(false)}
              dataSource={
                readings?.length <= 0
                  ? []
                  : readings.map((_reading, index) => ({
                      index: index + 1,
                      id: _reading.id,
                      maTuyen: _reading.maTuyen,
                      tenTuyen: _reading.tenTuyen,
                      nguoiThuTienId: _reading.nguoiThuTienId,
                      khuVucId: _reading.khuVucId,
                    }))
              }
              pagination={false}
              scroll={{
                x: 1100,
              }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleRowSelection(rowIndex, record);
                    dispatch(
                      tabListContractSlice.actions.btnClickTabListContract(
                        record
                      )
                    );
                  }, // click row
                };
              }}
              rowSelection={{
                type: "radio",
                onChange: (selectedRowKeys, selectedRows) =>
                  handleRowSelection(selectedRowKeys, selectedRows),
                selectedRowKeys: tabList ? [tabList.key] : [],
              }}
            />
          );
        },
        onExpand: (expanded, record) => {
          console.log(expanded, record);
        },
      }}
    />
  );
};

export default TableReading;

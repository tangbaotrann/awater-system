import React from "react";
import { Table } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./TableReading.css";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "gmail" : "key",
    dataIndex: showHeader ? "gmail" : "key",
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
    key: "codeLine",
    title: showHeader ? "Mã tuyến" : "",
    dataIndex: "codeLine",
    width: 140,
  },
  {
    key: "nameLine",
    title: showHeader ? "Tên tuyến" : "",
    dataIndex: "nameLine",
    width: 140,
  },
  {
    key: "cashier",
    title: showHeader ? "Nhân viên thu tiền" : "",
    dataIndex: "cashier",
    width: 180,
  },
  {
    key: "indexingPeriod",
    title: showHeader ? "Kỳ ghi chỉ số" : "",
    dataIndex: "indexingPeriod",
    width: 130,
  },
  {
    key: "area",
    title: showHeader ? "Khu vực" : "",
    dataIndex: "area",
    width: 130,
  },
  {
    key: "unit",
    title: showHeader ? "Đơn vị" : "",
    dataIndex: "unit",
  },
];

const TableReading = () => {
  const readingData = [];
  for (let i = 0; i <= 10; i++) {
    readingData.push({
      gmail: `${i}@gmail.com`,
      key: i,
      data: [
        {
          key: i,
          index: i,
          codeLine: `Mã tuyến ${i}`,
          nameLine: `Tên tuyến ${i}`,
          cashier: `Nhân viên thu tiền ${i}`,
          indexingPeriod: `Kỳ ghi ${i}`,
          area: `Khu vực ${i}`,
          unit: `Đơn vị ${i}`,
        },
      ],
    });
  }
  const dispatch = useDispatch();
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
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
      className="parent-table"
      columns={readingColumns(true)}
      dataSource={readingData}
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
              className="child-table"
              columns={readingColumns(false)}
              dataSource={record.data}
              pagination={false}
              rowKey="key"
              scroll={{
                x: 1100,
              }}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleRowSelection(rowIndex, record);
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

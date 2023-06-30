import React from "react";
import { Table } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./TableReading.css";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "gmail" : "key",
    dataIndex: showHeader ? "gmail" : "key",
    width: "15vw",
    align: "center",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "index",
    title: showHeader ? "STT" : "",
    dataIndex: "index",
    width: "4vw",
    align: "center",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "codeLine",
    title: showHeader ? "Mã tuyến" : "",
    dataIndex: "codeLine",
    width: "8vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "nameLine",
    title: showHeader ? "Tên tuyến" : "",
    dataIndex: "nameLine",
    width: "15vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "cashier",
    title: showHeader ? "Nhân viên thu tiền" : "",
    dataIndex: "cashier",
    width: "15vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "indexingPeriod",
    title: showHeader ? "Kỳ ghi chỉ số" : "",
    dataIndex: "indexingPeriod",
    width: "10vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "area",
    title: showHeader ? "Khu vực" : "",
    dataIndex: "area",
    width: "10vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "unit",
    title: showHeader ? "Đơn vị" : "",
    dataIndex: "unit",
    width: "10vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
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
      columns={readingColumns(true)}
      dataSource={readingData}
      scroll={{
        y: 520,
        x: 1200,
        scrollToFirstRowOnChange: true,
      }}
      pagination={paginationOptions}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <Table
              columns={readingColumns(false)}
              dataSource={record.data}
              pagination={false}
              rowKey="key"
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

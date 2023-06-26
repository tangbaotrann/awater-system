import React from "react";
import { Table, Collapse } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";
import { v4 as uuidv4 } from "uuid";

import "./TableReading.css";

const readingColumns = (showHeader) => [
  {
    key: showHeader ? "gmail" : "key",
    dataIndex: showHeader ? "gmail" : "key",
    width: "4vw",
    align: "center",
  },
  {
    key: "index",
    title: showHeader ? "STT" : "",
    dataIndex: "index",
    width: "4vw",
    align: "center",
  },
  {
    key: "codeLine",
    title: showHeader ? "Mã tuyến" : "",
    dataIndex: "codeLine",
    width: "15vw",
  },
  {
    key: "nameLine",
    title: showHeader ? "Tên tuyến" : "",
    dataIndex: "nameLine",
    width: "30vw",
  },
  {
    key: "cashier",
    title: showHeader ? "Nhân viên thu tiền" : "",
    dataIndex: "cashier",
    width: "25vw",
  },
  {
    key: "indexingPeriod",
    title: showHeader ? "Kỳ ghi chỉ số" : "",
    dataIndex: "indexingPeriod",
    width: "25vw",
  },
  {
    key: "area",
    title: showHeader ? "Khu vực" : "",
    dataIndex: "area",
    width: "10vw",
  },
  {
    key: "unit",
    title: showHeader ? "Đơn vị" : "",
    dataIndex: "unit",
    width: "10vw",
  },
];

const TableReading = () => {
  const readingData = [];
  for (let i = 0; i <= 10; i++) {
    readingData.push({
      gmail: `${i}@gmail.com`,
      key: uuidv4(),
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
  const readingDataChildren = [];
  for (let i = 0; i <= 10; i++) {
    readingDataChildren.push({
      key: i,
      index: i,
      codeLine: `Mã tuyến ${i}`,
      nameLine: `Tên tuyến ${i}`,
      cashier: `Nhân viên thu tiền ${i}`,
      indexingPeriod: `Kỳ ghi ${i}`,
      area: `Khu vực ${i}`,
      unit: `Đơn vị ${i}`,
    });
  }
  const dispatch = useDispatch();
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(btnClickTabListContract(selectedRows[0]));
  };
  return (
    <Table
      columns={readingColumns(true)}
      dataSource={readingData}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <Table
              columns={readingColumns(false)}
              dataSource={record.data}
              pagination={false}
              rowKey="key"
              rowSelection={{
                type: "radio",
                onChange: (selectedRowKeys, selectedRows) =>
                  handleRowSelection(selectedRowKeys, selectedRows),
                selectedRowKeys: tabList ? [tabList.key] : [],
              }}
            />
          );
        },
      }}
    />
  );
};

export default TableReading;

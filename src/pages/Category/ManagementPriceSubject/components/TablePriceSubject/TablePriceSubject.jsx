import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

const priceSubjectColumns = [
  {
    key: "key",
    title: "",
    dataIndex: "key",
    width: "4vw",
    minWidth: "4vw",
    maxWight: "8vw",
    align: "center",
  },
  {
    key: "symbol",
    title: "Ký hiệu",
    dataIndex: "symbol",
    width: "15vw",
  },
  {
    key: "describe",
    title: "Mô tả",
    dataIndex: "describe",
    width: "45vw",
  },
  {
    key: "unit",
    title: "Đơn vị tính",
    dataIndex: "unit",
    width: "15vw",
  },
];
const priceSubjectData = [];
for (let i = 0; i <= 500; i++) {
  priceSubjectData.push({
    key: i,
    symbol: `Ký hiệu ${i}`,
    describe: `Mô tả ${i}`,
    unit: `Đơn vị tính ${i}`,
  });
}

const TablePriceSubject = () => {
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);

  const dispatch = useDispatch();
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
    dispatch(btnClickTabListContract(selectedRows[0]));
  };

  const paginationOptions = {
    defaultPageSize: 10,
    pageSizeOptions: ["10", "25", "50"],
    showSizeChanger: true,
  };

  return (
    <Table
      dataSource={priceSubjectData}
      columns={priceSubjectColumns}
      pagination={paginationOptions}
      scroll={{
        y: 520,
        x: 100,
        scrollToFirstRowOnChange: true,
      }}
      rowKey="key"
      rowSelection={{
        type: "radio",
        onChange: (selectedRowKeys, selectedRows) =>
          handleRowSelection(selectedRowKeys, selectedRows),
        selectedRowKeys: tabList ? [tabList.key] : [],
      }}
    />
  );
};

export default TablePriceSubject;

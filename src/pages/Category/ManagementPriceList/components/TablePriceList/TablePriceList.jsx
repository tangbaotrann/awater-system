import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { btnClickTabListContract } from "../../../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./TablePriceList.css";

const priceListColumns = (showHeader) => [
  {
    key: showHeader ? "priceObjectTitle" : "numericalOrder",
    dataIndex: showHeader ? "priceObjectTitle" : "numericalOrder",
    width: "15vw",
    align: "center",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "priceObject",
    title: showHeader ? "Đối tượng giá" : "",
    dataIndex: "priceObject",
    width: "25vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "namePriceObject",
    title: showHeader ? "Tên đối tượng giá" : "",
    dataIndex: "namePriceObject",
    width: "30vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
    filters: showHeader
      ? [
          {
            text: "Tăng dần",
            value: "ASC",
          },
          {
            text: "Giảm dần",
            value: "DESC",
          },
          {
            text: "Theo cột",
            value: "followColumns",
            children: [
              {
                text: "Đối tượng giá",
                value: "objectPrice",
              },
              {
                text: "Tên đối tượng giá",
                value: "nameObjectPrice",
              },
              {
                text: "Từ ngày",
                value: "fromDate",
              },
              {
                text: "Đến ngày",
                value: "toDate",
              },
              {
                text: "Thuế VAT (%)",
                value: "taxVAT",
              },
              {
                text: "Phí bảo vệ môi trường",
                value: "feeProtectEnvironment",
              },
            ],
          },
          {
            text: "Group by the field",
            value: "groupByField",
            children: [],
          },
          {
            text: "Show in Groups",
            value: "showInGroups",
          },
        ]
      : null,
  },
  {
    key: "fromDate",
    title: showHeader ? "Từ ngày" : "",
    dataIndex: "fromDate",
    width: "20vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "toDate",
    title: showHeader ? "Đến ngày" : "",
    dataIndex: "toDate",
    width: "20vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "tax",
    title: showHeader ? "Thuế VAT (%)" : "",
    dataIndex: "tax",
    width: "15vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
  {
    key: "environmentFee",
    title: showHeader ? "Phí bảo vệ môi trường" : "",
    dataIndex: "environmentFee",
    width: "20vw",
    render: (text) => <div style={{ padding: "0 16px" }}>{text}</div>,
  },
];

const columnsDetailTable = [
  {
    key: "numericalOrder",
    title: "STT",
    dataIndex: "numericalOrder",
    width: "2vw",
  },
  {
    key: "description",
    title: "Mô tả",
    dataIndex: "description",
    width: "20vw",
  },
  {
    key: "descriptionDetail",
    title: "Mô tả chi tiết",
    dataIndex: "descriptionDetail",
    width: "20vw",
  },
  {
    key: "fromNumber",
    title: "Từ số",
    dataIndex: "fromNumber",
    width: "5vw",
  },
  {
    key: "toNumber",
    title: "Đến số",
    dataIndex: "toNumber",
    width: "5vw",
  },
  {
    key: "priceVAT",
    title: "Giá có VAT",
    dataIndex: "priceVAT",
    width: "15vw",
  },
  {
    key: "price",
    title: "Giá",
    dataIndex: "price",
    width: "15vw",
  },
];

const TablePriceList = ({ viewTableDetail }) => {
  const priceListData = [];
  for (let i = 0; i <= 10; i++) {
    priceListData.push({
      priceObjectTitle: `Tên đối tượng giá ${i} (bản ghi)`,
      key: i,
      data: [
        {
          key: i,
          numericalOrder: i + 1,
          priceObject: `Đối tượng giá ${i}`,
          namePriceObject: `Tên đối tượng giá ${i}`,
          fromDate: `Từ ngày ${i}`,
          toDate: `Đến ngày ${i}`,
          tax: `Thuế ${i}%`,
          environmentFee: `Phí bảo vệ môi trường ${i}%`,
        },
      ],
    });
  }

  const priceListDataChildren = [];
  for (let i = 0; i <= 10; i++) {
    priceListDataChildren.push({
      key: i,
      numericalOrder: i + 1,
      description: `Đối tượng giá ${i}`,
      descriptionDetail: `Tên đối tượng giá ${i}`,
      fromNumber: `${i}.00`,
      tonNumber: `-${i}.00`,
      priceVAT: `${i + 1}0000`,
      price: `${i + 1}0000`,
    });
  }

  const dispatch = useDispatch();
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const handleRowSelection = (selectedRowKeys, selectedRow) => {
    dispatch(btnClickTabListContract(selectedRow));
  };
  useEffect(() => {
    let unsubscribe = false;
    console.log(unsubscribe);

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(unsubscribe);

        if (!unsubscribe) console.log(json);
      });

    return () => {
      console.log("unsubscribe");
      unsubscribe = true;
      console.log("153", unsubscribe);
    };
  }, [tabList]);
  const paginationOptions = {
    defaultPageSize: 10,
    pageSizeOptions: ["10", "25", "50"],
    showSizeChanger: true,
  };

  return (
    <div className="body-price-list">
      <div className="body-price-list-top-table">
        <Table
          className="table-list"
          columns={priceListColumns(true)}
          dataSource={priceListData}
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
                  columns={priceListColumns(false)}
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
                    onChange: (selectedRowKeys, selectedRows) => {
                      console.log(selectedRowKeys, selectedRows);
                      handleRowSelection(selectedRowKeys, selectedRows[0]);
                    },
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
      </div>
      {tabList && viewTableDetail ? (
        <div className="table-detail">
          <Table
            columns={columnsDetailTable}
            dataSource={priceListDataChildren}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TablePriceList;

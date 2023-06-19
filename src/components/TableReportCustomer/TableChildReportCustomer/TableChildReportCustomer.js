import { Table } from "antd";
import { dataTableChildReportCustomer } from "../../../utils/dataCustomer";

function TableChildReportCustomer({ record }) {
  const cols = [
    {
      key: "index",
      title: "",
      width: "6%",
      dataIndex: "index",
    },
    {
      key: "code",
      title: "Mã KH",
      dataIndex: "code",
    },
    {
      key: "full_name",
      title: "Tên KH",
      dataIndex: "full_name",
    },
    {
      key: "num_contract",
      title: "Số hợp đồng",
      dataIndex: "num_contract",
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      key: "num_gcn",
      title: "Số GCN",
      dataIndex: "num_gcn",
    },
    {
      key: "num_house",
      title: "Số hộ dùng chung",
      dataIndex: "num_house",
    },
    {
      key: "num_people",
      title: "Số nhân khẩu",
      dataIndex: "num_people",
    },
    {
      key: "phone",
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      key: "num_cmt",
      title: "Số CMT",
      dataIndex: "num_cmt",
    },
    {
      key: "date_range",
      title: "Ngày cấp",
      dataIndex: "date_range",
    },
    {
      key: "issued_by",
      title: "Nơi cấp",
      dataIndex: "issued_by",
    },
  ];

  return (
    <Table
      id="table"
      columns={cols}
      dataSource={dataTableChildReportCustomer
        .filter((__customer) => __customer.key === record.key)
        .map((_customer) => ({
          key: _customer.key,
          code: _customer.code,
          full_name: _customer.full_name,
          num_contract: _customer.num_contract,
          address: _customer.address,
          num_house: _customer.num_house,
          phone: _customer.phone,
          num_gcn: _customer.num_gcn,
        }))}
      pagination={false}
      rowKey="code"
    />
  );
}

export default TableChildReportCustomer;

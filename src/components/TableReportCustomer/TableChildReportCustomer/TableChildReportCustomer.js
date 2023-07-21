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
      width: "12%",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "full_name",
      title: "Tên KH",
      dataIndex: "full_name",
      width: "12%",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "num_contract",
      title: "Số hợp đồng",
      dataIndex: "num_contract",
      width: "6%",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "doiTuongGia",
      title: "Đối tượng giá",
      dataIndex: "num_house",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "kichCo",
      title: "Kích cở",
      dataIndex: "kichCo",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "phone",
      title: "Điện thoại",
      dataIndex: "phone",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "tinhTrang",
      title: "Tình trạng",
      dataIndex: "tinhTrang",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "loaiDongHo",
      title: "Loại đồng hồ",
      dataIndex: "loaiDongHo",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "maDongHo",
      title: "Mã đồng hồ",
      dataIndex: "maDongHo",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "ghiChu",
      title: "Ghi chú",
      dataIndex: "ghiChu",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "canBoDoc",
      title: "Cán bộ đọc",
      dataIndex: "canBoDoc",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "tuyenDoc",
      title: "Tuyến đọc",
      dataIndex: "tuyenDoc",
      responsive: ["xs", "sm", "md", "lg"],
    },
    {
      key: "chiSoCuoi",
      title: "Chỉ số cuối",
      dataIndex: "chiSoCuoi",
      responsive: ["xs", "sm", "md", "lg"],
    },
  ];

  return (
    <Table
      id="table"
      columns={cols}
      bordered={true}
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
      size="small"
      scroll={{
        x: 2600,
      }}
    />
  );
}

export default TableChildReportCustomer;

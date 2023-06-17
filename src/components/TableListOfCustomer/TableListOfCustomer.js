import { Table } from "antd";
import "./TableListOfCustomer.css";

// data
const data = [
  {
    key: "1",
    code: "NM_HH_so19001",
    full_name: "Đào Văn Thảo",
    num_contract: "HD001",
    phone: "0341284571",
    price_obj: "Nhà máy Đông Lỗ",
    size: "",
    status: "Đang sử dụng",
    type_watch: "",
    index_watch: "22891",
    note: "",
    staff_reading: "Hà Thị Đàm",
    line_reading: "Tuyến 1 - Đông Lỗ",
    cs_last: "",
  },
  {
    key: "2",
    code: "NM_HH_so19001",
    full_name: "Đào Văn Thảo",
    num_contract: "HD001",
    phone: "0341284571",
    price_obj: "Nhà máy Đông Lỗ",
    size: "",
    status: "Đang sử dụng",
    type_watch: "",
    index_watch: "22891",
    note: "",
    staff_reading: "Hà Thị Đàm",
    line_reading: "Tuyến 1 - Đông Lỗ",
    cs_last: "",
  },
  {
    key: "3",
    code: "NM_HH_so19001",
    full_name: "Đào Văn Thảo",
    num_contract: "HD001",
    phone: "0341284571",
    price_obj: "Nhà máy Đông Lỗ",
    size: "",
    status: "Đang sử dụng",
    type_watch: "",
    index_watch: "22891",
    note: "",
    staff_reading: "Hà Thị Đàm",
    line_reading: "Tuyến 1 - Đông Lỗ",
    cs_last: "",
  },
];

function TableListOfCustomer() {
  const cols = [
    {
      key: "index",
      title: "STT",
      dataIndex: "index",
    },
    {
      key: "code",
      title: "Mã KH",
      dataIndex: "code",
      width: "12%",
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
      key: "phone",
      title: "Điện thoại",
      dataIndex: "phone",
    },
    {
      key: "price_obj",
      title: "Đối tượng giá",
      dataIndex: "price_obj",
    },
    {
      key: "size",
      title: "Kích cở",
      dataIndex: "size",
    },
    {
      key: "status",
      title: "Tình trạng",
      dataIndex: "status",
    },
    {
      key: "type_watch",
      title: "Loại đồng hồ",
      dataIndex: "type_watch",
    },
    {
      key: "index_watch",
      title: "Mã đồng hồ",
      dataIndex: "index_watch",
    },
    {
      key: "note",
      title: "Ghi chú",
      dataIndex: "note",
    },
    {
      key: "staff_reading",
      title: "Cán bộ đọc",
      dataIndex: "staff_reading",
    },
    {
      key: "line_reading",
      title: "Tuyến đọc",
      dataIndex: "line_reading",
    },
    {
      key: "cs_last",
      title: "CS cuối",
      dataIndex: "line_last",
    },
  ];

  return (
    <>
      <div className="title-report-cus">
        <h1>CÔNG TY TNHH & CN AMZT VIỆT NAM</h1>

        <div className="title-tbl-report-cus">
          <h1>BẢNG KÊ DANH SÁCH KHÁCH HÀNG</h1>
          <p>Đối tượng giá: Tất cả</p>
        </div>

        <Table
          columns={cols}
          dataSource={data.map((_customer, index) => ({
            index: index + 1,
            code: _customer.code,
            full_name: _customer.full_name,
            num_contract: _customer.num_contract,
            phone: _customer.phone,
            price_obj: _customer.price_obj,
            size: _customer.size,
            status: _customer.status,
            type_watch: _customer.type_watch,
            index_watch: _customer.index_watch,
            note: _customer.note,
            staff_reading: _customer.staff_reading,
            line_reading: _customer.line_reading,
            cs_last: _customer.cs_last,
          }))}
          rowKey="index"
          pagination={{
            pageSize: 10,
          }}
        ></Table>
      </div>
    </>
  );
}

export default TableListOfCustomer;

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
      key: "address",
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      key: "soHo",
      title: "Số hộ",
      dataIndex: "soHo",
    },
    {
      key: "soNhanKhau",
      title: "Số nhân khẩu",
      dataIndex: "soNhanKhau",
    },
    {
      key: "soCMND",
      title: "Số CMND",
      dataIndex: "soCMND",
    },
    {
      key: "ngayCap",
      title: "Ngày cấp",
      dataIndex: "ngayCap",
    },
    {
      key: "noiCap",
      title: "Nơi cấp",
      dataIndex: "noiCap",
    },
  ];

  return (
    <>
      <div className="title-report-cus">
        <h1>CÔNG TY TNHH & CN AMAZINGTECH VIỆT NAM</h1>

        <div className="title-tbl-report-cus">
          <h1>BẢNG KÊ DANH SÁCH KHÁCH HÀNG</h1>
          <p>Đối tượng giá: Tất cả</p>
        </div>

        <div className="container-tbl-list-cus">
          <Table
            id="table"
            rowKey="index"
            size="small"
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
            pagination={{
              pageSize: 10,
            }}
            scroll={{
              x: 1600,
            }}
          ></Table>
        </div>
      </div>
    </>
  );
}

export default TableListOfCustomer;

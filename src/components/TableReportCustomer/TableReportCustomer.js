import { Table } from "antd";

import "./TableReportCustomer.css";
import TableChildReportCustomer from "./TableChildReportCustomer/TableChildReportCustomer";
import { dataTableReportCustomer } from "../../utils/dataCustomer";

function TableReportCustomer() {
  const cols = [
    {
      key: "index",
      title: "STT",
      dataIndex: "index",
      responsive: ["xs", "sm", "md", "lg"],
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
    <>
      <div className="title-report-cus">
        <h1>CÔNG TY TNHH & CN AMAZINGTECH VIỆT NAM</h1>

        <div className="title-tbl-report-cus">
          <h1>BÁO CÁO PHÁT TRIỂN KHÁCH HÀNG MỚI</h1>
          <p>Từ: ngày 17/6/2023 Đến: ngày 20/7/2023</p>
        </div>
      </div>

      <div className="container-tbl-report-cus">
        <Table
          id="table"
          showHeader={false}
          bordered={true}
          columns={cols}
          dataSource={dataTableReportCustomer.map((_customer, index) => ({
            key: _customer.key,
            index: index + 1,
            code: _customer.code,
            num_gcn: `Tổng số: ${_customer.num_gcn}`,
            line: _customer.line,
          }))}
          expandable={{
            expandedRowRender: (record) => {
              return (
                <>
                  <div className="inner-line">
                    <p>* {record.line}</p>
                    <p>{record.num_gcn}</p>
                  </div>

                  {/* record: if để lấy dữ liệu con (get .key) */}
                  <TableChildReportCustomer record={record} />
                </>
              );
            },
            defaultExpandAllRows: true,
            expandRowByClick: true,
          }}
          pagination={{
            pageSize: 10,
          }}
          scroll={{
            x: 2000,
          }}
          rowKey="key"
          size="small"
          rowClassName="record-title-name"
        ></Table>
      </div>

      <div className="footer-signature">
        <p>Ngày ... tháng ... năm 2023</p>

        <div className="footer-signature-inner">
          <p className="signature-creator">Người lập</p>
          <p>Ký, họ tên</p>
        </div>
      </div>
    </>
  );
}

export default TableReportCustomer;

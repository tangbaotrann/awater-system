import { RedoOutlined } from "@ant-design/icons";
import { Modal, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./TableListContract.css";
import { dataContractOnModal } from "../../utils/dataContract";
import tabListContractSlice from "../../redux/slices/tabListContractSlice/tabListContractSlice";
import {
  btnClickTabListContractSelector,
  fetchApiAllCustomerSelector,
  isLoadingAllCustomerSelector,
} from "../../redux/selector";
import CustomRowTooltip from "../CustomRowTooltip/CustomRowTooltip";
import { fetchApiAllCustomer } from "../../redux/slices/contractSlice/contractSlice";

function TableListContract() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);
  const customers = useSelector(fetchApiAllCustomerSelector);
  const isLoading = useSelector(isLoadingAllCustomerSelector);

  // cols table main
  const cols = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "loaiKhachHang",
      title: "Loại KH",
      dataIndex: "loaiKhachHang",
    },
    {
      key: "tenKhachHang",
      title: "Tên khách hàng",
      dataIndex: "tenKhachHang",
    },
    {
      key: "keyId",
      title: "Mã khách hàng",
      dataIndex: "keyId",
    },
    {
      key: "dienThoai",
      title: "Điện thoại",
      dataIndex: "dienThoai",
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
  ];

  // cols table modal
  const colsTableModal = [
    {
      key: "index",
      title: "#",
      dataIndex: "index",
    },
    {
      key: "code_clock",
      title: "Mã đồng hồ",
      dataIndex: "code_clock",
    },
    {
      key: "status",
      title: "Tình trạng SD",
      dataIndex: "status",
    },
    {
      key: "num_start",
      title: "Chỉ số đầu",
      dataIndex: "num_start",
    },
    {
      key: "write_order",
      title: "Thứ tự ghi",
      dataIndex: "write_order",
    },
    {
      key: "seri",
      title: "Seri",
      dataIndex: "seri",
    },
    {
      key: "line_reading",
      title: "Tuyến đọc",
      dataIndex: "line_reading",
    },
    {
      key: "address_use",
      title: "Địa chỉ sử dụng",
      dataIndex: "address_use",
    },
    {
      key: "block_clock",
      title: "Đồng hồ khối",
      dataIndex: "block_clock",
    },
    {
      key: "type_clock",
      title: "Kiểu đồng hồ",
      dataIndex: "type_clock",
    },
    {
      key: "date_use",
      title: "Ngày sử dụng",
      dataIndex: "date_use",
    },
    {
      key: "date_install",
      title: "Ngày lắp đặt",
      dataIndex: "date_install",
    },
  ];

  useEffect(() => {
    dispatch(fetchApiAllCustomer());
  }, []);

  // hide modal
  const hideModal = () => {
    setOpen(false);
  };

  // handle row select
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(
      tabListContractSlice.actions.btnClickTabListContract(selectedRows[0])
    );
  };

  // handle un-check radio + reset table
  const handleUncheckRadio = () => {
    dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
    dispatch(fetchApiAllCustomer());
  };

  return (
    <>
      <div className="container-tbl-contract">
        <Table
          id="table-contract"
          rowKey="index"
          size="small"
          columns={cols}
          dataSource={
            customers?.length <= 0
              ? []
              : customers.map((_customer, index) => ({
                  index: index + 1,
                  loaiKhachHang: _customer.loaiKhachHang,
                  tenKhachHang: _customer.tenKhachHang,
                  keyId: _customer.keyId,
                  dienThoai: _customer.dienThoai,
                  email: _customer.email,
                  nhaMayId: _customer.nhaMayId,
                  nguonNuoc: _customer.nguonNuoc,
                  tenThuongGoi: _customer.tenThuongGoi,
                  soHo: _customer.soHo,
                  soKhau: _customer.soKhau,
                  soCmnd: _customer.soCmnd,
                  ngayCapCmnd: _customer.ngayCapCmnd,
                  noiCapCmnd: _customer.noiCapCmnd,
                  maSoThue: _customer.maSoThue,
                  soGcn: _customer.soGcn,
                  ghiChu: _customer.ghiChu,
                  doiTuong: _customer.doiTuong,
                  nguoiDaiDien: _customer.nguoiDaiDien,
                }))
          }
          loading={isLoading}
          pagination={{
            pageSize: 10,
          }}
          onRow={(record, index) => {
            return {
              onDoubleClick: () => {
                console.log("Double clicked ->", record);
                setOpen(true);
              },
              onClick: () => {
                console.log("Clicked ->", record);
                dispatch(
                  tabListContractSlice.actions.btnClickTabListContract(record) // clicked row to check radio
                );
              },
            };
          }}
          rowSelection={{
            type: "radio",
            columnTitle: () => {
              return (
                <Tooltip title="Làm mới">
                  <RedoOutlined
                    className="icon-reset-rad-btn"
                    onClick={handleUncheckRadio}
                  />
                </Tooltip>
              );
            },
            onChange: (selectedRowKeys, selectedRows) =>
              handleRowSelection(selectedRowKeys, selectedRows),
            selectedRowKeys: tabList ? [tabList.index] : [],
          }}
          components={{
            body: {
              row: CustomRowTooltip,
            },
          }}
          scroll={{
            x: 1200,
          }}
        ></Table>
      </div>

      {/* Show modal contract (double click row) */}
      <Modal
        open={open}
        onCancel={hideModal}
        className="container-modal-tbl-contract"
        width={1600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="inner-modal-tbl-contract">
          <Table
            columns={colsTableModal}
            dataSource={dataContractOnModal.map((_contract, index) => ({
              index: index + 1,
              code_clock: _contract.code_clock,
              status: _contract.status,
              num_start: _contract.num_start,
              write_order: _contract.write_order,
              seri: _contract.seri,
              line_reading: _contract.line_reading,
              address_use: _contract.address_use,
              block_clock: _contract.block_clock,
              type_clock: _contract.type_clock,
              date_use: _contract.date_use,
              date_install: _contract.date_install,
            }))}
            rowKey="index"
            size="small"
            pagination={{
              pageSize: 10,
            }}
          ></Table>
        </div>
      </Modal>
    </>
  );
}

export default TableListContract;

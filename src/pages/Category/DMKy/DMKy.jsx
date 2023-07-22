import { React, useEffect } from "react";
import TableListLocation from "./TableListSigning.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row, DatePicker, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import viVN from "antd/es/date-picker/locale/vi_VN";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { getAllKy } from "../../../redux/slices/DMKy/kySlice.js";

// import kỳ lạ của Dương: 
import { btnClickTabListInvoicePrintSelector, getAllKySelector } from "../../../redux/selector.js";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import dayjs from "dayjs";

moment.locale("vi");
function DMKy() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const dispatch = useDispatch();
  const dataAllKy = useSelector(getAllKySelector);

  // import kỳ lạ của Dương 
  const tabListPO = useSelector(btnClickTabListInvoicePrintSelector);

  // handle row select
  const handleRowSelection = (selectedRowKeys, selectedRows) => {
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
        selectedRows[0]
      )
    );
  };

  // handle un-check radio
  const handleUncheckRadio = () => {
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };
  // Kết thúc import kỳ lạ của Dương

  useEffect(() => {
    dispatch(getAllKy());
  }, [dispatch]);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Ký hiệu",
      dataIndex: "keyId",
      key: "keyId",
      width: 170,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Ngày sử dụng từ",
      dataIndex: "ngaySuDungTu",
      key: "ngaySuDungTu",
    },
    {
      title: "Ngày sử dụng đến",
      dataIndex: "ngaySuDungDen",
      key: "ngaySuDungDen",
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "ngayHoaDon",
      key: "ngayHoaDon",
    },
  ];

  const AdvancedSearchForm = () => {
    const layout = {
      labelCol: {
        span: 9,
      },
    };
    return (
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={8}>
              <Form.Item>
                <TableListLocation />
              </Form.Item>
            </Col>
          )}
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <Input
                placeholder="Nhập và Enter để tìm kiếm"
                style={{
                  marginRight: "5px",
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <DatePicker
                locale={viVN}
                placeholder="Nhập ngày ghi chỉ"
                style={{ marginLeft: "5px", width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item lassName="custom-form-item">
              <DatePicker
                locale={viVN}
                placeholder="Nhập ngày hóa đơn"
                style={{
                  marginLeft: "10px",
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };
  return (
    <>
      <AdvancedSearchForm />
      <Table
        style={{ marginTop: "10px" }}
        size="small"
        bordered
        rowKey="index"
        scroll={{ x: 1000, y: 480 }}
        columns={columns.map((column) => ({
          ...column,
          className: "cell-wrap",
        }))}
        dataSource={dataAllKy.map((_dataAllKy, index) => ({
          index: index + 1,
          keyId: _dataAllKy.keyId,
          moTa: _dataAllKy.moTa,
          ngaySuDungTu: dayjs(_dataAllKy.ngaySuDungTu).format("YYYY-MM-DD"),
          ngaySuDungDen: dayjs(_dataAllKy.ngaySuDungDen).format("YYYY-MM-DD"),
          ngayHoaDon: dayjs(_dataAllKy.ngayHoaDon).format("YYYY-MM-DD"),
        }))}
        // import kỳ lạ của Dương
        onRow={(record, index) => {
          return {
            onClick: () => {
              // clicked row to check radio
              dispatch(
                tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
                  record
                )
              );
            },
          };
        }}
        rowSelection={{
          type: "radio",
          columnTitle: () => {
            return (
              <Tooltip title="Bỏ chọn hàng hiện tại.">
                <RedoOutlined
                  className="icon-reset-rad-btn"
                  onClick={handleUncheckRadio}
                />
              </Tooltip>
            );
          },
          onChange: (selectedRowKeys, selectedRows) =>
            handleRowSelection(selectedRowKeys, selectedRows),
          selectedRowKeys: tabListPO ? [tabListPO.index] : [],
        }}
      // kết thúc import kỳ lạ của Dương
      />
      {isTabletOrMobile && (
        <div className="contract-bottom">
          {/* check mobile */}
          {isTabletOrMobile ? (
            <Popover
              size="small"
              rootClassName="fix-popover-z-index"
              placement="bottomRight"
              trigger="click"
              content={
                <TableListLocation isTabletOrMobile={isTabletOrMobile} />
              }
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListLocation />
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default DMKy;

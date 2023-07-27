import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Table, Popover, Tooltip, Form, Row, Col, Input } from "antd";
import {
  PlusOutlined,
  RedoOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import "react-toastify/dist/ReactToastify.css";

import { useMediaQuery } from "react-responsive";
import { fetchApiAllPaymentMethod } from "../../../redux/slices/paymentMethodSlice/paymentMethodSlice";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllPaymentMethodSelector,
  isLoadingAllPaymentMethodSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import TableListPC from "./TableListPC";
moment.locale("vi");

function ListPaymentMethod() {
  const [resultSearch, setResultSearch] = useState("");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  const paymentMethods = useSelector(fetchApiAllPaymentMethodSelector);
  const isLoading = useSelector(isLoadingAllPaymentMethodSelector);

  useEffect(() => {
    dispatch(fetchApiAllPaymentMethod());
  }, []);

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
      filteredValue: [resultSearch],
      onFilter: (value, record) => {
        return String(record.keyId).toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record) => (
        <>
          <SnippetsOutlined />
          {text}
        </>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "moTaPhuongThuc",
      key: "moTaPhuongThuc",
    },
  ];
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
  const layout = {
    labelCol: {
      span: 9,
    },
  };

  return (
    <>
      {/* <AdvancedSearchForm /> */}
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={8}>
              <Form.Item>
                <TableListPC />
              </Form.Item>
            </Col>
          )}

          <Col span={16}>
            <Form.Item lassName="custom-form-item" label="Tìm kiếm" name="9">
              <Input.Search
                style={{
                  width: "100%",
                }}
                onSearch={(value) => {
                  setResultSearch(value);
                }}
                onChange={(e) => {
                  setResultSearch(e.target.value);
                }}
                placeholder="Nhập phương thức thanh toán"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
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
        dataSource={
          paymentMethods?.length <= 0
            ? []
            : paymentMethods.map((_paymentMethod, index) => ({
                index: index + 1,
                keyId: _paymentMethod.keyId,
                moTaPhuongThuc: _paymentMethod.moTaPhuongThuc,
              }))
        }
        loading={isLoading}
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
          selectedRowKeys: tabListbc ? [tabListbc.index] : [],
        }}
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
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">{/* <TabListBC /> */}</div>
          )}
        </div>
      )}
    </>
  );
}
export default ListPaymentMethod;

import { React, useEffect } from "react";

import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import TableListPO from "./TableListPO.js";
import { fetchApiAllPriceListObject } from "../../../redux/slices/priceListObjectSlice/priceListObjectSlice";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllPriceListObjectSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
 
moment.locale("vi");
 
function ListPriceObject() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const dispatch = useDispatch();

  const tabListPO = useSelector(btnClickTabListInvoicePrintSelector);
  const priceListObject = useSelector(fetchApiAllPriceListObjectSelector);
  console.log(priceListObject);
  useEffect(() => {
    dispatch(fetchApiAllPriceListObject());
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      // width: 70,
    },
    {
      key: "keyId",
      title: "Ký hiệu",
      dataIndex: "keyId",
      // width: 140,
    },
    {
      key: "moTa",
      title: "Mô tả",
      dataIndex: "moTa",
      // width: 140,
    },
    {
      key: "donViTinh",
      title: "Đơn vị tính",
      dataIndex: "donViTinh",
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
                <TableListPO />
              </Form.Item>
            </Col>
          )}

          <Col span={16}>
            <Form.Item
              className="custom-form-item"
              label="Nhập và Enter để tìm kiếm"
              name="9"
            >
              <Input
                style={{
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
        dataSource={priceListObject.map((_priceListObject, index) => ({
          index: index + 1,
          id: _priceListObject.id,
          keyId: _priceListObject.keyId,
          moTa: _priceListObject.moTa,
          donViTinh: _priceListObject.donViTinh,
        }))}
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
              content={<TableListPO isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListPO />
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default ListPriceObject;

import { React, useState } from "react";
import TableInstaller from "./TableInstaller.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import { Form, Input, Table, Popover, Col, Row, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

// import kỳ lạ của Dương:
import {
  btnClickTabListInvoicePrintSelector,
} from "../../../redux/selector.js";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
moment.locale("vi");

function DMinstaller() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const dispatch = useDispatch();

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

  const initialData = Array.from({ length: 100 }, (_, i) => {
    return {
      key: "1",
      index: i + 1,
      keyId: `Mã người lắp đặt ${i + 1}`,
      tenNguoiLapDat: `Tên người lắp đặt ${i + 1}`,
    };
  });
  const [data1] = useState(initialData);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Mã người lắp đặt",
      dataIndex: "keyId",
      key: "keyId",
    },
    {
      title: "Tên người lắp đặt",
      dataIndex: "tenNguoiLapDat",
      key: "tenNguoiLapDat",
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
                <TableInstaller />
              </Form.Item>
            </Col>
          )}
          <Col span={14}>
            <Form.Item lassName="custom-form-item" label="Nhập vào ô để tìm kiếm">
              <Input.Search
                placeholder="Nhập và Enter để tìm kiếm"
                style={{
                  marginRight: "5px",
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };
  return <>
    <AdvancedSearchForm></AdvancedSearchForm>
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
        dataSource={data1}
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
        >
    </Table>
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
                <TableInstaller isTabletOrMobile={isTabletOrMobile} />
              }
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableInstaller />
            </div>
          )}
        </div>
      )}
  </>;
}

export default DMinstaller;

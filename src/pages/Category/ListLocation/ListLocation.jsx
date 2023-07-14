import { React, useEffect, useState } from "react";
import { Form, Input, Table, Popover, Col, Row, Tooltip } from "antd";
import {
  PlusOutlined,
  RedoOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import TableListLocation from "./TableListLocation.js";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import "moment/locale/vi";
import { fetchApiAllArea } from "../../../redux/slices/areaSlice/areaSlice.js";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllAreaSelector,
} from "../../../redux/selector.js";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice.js";

moment.locale("vi");

function ListLocation() {
  const [resultSearch, setResultSearch] = useState("");

  const dispatch = useDispatch();

  const areas = useSelector(fetchApiAllAreaSelector);

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: " Mã Khu Vực",
      dataIndex: "id",
      key: "id",
      filteredValue: [resultSearch],
      onFilter: (value, record) => {
        return String(record.id).toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record) => (
        <>
          <SnippetsOutlined />
          {text}
        </>
      ),
    },
    {
      title: "Tên Khu Vực",
      dataIndex: "tenKhuVuc",
      key: "tenKhuVuc",
    },
    {
      title: "Vùng",
      dataIndex: "vungId",
      key: "vungId",
    },
  ];

  const layout = {
    labelCol: {
      span: 9,
    },
  };

  useEffect(() => {
    dispatch(fetchApiAllArea());
  }, []);

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

  return (
    <>
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={8}>
              <Form.Item>
                <TableListLocation />
              </Form.Item>
            </Col>
          )}

          <Col span={16}>
            <Form.Item
              className="custom-form-item"
              label="Nhập id để tìm kiếm"
              name="9"
            >
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
                placeholder="Nhập id"
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
          areas?.length <= 0
            ? []
            : areas.map((_area, index) => ({
                index: index + 1,
                id: _area.id,
                tenKhuVuc: _area.tenKhuVuc,
                vungId: _area.vungId,
              }))
        }
        onRow={(record, index) => {
          return {
            onClick: () => {
              // clicked row to check radio
              console.log(record);
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
export default ListLocation;

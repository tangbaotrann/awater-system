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
import "react-toastify/dist/ReactToastify.css";

import TableListLRL from "./TableListLRL";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import "moment/locale/vi";
import { fetchApiAllRegion } from "../../../redux/slices/regionSlice/regionSlice";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllRegionSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";

moment.locale("vi");

function ListRegionsLocation() {
  const [resultSearch, setResultSearch] = useState("");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  const regions = useSelector(fetchApiAllRegionSelector);

  const layout = {
    labelCol: {
      span: 9,
    },
  };

  useEffect(() => {
    dispatch(fetchApiAllRegion());
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: " Mã Vùng",
      dataIndex: "keyId",
      key: "keyId",
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
      title: "Tên Vùng",
      dataIndex: "tenVung",
      key: "tenVung",
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

  return (
    <>
      {/* <AdvancedSearchForm /> */}
      <Form {...layout}>
        <Row>
          {!isTabletOrMobile && (
            <Col span={8}>
              <Form.Item>
                <TableListLRL />
              </Form.Item>
            </Col>
          )}

          <Col span={16}>
            <Form.Item className="custom-form-item" label="Tìm kiếm" name="9">
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
                placeholder="Nhập mã vùng"
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
          regions?.length <= 0
            ? []
            : regions.map((_region, index) => ({
                index: index + 1,
                keyId: _region.keyId,
                nhaMayId: _region.nhaMayId,
                tenVung: _region.tenVung,
              }))
        }
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
              content={<TableListLRL isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListLRL />
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default ListRegionsLocation;

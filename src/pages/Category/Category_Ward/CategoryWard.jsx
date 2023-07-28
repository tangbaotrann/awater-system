import { React, useEffect, useState } from "react";
import { Form, Input, Table, Popover, Col, Row, Tooltip } from "antd";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

import TableListWard from "./TableListWard";
import "./CategoryWard.css";
import "../../../components/GlobalStyles/GlobalStyles.css";
import "../../Manager/Contract/Contract.css";
import "moment/locale/vi";
import { fetchApiAllWard } from "../../../redux/slices/wardSlice/wardSlice";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllWardSelector,
  isLoadingAllWardSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";

moment.locale("vi");

function CategoryWard() {
  const [resultSearch, setResultSearch] = useState("");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });

  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  const wards = useSelector(fetchApiAllWardSelector);
  const isLoading = useSelector(isLoadingAllWardSelector);

  const layout = {
    labelCol: {
      span: 9,
    },
  };

  useEffect(() => {
    dispatch(fetchApiAllWard());
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Thành phố/Tỉnh",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Quận/Huyện",
      dataIndex: "huyenId",
      key: "huyenId",
    },
    {
      title: "Phường/Xã",
      dataIndex: "keyId",
      key: "keyId",
      filteredValue: [resultSearch],
      onFilter: (value, record) => {
        return String(record.keyId).toLowerCase().includes(value.toLowerCase());
      },
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
                <TableListWard />
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
                placeholder="Nhập mã phường/xã"
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
          wards?.length <= 0
            ? []
            : wards.map((_ward, index) => ({
                index: index + 1,
                keyId: _ward.keyId,
                ten: _ward.ten,
                huyenId: _ward.huyenId,
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
              content={<TableListWard isTabletOrMobile={isTabletOrMobile} />}
            >
              <div className="contract-bottom-func">
                <PlusOutlined />
              </div>
            </Popover>
          ) : (
            <div className="contract-bottom-func">
              <TableListWard />
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default CategoryWard;

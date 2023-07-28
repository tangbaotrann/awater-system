/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Table, Form, Input, Col, Row, Tooltip, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";

// import "./CSS_Category_Status_ReadNumber.css";
import tabListInvoicePrintSlice from "../../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import { btnClickTabListInvoicePrintSelector } from "../../../../redux/selector";
import HeaderActionButton from "./HeaderActionButton";


const columns = [
  {
    title: "#",
    dataIndex: "index",
    width: 70,
    onCell(text, record) {
      return {
        props: {
          style: {
            background: "#FF3333",
          },
          children: <div>{text}</div>,
        },
      };
    },
  },
  {
    title: "Mã",
    dataIndex: "KeyId",
  },
  {
    title: "Tên quận huyện",
    dataIndex: "tenQuanHuyen",
  },
  {
    title: "Tên thành phố",
    dataIndex: "tenThanhPho",
  }
];

const DistrictCategory = () => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const danhSachtrangThaiChiSo = useSelector(state => state.trangThaiChiSo.danhSachtrangThaiChiSo);
  const [openPopover, setOpenPopover] = useState(false);
  const rowSelected = useSelector(btnClickTabListInvoicePrintSelector);

  useEffect(() => {
  }, [])

  const rowClass = (record) => {
    return `color - ${record.maMau.replace("#", "")} `;
  };

  const handleUncheckRadio = () => {
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
        null
      )
    );
  };

  const handleOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };

  const renderCategoryAction = () => (<HeaderActionButton />)

  return (
    <>
      <Form labelCol={9}>
        <Row>
          <Col span={8} className="category-header-content">
            {isTabletOrMobile ? (
              <Popover
                rootClassName="fix-popover-z-index"
                placement="bottomRight"
                trigger="click"
                open={openPopover}
                onOpenChange={handleOpenChange}
                content={renderCategoryAction()}
              >
                <PlusOutlined />
              </Popover>
            ) : (
              renderCategoryAction()
            )}
          </Col>

          <Col span={16}>
            <Form.Item
              lassName="custom-form-item"
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
      <Table
        className="my-table"
        style={{ marginTop: "10px" }}
        size="small"
        bordered
        rowKey="index"
        scroll={{ x: 1000, y: 480 }}
        columns={columns?.map((col) => ({ ...col, className: "cell-wrap" }))}
        dataSource={null}
        rowClassName={rowClass}
        onRow={(record, rowIndex) => ({
          style: {
            color: record.maMau,
          },
          onClick: () => {
            dispatch(
              tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(
                record
              )
            );
          }
        })}
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
          selectedRowKeys: rowSelected ? [rowSelected.index] : [],
        }}
      />
    </>
  );
};

export default DistrictCategory;

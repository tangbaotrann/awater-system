/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Table, Form, Input, Col, Row, Tooltip, Popover } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined, RedoOutlined } from "@ant-design/icons";

import "./CSS_Category_Status_ReadNumber.css";
import HeaderActionButton from "./HeaderActionButton";
import { getAllDMTrangThaiChiSo } from "../../../redux/slices/DMTrangThaiChiSo/trangThaiChiSoSlice";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";


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
    title: "Mã trạng thái",
    dataIndex: "KeyId",
    width: 200,
  },
  {
    title: "Tên trạng thái",
    dataIndex: "tenTrangThai",
    width: 170,
  },
  {
    title: "Mã màu",
    dataIndex: "maMau",
    width: 90,
  },
  {
    title: "Không cho phép ghi",
    dataIndex: "khongChoPhepGhi",
  },
  {
    title: "Không cho cho hiển thị",
    dataIndex: "khongChoHienThi",
  },
  {
    title: "Số TT",
    dataIndex: "soTt",  
  },
  {
    title: "Mô tả ngắn",
    dataIndex: "moTaNgan",
  },
];

const Category_Status_ReadNumber = () => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const danhSachtrangThaiChiSo = useSelector(state => state.trangThaiChiSo.danhSachtrangThaiChiSo);
  const [openPopover, setOpenPopover] = useState(false);
  const rowSelected = useSelector(btnClickTabListInvoicePrintSelector);

  useEffect(() => {
    dispatch(getAllDMTrangThaiChiSo())
  }, [])

  const data = danhSachtrangThaiChiSo && danhSachtrangThaiChiSo.length > 0 && danhSachtrangThaiChiSo.map((item, index) => ({
    key: item.id,
    index: index + 1,
    KeyId: item?.keyId,
    tenTrangThai: item?.tenTrangThai,
    maMau: item?.maMau,
    khongChoPhepGhi: item?.khongChoPhepGhi,
    khongChoPhepHienThi: item?.khongChoPhepHienThi,
    soTt: item?.soTt,
    moTaNgan: item?.moTaNgan
  }
  ))

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
        columns={columns.map((col) => ({ ...col, className: "cell-wrap" }))}
        dataSource={data}
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

export default Category_Status_ReadNumber;

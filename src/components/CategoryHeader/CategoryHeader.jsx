import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Input, Button, DatePicker, Popover } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  SwapOutlined,
  RetweetOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import viVN from "antd/es/date-picker/locale/vi_VN";
import "./CategoryHeader.css";
import { btnClickTabListContract } from "../../redux/slices/tabListContractSlice/tabListContractSlice";
import { useMediaQuery } from "react-responsive";

const CategoryHeaderAction = ({
  sidebarMenu,
  handleOpenModalAdd,
  setIsOpenModalDelete,
  handleOpenModalTransfer,
  tabList,
}) => {
  return (
    <div className="category-header-actions">
      <div className="button-refresh">
        <Button
          className="button"
          type="primary"
          icon={<RetweetOutlined />}
          // style={{
          //   backgroundColor: "#E6FFFA",
          //   color: "#72E8C9",
          // }}
          style={{
            // backgroundColor: "#E6FFFA",
            // color: "#72E8C9",
            height: "34px",
            borderRadius: "6px",
          }}
          // onClick={() => setIsOpenModalBill(true)}
          size="small"
        >
          Làm mới
        </Button>
      </div>
      <div className="button-add">
        <Button
          className="button"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={(e) => handleOpenModalAdd(e, false)}
          style={{
            backgroundColor: "#FA896B",
            height: "34px",
            borderRadius: "6px",
          }}
          size="small"
        >
          Thêm mới
        </Button>
      </div>
      {/* {sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST" && (
        <div className="button-watch">
          <Button
            className="button"
            type="primary"
            icon={<FormOutlined />}
            onClick={(e) => handleViewTableDetail(e)}
            disable
            size="small"
             style={{
                backgroundColor: "#5D87FF",
                color: "#FFFFFF",
              }}
            disabled={!tabList}
          >
            Xem
          </Button>
        </div>
      )} */}
      <div className="button-update">
        <Button
          className="button"
          type="primary"
          icon={<EditOutlined />}
          onClick={(e) => handleOpenModalAdd(e, true)}
          size="small"
          // style={{
          //   backgroundColor: "#FEF5E5",
          //   color: "#FFC882",
          // }}
          style={{
            backgroundColor: "#0ce3bc",
            color: "#FFFFFF",
            height: "34px",
            borderRadius: "6px",
          }}
          disabled={!tabList}
        >
          Sửa
        </Button>
      </div>
      <div className="button-delete">
        <Button
          className="button"
          type="primary"
          icon={<DeleteOutlined />}
          onClick={() => setIsOpenModalDelete(true)}
          size="small"
          style={{
            backgroundColor: "#f64848",
            color: "white",
            height: "34px",
            borderRadius: "6px",
            // font-size: 1.4rem,
            // font-weight: 500,
          }}
          disabled={!tabList}
        >
          Xóa
        </Button>
      </div>
      {sidebarMenu === "CATEGORY_MANAGEMENT_READING" && (
        <>
          <div className="button-transfer-managers">
            <Button
              className="button"
              type="primary"
              icon={<SwapOutlined />}
              onClick={(e) => handleOpenModalTransfer(e, "manager")}
              size="small"
              style={{
                backgroundColor: "#5D87FF",
                color: "#FFFFFF",
                height: "34px",
                borderRadius: "6px",
              }}
              disabled={!tabList}
            >
              Chuyển cán bộ quản lý
            </Button>
          </div>
          <div className="button-transfer-bill-collectors">
            <Button
              className="button"
              type="primary"
              icon={<RetweetOutlined />}
              onClick={(e) => handleOpenModalTransfer(e, "billCollector")}
              size="small"
              style={{
                backgroundColor: "#5D87FF",
                color: "#FFFFFF",
                height: "34px",
                borderRadius: "6px",
              }}
              disabled={!tabList}
            >
              Chuyển cán bộ thu
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const CategoryHeader = ({
  setIsOpenModalAddSubject,
  setIsOpenModalAddReading,
  setIsOpenModalDelete,
  setIsOpenModalTransfer,
  setOpenTransferManagers,
  setViewTableDetail,
  setIsOpenModalAddPriceList,
}) => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 991px)" });
  const tabList = useSelector((state) => state.tabListContractSlice.tabList);
  const sidebarMenu = useSelector((state) => state.sidebarSlice.data);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const [openPopover, setOpenPopover] = useState(false);

  const handleOpenModalAdd = (e, isEdit) => {
    e.preventDefault();
    if (sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_SUBJECT") {
      setIsOpenModalAddSubject(true);
    }
    if (sidebarMenu === "CATEGORY_MANAGEMENT_READING") {
      setIsOpenModalAddReading(true);
    }
    if (sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST") {
      setIsOpenModalAddPriceList(true);
    }
    if (!isEdit) {
      dispatch(btnClickTabListContract(null));
    }
    setOpenPopover(false);
  };
  const handleOpenModalTransfer = (e, typeTransfer) => {
    e.preventDefault();
    if (sidebarMenu === "CATEGORY_MANAGEMENT_READING") {
      setIsOpenModalTransfer(true);
    }
    if (typeTransfer === "manager") {
      setOpenTransferManagers(true);
    } else if (typeTransfer === "billCollector") {
      setOpenTransferManagers(false);
    }
    setOpenPopover(false);
  };
  const handleViewTableDetail = (e) => {
    e.preventDefault();
    setViewTableDetail(true);
  };
  const handleOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };
  return (
    <div className="category-header-wrapper">
      <div className="category-header-content">
        {isTabletOrMobile ? (
          <Popover
            rootClassName="fix-popover-z-index"
            placement="bottomRight"
            trigger="click"
            open={openPopover}
            onOpenChange={handleOpenChange}
            content={
              <CategoryHeaderAction
                sidebarMenu={sidebarMenu}
                handleOpenModalAdd={handleOpenModalAdd}
                handleViewTableDetail={handleViewTableDetail}
                setIsOpenModalDelete={setIsOpenModalDelete}
                handleOpenModalTransfer={handleOpenModalTransfer}
                tabList={tabList}
              />
            }
          >
            <PlusOutlined />
          </Popover>
        ) : (
          <CategoryHeaderAction
            sidebarMenu={sidebarMenu}
            handleOpenModalAdd={handleOpenModalAdd}
            handleViewTableDetail={handleViewTableDetail}
            setIsOpenModalDelete={setIsOpenModalDelete}
            handleOpenModalTransfer={handleOpenModalTransfer}
            tabList={tabList}
          />
        )}
      </div>
      <div className="category-header-filter">
        <div className="filter-input">
          <Input placeholder="Nhập và Enter để tìm kiếm" />
        </div>
        {sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST" && (
          <div className="filter-datetime">
            <DatePicker locale={viVN} format={dateFormatList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;

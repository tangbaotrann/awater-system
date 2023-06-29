import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Input, Button, DatePicker, Popover } from "antd";
import {
  SyncOutlined,
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  SwapOutlined,
  RetweetOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import "./CategoryHeader.css";
import { btnClickTabListContract } from "../../redux/slices/tabListContractSlice/tabListContractSlice";
import { useMediaQuery } from "react-responsive";

const CategoryHeaderAction = ({
  sidebarMenu,
  handleOpenModalAdd,
  handleViewTableDetail,
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
          icon={<SyncOutlined />}
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
          size="small"
        >
          Thêm mới
        </Button>
      </div>
      {sidebarMenu === "CATEGORY_MANAGEMENT_PRICE_LIST" && (
        <div className="button-watch">
          <Button
            className="button"
            type="primary"
            icon={<FormOutlined />}
            onClick={(e) => handleViewTableDetail(e)}
            disable
            size="small"
            disabled={!tabList}
          >
            Xem
          </Button>
        </div>
      )}
      <div className="button-update">
        <Button
          className="button"
          type="primary"
          icon={<EditOutlined />}
          onClick={(e) => handleOpenModalAdd(e, true)}
          size="small"
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
  };
  const handleViewTableDetail = (e) => {
    e.preventDefault();
    setViewTableDetail(true);
  };

  return (
    <div className="category-header-wrapper">
      <div className="category-header-content">
        {isTabletOrMobile ? (
          <Popover
            rootClassName="fix-popover-z-index"
            placement="bottomRight"
            trigger="click"
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
            <DatePicker format={dateFormatList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;

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
import { getAllDMTuyenDoc } from "../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { getAllNguoiDung } from "../../redux/slices/NguoiDungSlice/nguoidungSlice";
import ModalAddReading from "../../pages/Category/ManagementReading/components/ModalAddReading/ModalAddReading";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";
import { btnDelete } from "../../redux/slices/tabListReading/tabListReaingSlice";
import ModalEditReading from "../../pages/Category/ManagementReading/components/ModalEditReading/ModalEditReading";

const CategoryHeaderAction = ({
  sidebarMenu,
  handleOpenModalAdd,
  handleOpenModalTransfer,
  tabList,
}) => {
  const [isOpenModalAddReading, setIsOpenModalAddReading] = useState(false);
  const [isOpenModalEditReading, setIsOpenModalEditReading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const dispatch = useDispatch();
  const rowSelected = useSelector(state => state.tabListReadingSlice.rowSelected);

  const hanldeRefresh = () => {
    dispatch(getAllDMTuyenDoc())
    dispatch(getAllNguoiDung())
  }

  // console.log(rowSelected);
  return (
    <div className="category-header-actions">
      <div className="button-refresh">
        <Button
          className="button"
          type="primary"
          icon={<RetweetOutlined />}
          style={{
            height: "34px",
            borderRadius: "6px",
          }}
          size="small"
          onClick={hanldeRefresh}
        >
          Làm mới
        </Button>
      </div>
      <div className="button-add">
        <Button
          className="button"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => setIsOpenModalAddReading(true)}
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
      <div className="button-update">
        <Button
          icon={<EditOutlined />}
          onClick={() => setIsOpenModalEditReading(true)}
          className={rowSelected ? 'category-reading-edit-button' : 'category-reading-edit-button__disabled'}
          disabled={!rowSelected}
        >
          Sửa
        </Button>
      </div>
      <div className="button-delete">
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          onClick={() => setIsOpenModalDelete(true)}
          disabled={!rowSelected}
          danger
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

      <ModalAddReading
        setIsOpenModalAddReading={setIsOpenModalAddReading}
        isOpenModalAddReading={isOpenModalAddReading}
      />

      <ModalEditReading
        isOpenModalEditReading={isOpenModalEditReading}
        setIsOpenModalEditReading={setIsOpenModalEditReading}
      />

      <ModalConfirmDelete
        isModalOpen={isOpenModalDelete}
        setIsOpenModalDelete={setIsOpenModalDelete}
      />
    </div>
  );
};

const Header = ({
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

  const renderCategoryAction = () => {
    return (
      <CategoryHeaderAction
        sidebarMenu={sidebarMenu}
        handleOpenModalAdd={handleOpenModalAdd}
        handleViewTableDetail={handleViewTableDetail}
        setIsOpenModalDelete={setIsOpenModalDelete}
        handleOpenModalTransfer={handleOpenModalTransfer}
        tabList={tabList}
      />
    )
  }

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
              renderCategoryAction()
            }
          >
            <PlusOutlined />
          </Popover>
        ) : (
          renderCategoryAction()
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

export default Header;

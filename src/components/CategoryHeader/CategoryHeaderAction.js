import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  SwapOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

import { getAllDMTuyenDoc } from "../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { getAllNguoiDung } from "../../redux/slices/NguoiDungSlice/nguoidungSlice";
import { getAllDetailPrice } from "../../redux/slices/detailPriceSlice/detailPriceSlice";
import { fetchApiAllPriceObj } from "../../redux/slices/priceObjSlice/priceObjSlice";
import ModalAddReading from "../../pages/Category/ManagementReading/components/ModalAddReading/ModalAddReading";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";
import ModalEditReading from "../../pages/Category/ManagementReading/components/ModalEditReading/ModalEditReading";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "antd";
import ModalTransferEmployee from "../../pages/Category/ManagementReading/components/ModalTransferEmployee/ModalTransferEmployee";

export const CategoryHeaderAction = ({
  sidebarMenu,
  tabList,
}) => {
  const [isOpenModalAddReading, setIsOpenModalAddReading] = useState(false);
  const [isOpenModalEditReading, setIsOpenModalEditReading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalTransfer, setIsOpenModalTransfer] = useState(false);
  const [openTransferManagers, setOpenTransferManagers] = useState(false);

  const dispatch = useDispatch();
  const rowSelected = useSelector(
    (state) => state.tabListReadingSlice.rowSelected
  );

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
    // setOpenPopover(false);
  };

  const handleOk = (type) => {
    if (type === "transferEmployee") {
      setIsOpenModalTransfer(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "transferEmployee") {
      setIsOpenModalTransfer(false);
    }
  };

  const hanldeRefresh = () => {
    dispatch(getAllDMTuyenDoc());
    dispatch(getAllNguoiDung());
    dispatch(getAllDetailPrice());
    dispatch(fetchApiAllPriceObj());
  };

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
          className={
            rowSelected
              ? "category-reading-edit-button"
              : "category-reading-edit-button__disabled"
          }
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

      <ModalTransferEmployee
        isOpenBillCollector={isOpenModalTransfer}
        openTransferManagers={openTransferManagers}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

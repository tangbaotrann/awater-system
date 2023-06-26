import React, { useState } from "react";
import CategoryHeader from "../../../components/CategoryHeader/CategoryHeader";
import ModalConfirmDelete from "../../../components/ModalConfirmDelete/ModalConfirmDelete";
import ModalAddReading from "./components/ModalAddReading/ModalAddReading";
import TableReading from "./components/TableReading/TableReading";
import ModalTransferEmployee from "./components/ModalTransferEmployee/ModalTransferEmployee";

const ManagementReading = () => {
  const [isOpenModalAddReading, setIsOpenModalAddReading] = useState(false);
  const [isOpenModalTransfer, setIsOpenModalTransfer] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [openTransferManagers, setOpenTransferManagers] = useState(false);
  const handleOk = (type) => {
    if (type === "addReading") {
      setIsOpenModalAddReading(false);
    }
    if (type === "transferEmployee") {
      setIsOpenModalTransfer(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "addReading") {
      setIsOpenModalAddReading(false);
    }
    if (type === "closeModalDeleteSubject") {
      setIsOpenModalDelete(false);
    }
    if (type === "transferEmployee") {
      setIsOpenModalTransfer(false);
    }
  };

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <CategoryHeader
          setIsOpenModalAddReading={setIsOpenModalAddReading}
          setIsOpenModalDelete={setIsOpenModalDelete}
          setIsOpenModalTransfer={setIsOpenModalTransfer}
          setOpenTransferManagers={setOpenTransferManagers}
        />
      </div>
      <div className="management-price-subject-table">
        <TableReading />
      </div>
      <ModalAddReading
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddReading}
      />
      <ModalTransferEmployee
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalTransfer}
        openTransferManagers={openTransferManagers}
      />
      <ModalConfirmDelete
        title="Thông báo"
        isModalOpen={isOpenModalDelete}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ManagementReading;

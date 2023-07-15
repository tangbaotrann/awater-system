import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalConfirmDelete from "../../../components/ModalConfirmDelete/ModalConfirmDelete";
import ModalAddReading from "./components/ModalAddReading/ModalAddReading";
import TableReading from "./components/TableReading/TableReading";
import ModalTransferEmployee from "./components/ModalTransferEmployee/ModalTransferEmployee";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import { getAllDMTuyenDoc } from "../../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { getAllNguoiDung } from "../../../redux/slices/NguoiDungSlice/nguoidungSlice";
import Header from "../../../components/CategoryHeader/CategoryHeader";

const ManagementReading = () => {
  const [isOpenModalAddReading, setIsOpenModalAddReading] = useState(false);
  const [isOpenModalTransfer, setIsOpenModalTransfer] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [openTransferManagers, setOpenTransferManagers] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(btnClickTabListContract(null));
    dispatch(getAllDMTuyenDoc())
    dispatch(getAllNguoiDung())
  }, []);

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
        <Header
          setIsOpenModalAddReading={setIsOpenModalAddReading}
          setIsOpenModalDelete={setIsOpenModalDelete}
          setIsOpenModalTransfer={setIsOpenModalTransfer}
          setOpenTransferManagers={setOpenTransferManagers}
        />
      </div>
      <div className="management-price-subject-table" style={{ marginTop: '10px' }}>
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

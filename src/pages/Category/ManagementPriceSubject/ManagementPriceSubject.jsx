import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CategoryHeader from "../../../components/CategoryHeader/CategoryHeader";
import ModalConfirmDelete from "../../../components/ModalConfirmDelete/ModalConfirmDelete";
import TablePriceSubject from "./components/TablePriceSubject/TablePriceSubject";
import ModalAddPriceSubject from "./components/ModalAddPriceSubject/ModalAddPriceSubject";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";

import "./ManagementPriceSubject.css";

const ManagementPriceSubject = () => {
  const [isOpenModalAddSubject, setIsOpenModalAddSubject] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(btnClickTabListContract(null));
  }, []);
  const handleOk = (type) => {
    if (type === "addPriceSubject") {
      setIsOpenModalAddSubject(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "addPriceSubject") {
      setIsOpenModalAddSubject(false);
    }
    if (type === "closeModalDeleteSubject") {
      setIsOpenModalDelete(false);
    }
  };

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <CategoryHeader
          setIsOpenModalAddSubject={setIsOpenModalAddSubject}
          setIsOpenModalDelete={setIsOpenModalDelete}
        />
      </div>
      <div className="management-price-subject-table">
        <TablePriceSubject />
      </div>
      <ModalAddPriceSubject
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddSubject}
      />
      <ModalConfirmDelete
        title="Thông báo"
        isModalOpen={isOpenModalDelete}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ManagementPriceSubject;

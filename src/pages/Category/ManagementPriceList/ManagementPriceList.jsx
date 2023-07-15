import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import CategoryHeader from "../../../components/CategoryHeader/CategoryHeader";
import ModalConfirmDelete from "../../../components/ModalConfirmDelete/ModalConfirmDelete";
import TablePriceList from "./components/TablePriceList/TablePriceList";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import ModalAddPriceList from "./components/ModalAddPriceList/ModalAddPriceList";

const ManagementPriceList = () => {
  const [isOpenModalAddPriceList, setIsOpenModalAddPriceList] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [viewTableDetail, setViewTableDetail] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(btnClickTabListContract(null));
  }, []);

  const handleOk = (type) => {
    if (type === "addPriceList") {
      setIsOpenModalAddPriceList(false);
    }
  };

  const handleCancel = (type) => {
    if (type === "addPriceList") {
      setIsOpenModalAddPriceList(false);
    }
    if (type === "closeModalDeleteSubject") {
      setIsOpenModalDelete(false);
    }
  };

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <CategoryHeader
          setIsOpenModalAddPriceList={setIsOpenModalAddPriceList}
          setIsOpenModalDelete={setIsOpenModalDelete}
          setViewTableDetail={setViewTableDetail}
        />
      </div>
      <div className="management-price-subject-table">
        <TablePriceList viewTableDetail={viewTableDetail} />
      </div>
      <ModalAddPriceList
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalAddPriceList}
      />
      <ModalConfirmDelete
        title="Thông báo"
        isModalOpen={isOpenModalDelete}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ManagementPriceList;

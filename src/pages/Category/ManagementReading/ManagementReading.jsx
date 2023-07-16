import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import TableReading from "./components/TableReading/TableReading";
import ModalTransferEmployee from "./components/ModalTransferEmployee/ModalTransferEmployee";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import { getAllDMTuyenDoc } from "../../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { getAllNguoiDung } from "../../../redux/slices/NguoiDungSlice/nguoidungSlice";
import Header from "../../../components/CategoryHeader/CategoryHeader";

const ManagementReading = () => {
  const [isOpenModalTransfer, setIsOpenModalTransfer] = useState(false);
  const [openTransferManagers, setOpenTransferManagers] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(btnClickTabListContract(null));
    dispatch(getAllDMTuyenDoc())
    dispatch(getAllNguoiDung())
  }, []);

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

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <Header
          setIsOpenModalTransfer={setIsOpenModalTransfer}
          setOpenTransferManagers={setOpenTransferManagers}
        />
      </div>
      <div className="management-price-subject-table" style={{ marginTop: '10px' }}>
        <TableReading />
      </div>
      
      <ModalTransferEmployee  
        handleCancel={handleCancel}
        handleOk={handleOk}
        isOpen={isOpenModalTransfer}
        openTransferManagers={openTransferManagers}
      />
      
    </div>
  );
};

export default ManagementReading;

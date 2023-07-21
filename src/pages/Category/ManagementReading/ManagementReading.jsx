import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TableReading from "./components/TableReading/TableReading";
import { btnClickTabListContract } from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import { getAllDMTuyenDoc } from "../../../redux/slices/DMTuyenDoc/tuyenDocSlice";
import { getAllNguoiDung } from "../../../redux/slices/NguoiDungSlice/nguoidungSlice";
import Header from "../../../components/CategoryHeader/CategoryHeader";

const ManagementReading = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(btnClickTabListContract(null));
    dispatch(getAllDMTuyenDoc())
    dispatch(getAllNguoiDung())
  }, []);

  return (
    <div className="management-price-subject-wrapper">
      <div className="management-price-subject-header">
        <Header />
      </div>
      <div className="management-price-subject-table" style={{ marginTop: '10px' }}>
        <TableReading />
      </div>
    </div>
  );
};

export default ManagementReading;

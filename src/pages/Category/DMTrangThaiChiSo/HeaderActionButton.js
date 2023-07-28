/* eslint-disable react/jsx-pascal-case */
import { Modal, Popconfirm, Popover, Tabs, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./CSS_Category_Status_ReadNumber.css";
import Add_Status_ReadNumber from "./Add_Status_ReadNumber";
import Edit_Status_ReadNumber from "./Edit_Status_ReadNumber";
import { deleteDMTrangThaiChiSo, getAllDMTrangThaiChiSo } from "../../../redux/slices/DMTrangThaiChiSo/trangThaiChiSoSlice";

// Tabs bottom
const tabs_bc = [
  {
    id: "1",
    label: "Làm mới",
    icon: <RetweetOutlined />,
  },
  {
    id: "2",
    label: "Thêm mới",
    icon: <PlusCircleOutlined />,
  },
  {
    id: "3",
    label: "Sửa",
    icon: <EditOutlined />,
  },
  {
    id: "4",
    label: "Xóa",
    icon: <DeleteOutlined />,
  },
];

const HeaderActionButton = ({ isTabletOrMobile }) => {
  const dispatch = useDispatch();
  const [isOpenModalAdd, setModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const rowSelected = useSelector(btnClickTabListInvoicePrintSelector);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(getAllDMTrangThaiChiSo());
    } else if (key === "2") {
      setModalAdd(true);
    } else if (key === "3") {
      setIsOpenModalEdit(true);
    } 
  };

  const handleConfirmDeleteDMTrangThai = () => {
    if (rowSelected) dispatch(deleteDMTrangThaiChiSo(rowSelected.KeyId));
  };

  // hide modal
  const hideModal = () => {
    setModalAdd(false);
    setIsOpenModalEdit(false);
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs_bc.map((_tab) => {
          return {
            label: (
              <div
                className={`tab-item-bc tab-item-bc-${_tab.id} ${
                  (rowSelected === null && _tab.id === "3") ||
                  (rowSelected === null && _tab.id === "4")
                    ? "tab-item-disabled"
                    : ""
                }`}
              >
                {_tab.id === "4" ? (
                  <Popconfirm
                    placement="bottom"
                    title="Bạn có chắc chắn muốn xóa vùng này không?"
                    onConfirm={handleConfirmDeleteDMTrangThai}
                    okText="Có"
                    cancelText="Không"
                  >
                    {_tab.icon} {_tab.label}
                  </Popconfirm>
                ) : (
                  <>
                    {_tab.icon} {_tab.label}
                  </>
                )}
              </div>
            ),
            key: _tab.id,
            disabled:
              (rowSelected === null && _tab.id === "3") ||
              (rowSelected === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={isOpenModalAdd}
        onCancel={hideModal}
        width={700}
        centered
        footer={false}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>
        <Add_Status_ReadNumber hideModal={hideModal} />
      </Modal>

      <Modal
        open={isOpenModalEdit}
        onCancel={hideModal}
        width={700}
        centered
        footer={false}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>
        <Edit_Status_ReadNumber
          hideModal={hideModal}
          dataOnUpdate={rowSelected}
        />
      </Modal>
    </>
  );
};

export default HeaderActionButton;

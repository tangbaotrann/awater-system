/* eslint-disable react/jsx-pascal-case */
import { Modal, Popconfirm, Tabs } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllListCancelSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./listCancel.css";
import EditListCancel from "./EditListCancel";
import AddListCancel from "./AddListCancel";
import {
  fetchApiAllCancel,
  fetchApiDeleteCancel,
} from "../../../redux/slices/listCancelSlice/listCancelSlice";

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

function TableListCancel({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const listCancel = useSelector(fetchApiAllListCancelSelector);
  const dispatch = useDispatch();

  const tabListCancel = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllCancel());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
    } else if (key === "2") {
      setIsOpenModalAdd(true);
    } else if (key === "3") {
      setIsOpenModalEdit(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setIsOpenModalAdd(false);
    setIsOpenModalEdit(false);
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };
  // handle delete region
  const handleConfirmDeleteRegion = () => {
    console.log(tabListCancel);
    if (tabListCancel) {
      dispatch(fetchApiDeleteCancel(tabListCancel));
    }
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
                  tabListCancel === null && _tab.id === "3"
                    ? "tab-item-disabled"
                    : tabListCancel === null && _tab.id === "4"
                    ? "tab-item-disabled"
                    : ""
                }`}
              >
                {_tab.id === "4" ? (
                  <Popconfirm
                    placement="bottom"
                    title="Bạn có chắc chắn muốn xóa vùng này không?"
                    // description={description}
                    onConfirm={handleConfirmDeleteRegion}
                    okText="Yes"
                    cancelText="No"
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
              (tabListCancel === null && _tab.id === "3") ||
              (tabListCancel === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={isOpenModalAdd ? isOpenModalAdd : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <AddListCancel
          tabListCancel={tabListCancel}
          hideModal={hideModal}
          listCancel={listCancel}
        />
      </Modal>

      <Modal
        open={isOpenModalEdit ? isOpenModalEdit : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditListCancel
          tabListCancel={tabListCancel}
          hideModal={hideModal}
          listCancel={listCancel}
        />
      </Modal>
      {/* Notification */}
      <ToastContainer position="top-right" autoClose="2000" />
    </>
  );
}

export default TableListCancel;

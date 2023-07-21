import { Modal, Popconfirm, Tabs } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllPriceListObjectSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListRegionsLocation.css";
import AddListPriceObject from "./AddListPriceObject";
import EditListPriceObject from "./EditListPriceObject";
import {
  fetchApiAllPriceListObject,
  fetchApiDeletePriceListObject,
} from "../../../redux/slices/priceListObjectSlice/priceListObjectSlice";

import { ToastContainer, toast } from "react-toastify";

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

function TableListPO({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddPO, setAddPO] = useState(false);
  const [modalEditPO, setEditPO] = useState(false);

  const dispatch = useDispatch();

  const tabListPO = useSelector(btnClickTabListInvoicePrintSelector);
  const priceObject = useSelector(fetchApiAllPriceListObjectSelector);



  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllPriceListObject());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
    } else if (key === "2") {
      setAddPO(true);
    } else if (key === "3") {
      setEditPO(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setAddPO(false);
    setEditPO(false);
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };

  // handle delete region
  const handleConfirmDeleteRegion = () => {
    console.log(tabListPO);
    if (tabListPO) {
      dispatch(fetchApiDeletePriceListObject(tabListPO));
      toast?.success("Xóa vùng thành công.");
    }
  };

  console.log(tabListPO);
  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs_bc?.map((_tab) => {
          return {
            label: (
              <div
                className={`tab-item-bc tab-item-bc-${_tab.id} ${
                  tabListPO === null && _tab.id === "3" ? "tab-item-disabled" : tabListPO === null && _tab.id === "4" ? "tab-item-disabled" : ""
                }`}
              >
                {_tab.id === "4" ? (
                  <Popconfirm
                    placement="bottom"
                    title="Bạn có chắc chắn muốn xóa vùng này không?"
                    // description={description}
                    onConfirm={handleConfirmDeleteRegion}
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
              (tabListPO === null && _tab.id === "3") ||
              (tabListPO === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={modalAddPO ? modalAddPO : openModal}
        onCancel={hideModal}
        width={600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <AddListPriceObject hideModal={hideModal} />
      </Modal>
      <Modal
        open={modalEditPO ? modalEditPO : openModal}
        onCancel={hideModal}
        width={600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditListPriceObject
          tabListPO={tabListPO}
          hideModal={hideModal}
          priceObject={priceObject}
        />
      </Modal>

      {/* Notification */}
      <ToastContainer position="top-right" autoClose="2000" />
    </>
  );
}

export default TableListPO;

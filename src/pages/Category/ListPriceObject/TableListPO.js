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
  fetchApiAllPriceObjectSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListRegionsLocation.css";
import AddListPriceObject from "./AddListPriceObject";
import EditListPriceObject from "./EditListPriceObject";
import {
  fetchApiAllPriceObject,
  fetchApiDeletePriceObject,
} from "../../../redux/slices/priceObjectSlice/priceObjectSlice";

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
  const priceObject = useSelector(fetchApiAllPriceObjectSelector);

  // useEffect(() => {
  //   dispatch(fetchApiAllPriceObject());
  // }, []);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllPriceObject());
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
      dispatch(fetchApiDeletePriceObject(tabListPO));
      toast?.success("Xóa vùng thành công.");
    }
  };

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
                  tabListPO === null && _tab.id === "2"
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

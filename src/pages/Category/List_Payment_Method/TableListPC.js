/* eslint-disable react/jsx-pascal-case */
import { Modal, Popconfirm, Popover, Tabs, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./listpayment.css";
import { ToastContainer } from "react-toastify";
import AddList_Payment_Method from "./AddList_Payment_Method";
import EditPaymentMethod from "./EditList_Payment_Method";
import {
  fetchApiAllPaymentMethod,
  fetchApiDeletePaymentMethod,
} from "../../../redux/slices/paymentMethodSlice/paymentMethodSlice";
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

function TableListPC({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [isOpenPayment, setPaymentMethod] = useState(false);
  const [isOpenEditPaymentMethod, setEditPaymentMethod] = useState(false);

  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  useEffect(() => {
    dispatch(fetchApiAllPaymentMethod());
  }, []);
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllPaymentMethod());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
    } else if (key === "2") {
      setPaymentMethod(true);
    } else if (key === "3") {
      setEditPaymentMethod(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setPaymentMethod(false);
    setEditPaymentMethod(false);

    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };
  // handle delete region
  const handleConfirmDeletePaymentMethod = () => {
    console.log(tabListbc);
    if (tabListbc) {
      dispatch(fetchApiDeletePaymentMethod(tabListbc));
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
                  tabListbc === null && _tab.id === "3"
                    ? "tab-item-disabled"
                    : tabListbc === null && _tab.id === "4"
                    ? "tab-item-disabled"
                    : ""
                }`}
              >
                {_tab.id === "4" ? (
                  <Popconfirm
                    placement="bottom"
                    title="Bạn có chắc chắn muốn xóa vùng này không?"
                    // description={description}
                    onConfirm={handleConfirmDeletePaymentMethod}
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
              (tabListbc === null && _tab.id === "3") ||
              (tabListbc === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={isOpenPayment ? isOpenPayment : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>
        <AddList_Payment_Method tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>

      <Modal
        open={isOpenEditPaymentMethod ? isOpenEditPaymentMethod : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditPaymentMethod tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
      {/* Notification */}
      <ToastContainer position="top-right" autoClose="1000" />
    </>
  );
}

export default TableListPC;

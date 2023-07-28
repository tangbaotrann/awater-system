import { Modal, Tabs, message } from "antd";
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
import "./categoryInstaller.css";
import AddInstaller from "./AddInstaller";
import EditInstaller from "./EditInstaller";

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

function TableInstaller({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddInstaller, setModalAddInstaller] = useState(false);
  const [modalEditInstaller, setModalEditInstaller] = useState(false);
  const dispatch = useDispatch();

  const tabInstaller = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      message.error("Tính năng không khả dụng");
    } else if (key === "2") {
      setModalAddInstaller(true);
    } else if (key === "3") {
      setModalEditInstaller(true);
    } else if (key === "4") {
      message.error("Tính năng không khả dụng");
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setModalAddInstaller(false);
    setModalEditInstaller(false);
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
        items={tabs_bc?.map((_tab) => {
          return {
            label: (
              <div
                className={`tab-item-bc tab-item-bc-${_tab.id} ${
                  tabInstaller === null && _tab.id === "3"
                    ? "tab-item-disabled"
                    : tabInstaller === null && _tab.id === "4"
                    ? "tab-item-disabled"
                    : ""
                }`}
              >
                {_tab.id === "4" ? (
                  <>
                    {_tab.icon} {_tab.label}
                  </>
                ) : (
                  <>
                    {_tab.icon} {_tab.label}
                  </>
                )}
              </div>
            ),
            key: _tab.id,
            disabled:
              (tabInstaller === null && _tab.id === "3") ||
              (tabInstaller === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={modalAddInstaller ? modalAddInstaller : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <AddInstaller tabKy={tabInstaller} hideModal={hideModal} />
      </Modal>

      <Modal
        open={modalEditInstaller ? modalEditInstaller : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditInstaller tabKy={tabInstaller} hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TableInstaller;

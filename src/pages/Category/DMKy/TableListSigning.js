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
import "./ListSigning.css";
import AddListWatch from "./AddListSigning";
import { getAllKy, deleteKy } from "../../../redux/slices/DMKy/kySlice.js";
import EditListSigning from "./EditListSigning";
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

function TableListWatch({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddKy, setModalAddKy] = useState(false);
  const [modalEditKy, setModalEditKy] = useState(false);
  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(getAllKy());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
    } else if (key === "2") {
      setModalAddKy(true);
    } else if (key === "3") {
      setModalEditKy(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setModalAddKy(false);
    setModalEditKy(false);
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };

  // handle delete region
  const handleConfirmDeleteRegion = () => {
    console.log(tabListbc.keyId);
    if (tabListbc) {
      dispatch(deleteKy(tabListbc.keyId));
      message?.success("Xóa Kỳ thành công.");
      dispatch(getAllKy());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
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
                className={`tab-item-bc tab-item-bc-${_tab.id} ${tabListbc === null && _tab.id === "3"
                  ? "tab-item-disabled"
                  : tabListbc === null && _tab.id === "4"
                    ? "tab-item-disabled"
                    : ""
                  }`}
              >
                {_tab.id === "4" ? (
                  <Popconfirm
                    placement="bottom"
                    title="Bạn có chắc chắn muốn xóa Kỳ này không?"
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
              (tabListbc === null && _tab.id === "3") ||
                (tabListbc === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={modalAddKy ? modalAddKy : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <AddListWatch tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
      <Modal
        open={modalEditKy ? modalEditKy : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditListSigning tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TableListWatch;

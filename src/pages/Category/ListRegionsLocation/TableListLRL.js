import { Modal, Popconfirm, Tabs } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import {
  btnClickTabListInvoicePrintSelector,
  fetchApiAllFactorySelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListRegionsLocation.css";
import ListRegionsLocation from "./AddListRegionLocation";
import EditListRegionLocation from "./EditListRegionLocation";
import { fetchApiAllFactory } from "../../../redux/slices/factorySlice/factorySlice";
import {
  fetchApiAllRegion,
  fetchApiDeleteRegion,
} from "../../../redux/slices/regionSlice/regionSlice";

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

function TableListLRL({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddLRL, setAddLRL] = useState(false);
  const [modalEditLRL, setEditLRL] = useState(false);

  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  const factoryNames = useSelector(fetchApiAllFactorySelector);

  useEffect(() => {
    dispatch(fetchApiAllFactory());
  }, []);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllRegion());
      dispatch(
        tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
      );
    } else if (key === "2") {
      setAddLRL(true);
    } else if (key === "3") {
      setEditLRL(true);
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setAddLRL(false);
    setEditLRL(false);
    dispatch(
      tabListInvoicePrintSlice.actions.btnClickTabListInvoicePrint(null)
    );
  };

  // handle delete region
  const handleConfirmDeleteRegion = () => {
    console.log(tabListbc);
    if (tabListbc) {
      dispatch(fetchApiDeleteRegion(tabListbc));
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
              (tabListbc === null && _tab.id === "3") ||
              (tabListbc === null && _tab.id === "4")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      <Modal
        open={modalAddLRL ? modalAddLRL : openModal}
        onCancel={hideModal}
        width={600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <ListRegionsLocation
          hideModal={hideModal}
          factoryNames={factoryNames}
        />
      </Modal>
      <Modal
        open={modalEditLRL ? modalEditLRL : openModal}
        onCancel={hideModal}
        width={600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditListRegionLocation
          tabListbc={tabListbc}
          hideModal={hideModal}
          factoryNames={factoryNames}
        />
      </Modal>

      {/* Notification */}
      <ToastContainer position="top-right" autoClose="1000" />
    </>
  );
}

export default TableListLRL;

import { Modal, Popconfirm, Popover, Tabs, message } from "antd";
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
  fetchApiAllRegionSelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListLocation.css";
import AddListLocation from "./AddListLocation";
import EditListLocation from "./EditListLocation";
import { fetchApiAllRegion } from "../../../redux/slices/regionSlice/regionSlice";
import {
  fetchApiAllArea,
  fetchApiDeleteArea,
} from "../../../redux/slices/areaSlice/areaSlice";

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

function TableListLocation({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddList_Location, setAddList_Location] = useState(false);
  const [modalEdit_List_Location, setEdit_List_Location] = useState(false);

  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  const regions = useSelector(fetchApiAllRegionSelector);

  // console.log("regions", regions);

  useEffect(() => {
    dispatch(fetchApiAllRegion());
  }, []);

  // // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      dispatch(fetchApiAllArea());
    } else if (key === "2") {
      setAddList_Location(true);
    } else if (key === "3") {
      setEdit_List_Location(true);
    }
  };

  // // handle delete area
  const handleConfirmDeleteRegion = () => {
    if (tabListbc) {
      dispatch(fetchApiDeleteArea(tabListbc));
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setAddList_Location(false);
    setEdit_List_Location(false);
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
                    title="Bạn có chắc chắn muốn xóa khu vực này không?"
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
        open={modalAddList_Location ? modalAddList_Location : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <AddListLocation
          // tabListbc={tabListbc}
          hideModal={hideModal}
          regions={regions}
        />
      </Modal>
      <Modal
        open={modalEdit_List_Location ? modalEdit_List_Location : openModal}
        onCancel={hideModal}
        width={700}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Sửa dữ liệu</h2>

        <EditListLocation tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>

      {/* Notification */}
      <ToastContainer position="top-right" autoClose="1000" />
    </>
  );
}

export default TableListLocation;

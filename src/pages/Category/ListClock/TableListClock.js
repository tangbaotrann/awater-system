import { Modal, Popover, Tabs, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListClock.css";
import AddListWatch from "./AddListClock";
import EditListLocation from "./EditListClock";
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
  {
    id: "5",
    label: "Gán tuyến",
    icon: <FormOutlined />,
  },
];

function TableListClock({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddList_Location, setAddList_Location] = useState(false);
  const [modalEdit_List_Location, setEdit_List_Location] = useState(false);
  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "2") {
      setAddList_Location(true);
    } else if (key === "3") {
      setEdit_List_Location(true);
    } else if (key === "4") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "5") {
      message.error("Tính năng chưa khả dụng!");
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
                  tabListbc === null && _tab.id === "2"
                }`}
              >
                {_tab.id === "7" ? (
                  <>
                    <Popover
                      rootClassName="fix-popover-z-index"
                      placement={isTabletOrMobile ? "right" : "topRight"}
                      className={tabListbc === null ? "popover-debt" : null}
                    >
                      {_tab.icon} {_tab.label} {_tab.iconRight}
                    </Popover>
                  </>
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
        open={modalAddList_Location ? modalAddList_Location : openModal}
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
    </>
  );
}

export default TableListClock;

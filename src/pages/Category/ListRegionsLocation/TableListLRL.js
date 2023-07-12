import { Modal, Popover, Tabs, message } from "antd";
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
  fetchApiAllFactorySelector,
} from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./ListRegionsLocation.css";
import ListRegionsLocation from "./AddListRegionLocation";
import EditListRegionLocation from "./EditListRegionLocation";
import { fetchApiAllFactory } from "../../../redux/slices/factorySlice/factorySlice";

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
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "2") {
      setAddLRL(true);
    } else if (key === "3") {
      setEditLRL(true);
    } else if (key === "4") {
      message.error("Tính năng chưa khả dụng!");
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
        open={modalAddLRL ? modalAddLRL : openModal}
        onCancel={hideModal}
        width={600}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm dữ liệu</h2>

        <ListRegionsLocation tabListbc={tabListbc} hideModal={hideModal} />
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
    </>
  );
}

export default TableListLRL;

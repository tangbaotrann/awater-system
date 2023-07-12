import { Modal, Popover, Tabs, message } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  RetweetOutlined,
  CloseOutlined,
  DeleteOutlined,
  LineChartOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { btnClickTabListInvoicePrintSelector } from "../../../redux/selector";
import tabListInvoicePrintSlice from "../../../redux/slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import "./BlockClock.css";
import AddBlockClock from "./AddBlockClock";
import EditBlockClock from "./EditBlockClock";
import ViewDetail from "./ViewDetail.jsx";
import FromBarChart from "./FromBarChart";
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
    // icon: <EditOutlined />,
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
    label: "Thất thoát",
    icon: <CloseOutlined />,
  },
  {
    id: "6",
    label: "Biểu đồ, số liệu",
    icon: <LineChartOutlined />,
  },
  {
    id: "7",
    label: "Tiện ích",
    icon: <MoreOutlined />,
  },
];

function TableListBC({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalAddBlock, setAddBlock] = useState(false);
  const [modalEditBlock, setEditBlock] = useState(false);
  const [modalViewDetail, setViewDetail] = useState(false);
  const [modalChart, setChart] = useState(false);
  const dispatch = useDispatch();

  const tabListbc = useSelector(btnClickTabListInvoicePrintSelector);
  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "2") {
      setAddBlock(true);
    } else if (key === "3") {
      setEditBlock(true);
    } else if (key === "4") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "5") {
      setViewDetail(true);
    } else if (key === "6") {
      setChart(true);
    } else if (key === "7") {
      message.error("Tính năng chưa khả dụng!");
      // console.log("deleted.");
      // dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setAddBlock(false);
    setEditBlock(false);
    setViewDetail(false);
    setChart(false);
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

      {/* Modal (Thêm đồng hồ vào block) */}
      <Modal
        open={modalAddBlock ? modalAddBlock : openModal}
        onCancel={hideModal}
        width={1800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Thêm đồng hồ vào block</h2>

        <AddBlockClock tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
      {/* Modal ( In Sửa Block) */}
      <Modal
        open={modalEditBlock ? modalEditBlock : openModal}
        onCancel={hideModal}
        width={1000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Cập nhật thông tin block</h2>

        <EditBlockClock tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
      {/* Modal ( Thông tin chi tiết) */}
      <Modal
        open={modalViewDetail ? modalViewDetail : openModal}
        onCancel={hideModal}
        width={1000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">Xem thông tin thất thoát</h2>

        <ViewDetail tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
      <Modal
        open={modalChart ? modalChart : openModal}
        onCancel={hideModal}
        width={1000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract"> Xem biểu đồ</h2>

        <FromBarChart tabListbc={tabListbc} hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TableListBC;

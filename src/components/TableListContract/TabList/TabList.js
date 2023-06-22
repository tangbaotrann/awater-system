import { Divider, Modal, Popover, Tabs } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  CloseCircleOutlined,
  FileExcelOutlined,
  RetweetOutlined,
  BarsOutlined,
  DashboardOutlined,
  MoreOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  btnClickSidebarMenuSelector,
  btnClickTabListContractSelector,
} from "../../../redux/selector";
import tabListContractSlice from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import { exportToExcel } from "../../../utils/exportFile";
import Reporter from "../../Reporter/Reporter";
import TableHistoryUseWater from "./TableHistoryUseWater/TableHistoryUseWater";
import FormCreateContract from "./FormCreateContract/FormCreateContract";
import FormHistoryUseWater from "./FormHistoryUseWater/FormHistoryUseWater";
import FormUpdateClock from "./FormUpdateClock/FormUpdateClock";
import TableListDebt from "./TableListDebt/TableListDebt";

// Tabs bottom
const tabs = [
  {
    id: "1",
    label: "Lập hợp đồng",
    icon: <PlusCircleOutlined />,
  },
  {
    id: "2",
    label: "Sửa hợp đồng",
    icon: <EditOutlined />,
  },
  {
    id: "3",
    label: "Xóa",
    icon: <CloseCircleOutlined />,
  },
  {
    id: "4",
    label: "Xuất excel",
    icon: <FileExcelOutlined />,
  },
  {
    id: "5",
    label: "Chuyển",
    icon: <RetweetOutlined />,
  },
  {
    id: "6",
    label: "Lịch sử SD nước",
    icon: <BarsOutlined />,
  },
  {
    id: "7",
    label: "Thay đồng hồ",
    icon: <DashboardOutlined />,
  },
  {
    id: "8",
    label: "Tiện ích",
    icon: <MoreOutlined />,
    iconRight: <CaretDownOutlined />,
  },
];

function TabList({ isTabletOrMobile }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalUpdateContract, setModalUpdateContract] = useState(false);
  const [modalHistoryWater, setModalHistoryWater] = useState(false);
  const [modalChangeClock, setModalChangeClock] = useState(false);

  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);
  const menuSidebar = useSelector(btnClickSidebarMenuSelector);

  // console.log("tabList", tabList);
  // console.log("menuSidebar", menuSidebar);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      setOpenModal(true);
    } else if (key === "2") {
      setModalUpdateContract(true);
    } else if (key === "3") {
      console.log("deleted.");
      dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
    } else if (key === "4") {
      exportToExcel("table-contract", menuSidebar);
    } else if (key === "5") {
      console.log("go to.");
    } else if (key === "6") {
      setModalHistoryWater(true);
    } else if (key === "7") {
      setModalChangeClock(true);
    } else if (key === "8") {
      console.log("Tien ich.");
    }
  };

  // hide modal
  const hideModal = () => {
    setOpenModal(false);
    setModalUpdateContract(false);
    setModalHistoryWater(false);
    setModalChangeClock(false);
    dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
  };

  return (
    <>
      <Tabs
        type={isTabletOrMobile ? "line" : "card"}
        tabPosition={isTabletOrMobile ? "left" : "top"}
        activeKey="0"
        items={tabs.map((_tab) => {
          return {
            label: (
              <div>
                {_tab.id === "8" ? (
                  <>
                    <Popover
                      trigger="click"
                      className={tabList === null ? "popover-debt" : null}
                      content={<TableListDebt tabList={tabList} />}
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
            disabled:
              (tabList === null && _tab.id === "2") ||
              (tabList === null && _tab.id === "3") ||
              (tabList === null && _tab.id === "6") ||
              (tabList === null && _tab.id === "7") ||
              (tabList === null && _tab.id === "8")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      {/* Modal (Lập hợp đồng) */}
      <Modal
        open={modalUpdateContract ? modalUpdateContract : openModal}
        onCancel={hideModal}
        width={2000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <h2 className="title-update-info-contract">
          Cập nhật thông tin hợp đồng
        </h2>

        {/* Form create contract */}
        <FormCreateContract tabList={tabList} hideModal={hideModal} />
      </Modal>

      {/* Modal (Lịch sử sử dụng nước) */}
      <Modal
        open={modalHistoryWater}
        onCancel={hideModal}
        width={2000}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        {/* Form history use water */}
        <FormHistoryUseWater tabList={tabList} />

        <Divider />

        <Reporter />

        <Divider />

        {/* Render table */}
        <TableHistoryUseWater />
      </Modal>

      {/* Modal (Thay đồng hồ) */}
      <Modal
        open={modalChangeClock}
        onCancel={hideModal}
        width={800}
        centered={true}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        {/* Form update clock */}
        <FormUpdateClock tabList={tabList} hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TabList;

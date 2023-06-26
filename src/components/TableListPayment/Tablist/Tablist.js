import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Modal, Popover, Tabs, message } from "antd";
import {
  MoreOutlined,
  CaretDownOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

import { btnClickTabListContractSelector } from "../../../redux/selector";
import tabListContractSlice from "../../../redux/slices/tabListContractSlice/tabListContractSlice";
import FormPayForOneBillSelect from "./FormPayForOneBillSelect/FormPayForOneBillSelect";

// Tabs bottom
const tabs = [
  {
    id: "1",
    label: "Thanh toán",
    icon: <CreditCardOutlined />,
  },
  {
    id: "2",
    label: "Thanh toán công nợ",
    icon: <CreditCardOutlined />,
  },
  {
    id: "3",
    label: "Thanh toán tại quầy (in biên lai)",
    icon: <CreditCardOutlined />,
  },
  {
    id: "4",
    label: "Thanh toán theo số hóa đơn",
    icon: <CreditCardOutlined />,
  },
  {
    id: "5",
    label: "Tiện ích",
    icon: <MoreOutlined />,
    iconRight: <CaretDownOutlined />,
  },
];

function TabList({ isTabletOrMobile }) {
  const [modalPayForOneBillSelected, setModalPayForOneBillSelected] =
    useState(false);

  const dispatch = useDispatch();

  const tabList = useSelector(btnClickTabListContractSelector);
  //   const menuSidebar = useSelector(btnClickSidebarMenuSelector);

  console.log("tabList", tabList);
  // console.log("menuSidebar", menuSidebar);

  // handle change tabs
  const handleChangeTabs = (key) => {
    if (key === "1") {
      setModalPayForOneBillSelected(true);
    } else if (key === "2") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "3") {
      message.error("Tính năng chưa khả dụng!");
      //   dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
    } else if (key === "4") {
      message.error("Tính năng chưa khả dụng!");
    } else if (key === "5") {
      message.error("Tính năng chưa khả dụng!");
    }
  };

  // hide modal
  const hideModal = () => {
    setModalPayForOneBillSelected(false);
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
                {_tab.id === "5" ? (
                  <>
                    <Popover
                      rootClassName="fix-popover-z-index"
                      placement={isTabletOrMobile ? "right" : "topRight"}
                      className={tabList === null ? "popover-debt" : null}
                      //   content={<TableListDebt tabList={tabList} />}
                    >
                      {_tab.icon} {_tab.label} {_tab.iconRight}
                    </Popover>
                  </>
                ) : (
                  <>
                    {_tab.icon}
                    {_tab.label}
                  </>
                )}
              </div>
            ),
            key: _tab.id,
            disabled:
              (tabList === null && _tab.id === "1") ||
              (tabList === null && _tab.id === "2") ||
              (tabList === null && _tab.id === "3") ||
              (tabList === null && _tab.id === "4") ||
              (tabList === null && _tab.id === "5")
                ? true
                : false,
          };
        })}
        onChange={handleChangeTabs}
      />

      {/* show modal payment (Thanh toán cho 1 hóa đơn được chọn) */}
      <Modal
        open={modalPayForOneBillSelected}
        onCancel={hideModal}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Divider orientation="left" style={{ fontWeight: "bold" }}>
          Thanh toán cho 1 đơn được chọn
        </Divider>

        {/* render form */}
        <FormPayForOneBillSelect hideModal={hideModal} />
      </Modal>
    </>
  );
}

export default TabList;

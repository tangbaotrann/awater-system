import { TableOutlined } from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import { useDispatch } from "react-redux";

import "./SidebarMenu.css";
import constants from "../../utils/constants";
import sidebarSlice from "../../redux/slices/sidebarSlice/sidebarSlice";
import tabListContractSlice from "../../redux/slices/tabListContractSlice/tabListContractSlice";

function SidebarMenu() {
  const dispatch = useDispatch();

  return (
    <Menu
      theme="light"
      mode="inline"
      style={{ fontSize: "1.5rem", fontWeight: "800" }}
      className="custom-sidebar-menu"
      items={[
        {
          key: constants.REGISTRATION_FORM_PARENT.key,
          icon: <TableOutlined />,
          label: constants.REGISTRATION_FORM_PARENT.label,
          children: [
            {
              label: constants.REGISTRATION_FORM.label,
              key: constants.REGISTRATION_FORM.key,
            },
            {
              label: constants.ESTIMATES.label,
              key: constants.ESTIMATES.key,
            },
            {
              label: constants.CONTRACT_MANAGER.label,
              key: constants.CONTRACT_MANAGER.key,
            },
            {
              label: constants.COVERAGE_RATE.label,
              key: constants.COVERAGE_RATE.key,
            },
            {
              label: constants.NUMBER_MANAGEMENT.label,
              key: constants.NUMBER_MANAGEMENT.key,
            },
            {
              key: constants.REGISTRATION_FORM_CHILD.key,
              label: constants.REGISTRATION_FORM_CHILD.label,
              children: [
                {
                  label: constants.REGISTRATION_OF_INSTALL.label,
                  key: constants.REGISTRATION_OF_INSTALL.key,
                },
                {
                  label: constants.DEV_CUSTOMER.label,
                  key: constants.DEV_CUSTOMER.key,
                },
                {
                  label: constants.LIST_CUSTOMER.label,
                  key: constants.LIST_CUSTOMER.key,
                },
              ],
            },
          ],
        },
        {
          key: constants.RECORD_INDEX_PARENT.key,
          icon: <TableOutlined />,
          label: constants.RECORD_INDEX_PARENT.label,
          children: [
            {
              label: constants.READINGS_INDEX.label,
              key: constants.READINGS_INDEX.key,
            },
            {
              label: constants.ENTER_INDEX.label,
              key: constants.ENTER_INDEX.key,
            },
            {
              label: constants.BILL_ORDER.label,
              key: constants.BILL_ORDER.key,
            },
            {
              label: constants.PRINT_BILL_ORDER.label,
              key: constants.PRINT_BILL_ORDER.key,
            },
            {
              label: constants.EXPORT_PRINT_BILL_ORDER.label,
              key: constants.EXPORT_PRINT_BILL_ORDER.key,
            },
          ],
        },
      ]}
      // Change layout
      onSelect={(item) => {
        // menu 1
        if (item.key === constants.REGISTRATION_FORM.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.ESTIMATES.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.CONTRACT_MANAGER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          dispatch(tabListContractSlice.actions.btnClickTabListContract(null)); // clear
        } else if (item.key === constants.COVERAGE_RATE.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.NUMBER_MANAGEMENT.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        }
        // sub menu 1.1
        else if (item.key === constants.REGISTRATION_OF_INSTALL.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.DEV_CUSTOMER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.LIST_CUSTOMER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        }
        // menu 2
        else if (item.key === constants.RECORD_INDEX_PARENT.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.READINGS_INDEX.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.ENTER_INDEX.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.PRINT_BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        } else if (item.key === constants.EXPORT_PRINT_BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
        }
      }}
    />
  );
}

export default SidebarMenu;

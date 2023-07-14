import {
  CommentOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
  FileExcelOutlined,
  ProfileOutlined,
  WarningOutlined,
} from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import { useDispatch } from "react-redux";

import "./SidebarMenu.css";
import constants from "../../utils/constants";
import sidebarSlice from "../../redux/slices/sidebarSlice/sidebarSlice";
import tabListContractSlice from "../../redux/slices/tabListContractSlice/tabListContractSlice";

function SidebarMenu({ onCloseDrawer, isTabletOrMobile }) {
  const dispatch = useDispatch();

  return (
    <Menu
      theme="light"
      mode="inline"
      style={{ fontSize: "1.5rem", fontWeight: "800" }}
      className="custom-sidebar-menu"
      defaultOpenKeys={[
        constants.REGISTRATION_FORM_PARENT.key,
        constants.REGISTRATION_FORM_CHILD.key,
        constants.RECORD_INDEX_PARENT.key,
        constants.COLLECT_MONEY.key,
        constants.FAILURE.key,
        constants.NOTICE_OF_CUSTOMS.key,
        constants.CATEGORY.key,
      ]}
      items={[
        {
          key: constants.REGISTRATION_FORM_PARENT.key,
          icon: <FileDoneOutlined />,
          label: constants.REGISTRATION_FORM_PARENT.label,
          children: [
            {
              label: constants.CONTRACT_MANAGER.label,
              key: constants.CONTRACT_MANAGER.key,
            },
            {
              key: constants.REGISTRATION_FORM_CHILD.key,
              label: constants.REGISTRATION_FORM_CHILD.label,
              children: [
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
          icon: <FileExcelOutlined />,
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
        {
          key: constants.COLLECT_MONEY.key,
          icon: <DollarCircleOutlined />,
          label: constants.COLLECT_MONEY.label,
          children: [
            {
              label: constants.PAYMENT.label,
              key: constants.PAYMENT.key,
            },
          ],
        },
        {
          key: constants.FAILURE.key,
          icon: <WarningOutlined />,
          label: constants.FAILURE.label,
          children: [
            {
              label: constants.BLOCK_CLOCK_MANAGEMENT.label,
              key: constants.BLOCK_CLOCK_MANAGEMENT.key,
            },
          ],
        },
        {
          key: constants.NOTICE_OF_CUSTOMS.key,
          icon: <CommentOutlined />,
          label: constants.NOTICE_OF_CUSTOMS.label,
          children: [
            {
              label: constants.LOG_NOTICE.label,
              key: constants.LOG_NOTICE.key,
            },
          ],
        },
        {
          key: constants.CATEGORY.key,
          icon: <ProfileOutlined />,
          label: constants.CATEGORY.label,
          children: [
            {
              label: constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.label,
              key: constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.key,
            },
            {
              label: constants.CATEGORY_MANAGEMENT_READING.label,
              key: constants.CATEGORY_MANAGEMENT_READING.key,
            },
            {
              label: constants.CATEGORY_MANAGEMENT_PRICE_LIST.label,
              key: constants.CATEGORY_MANAGEMENT_PRICE_LIST.key,
            },
            {
              label: constants.CATEGORY_MANAGEMENT_LRL.label,
              key: constants.CATEGORY_MANAGEMENT_LRL.key,
            },
            {
              label: constants.CATEGORY_MANAGEMENT_LOCATION.label,
              key: constants.CATEGORY_MANAGEMENT_LOCATION.key,
            },
            {
              label: constants.CATEGORY_PAYMENT_METHOD.label,
              key: constants.CATEGORY_PAYMENT_METHOD.key,
            },
            {
              label: constants.CATEGORY_SCOPE.label,
              key: constants.CATEGORY_SCOPE.key,
            },
            {
              label: constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.label,
              key: constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.key,
            },
            {
              label: constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.label,
              key: constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.key,
            },
            {
              label: constants.CATEGORY_WATCH.label,
              key: constants.CATEGORY_WATCH.key,
            },
            {
              label: constants.CATEGORY_STATUS_READ_NUMBER.label,
              key: constants.CATEGORY_STATUS_READ_NUMBER.key,
            },
          ],
        },
      ]}
      // Change layout
      onSelect={(item) => {
        // menu 1
        if (item.key === constants.CONTRACT_MANAGER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          dispatch(tabListContractSlice.actions.btnClickTabListContract(null)); // clear
          sessionStorage.setItem("currentPage", constants.CONTRACT_MANAGER.key); // save to session
          isTabletOrMobile && onCloseDrawer(); // when click item menu -> auto close
        }
        // sub menu 1.1
        else if (item.key === constants.DEV_CUSTOMER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.DEV_CUSTOMER.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.LIST_CUSTOMER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.LIST_CUSTOMER.key);
          isTabletOrMobile && onCloseDrawer();
        }
        // menu 2
        else if (item.key === constants.RECORD_INDEX_PARENT.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.RECORD_INDEX_PARENT.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.READINGS_INDEX.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.READINGS_INDEX.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.ENTER_INDEX.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.ENTER_INDEX.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.BILL_ORDER.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.PRINT_BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.PRINT_BILL_ORDER.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.EXPORT_PRINT_BILL_ORDER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.EXPORT_PRINT_BILL_ORDER.key
          );
          isTabletOrMobile && onCloseDrawer();
        }
        // menu 4
        else if (item.key === constants.PAYMENT.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          dispatch(tabListContractSlice.actions.btnClickTabListContract(null));
          sessionStorage.setItem("currentPage", constants.PAYMENT.key);
          isTabletOrMobile && onCloseDrawer();
        }
        // menu 3
        else if (item.key === constants.CATEGORY.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.CATEGORY.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (
          item.key === constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.key
        ) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_MANAGEMENT_READING.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMENT_READING.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_MANAGEMENT_PRICE_LIST.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMENT_PRICE_LIST.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_MANAGEMENT_LRL.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMENT_LRL.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_MANAGEMENT_LOCATION.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMENT_LOCATION.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (
          item.key === constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.key
        ) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (
          item.key === constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.key
        ) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_WATCH.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.CATEGORY_WATCH.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_PAYMENT_METHOD.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_PAYMENT_METHOD.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_SCOPE.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.CATEGORY_SCOPE.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_CUSTOMER_TYPE.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_CUSTOMER_TYPE.key
          );
        } else if (item.key === constants.CATEGORY_WATCH.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.CATEGORY_WATCH.key);
          isTabletOrMobile && onCloseDrawer();
        }

        // menu 5
        else if (item.key === constants.FAILURE.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.FAILURE.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.BLOCK_CLOCK_MANAGEMENT.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.BLOCK_CLOCK_MANAGEMENT.key
          );
          isTabletOrMobile && onCloseDrawer();
        }
        // menu 6
        else if (item.key === constants.NOTICE_OF_CUSTOMS.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.NOTICE_OF_CUSTOMS.key
          );
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.LOG_NOTICE.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem("currentPage", constants.LOG_NOTICE.key);
          isTabletOrMobile && onCloseDrawer();
        } else if (item.key === constants.CATEGORY_STATUS_READ_NUMBER.key) {
          dispatch(sidebarSlice.actions.btnClickSidebarMenu(item.key));
          sessionStorage.setItem(
            "currentPage",
            constants.CATEGORY_STATUS_READ_NUMBER.key
          );
          isTabletOrMobile && onCloseDrawer();
        }
      }}
    />
  );
}

export default SidebarMenu;

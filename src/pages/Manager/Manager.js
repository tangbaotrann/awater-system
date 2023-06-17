import { useSelector } from "react-redux";

import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import constants from "../../utils/constants";
import Contract from "./Contract/Contract";
import ReadingIndex from "../ReadingIndex/ReadingIndex";

function Manager() {
  // change layout
  const sidebarMenu = useSelector(btnClickSidebarMenuSelector);

  return (
    <DefaultLayout>
      {sidebarMenu === constants.REGISTRATION_FORM.key ? ( // menu 1
        <h1>Đơn đăng ký</h1>
      ) : sidebarMenu === constants.ESTIMATES.key ? (
        <h1>Dự toán</h1>
      ) : sidebarMenu === constants.CONTRACT_MANAGER.key ? (
        <Contract />
      ) : sidebarMenu === constants.COVERAGE_RATE.key ? (
        <h1>Tỷ lệ bao phủ</h1>
      ) : sidebarMenu === constants.NUMBER_MANAGEMENT.key ? (
        <h1>Số quản lý đồng hồ</h1>
      ) : sidebarMenu === constants.REGISTRATION_OF_INSTALL.key ? ( // sub menu 1.1
        <h1>REGISTRATION_OF_INSTALL</h1>
      ) : sidebarMenu === constants.DEV_CUSTOMER.key ? (
        <h1>DEV_CUSTOMER</h1>
      ) : sidebarMenu === constants.LIST_CUSTOMER.key ? (
        <h1>LIST_CUSTOMER</h1>
      ) : sidebarMenu === constants.RECORD_INDEX_PARENT.key ? ( // menu 2
        <h1>RECORD_INDEX_PARENT</h1>
      ) : sidebarMenu === constants.READINGS_INDEX.key ? (
        <ReadingIndex/>
      ) : sidebarMenu === constants.ENTER_INDEX.key ? (
        <h1>ENTER_INDEX</h1>
      ) : sidebarMenu === constants.BILL_ORDER.key ? (
        <h1>BILL_ORDER</h1>
      ) : sidebarMenu === constants.PRINT_BILL_ORDER.key ? (
        <h1>PRINT_BILL_ORDER</h1>
      ) : sidebarMenu === constants.EXPORT_PRINT_BILL_ORDER.key ? (
        <h1>EXPORT_PRINT_BILL_ORDER</h1>
      ) : null}
    </DefaultLayout>
  );
}

export default Manager;

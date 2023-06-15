import { useSelector } from "react-redux";

import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import constants from "../../utils/constants";
import Contract from "./Contract/Contract";

function Manager() {
  // change layout
  const sidebarMenu = useSelector(btnClickSidebarMenuSelector);

  return (
    <DefaultLayout>
      {sidebarMenu === constants.RECEIPT_DOC ? ( // menu 1
        <h1>Tiếp nhận hồ sơ</h1>
      ) : sidebarMenu === constants.ACCEPTANCE_DOC ? (
        <h1>Thụ lý hồ sơ</h1>
      ) : sidebarMenu === constants.DESIGN_DOC ? (
        <h1>Hồ sơ thiết kế</h1>
      ) : sidebarMenu === constants.REGISTRATION_FORM ? ( // menu 2
        <h1>Đơn đăng ký</h1>
      ) : sidebarMenu === constants.ESTIMATES ? (
        <h1>Dự toán</h1>
      ) : sidebarMenu === constants.CONTRACT_MANAGER ? (
        <Contract />
      ) : sidebarMenu === constants.COVERAGE_RATE ? (
        <h1>Tỷ lệ bao phủ</h1>
      ) : sidebarMenu === constants.NUMBER_MANAGEMENT ? (
        <h1>Số quản lý đồng hồ</h1>
      ) : null}
    </DefaultLayout>
  );
}

export default Manager;

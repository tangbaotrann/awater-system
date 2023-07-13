import { useSelector } from "react-redux";

import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import { btnClickSidebarMenuSelector } from "../../redux/selector";
import constants from "../../utils/constants";
import Contract from "./Contract/Contract";
import ReadingIndex from "../ReadingIndex/ReadingIndex";
import CustomerDevelop from "./CustomerDevelop/CustomerDevelop";
import CustomerList from "./CustomerList/CustomerList";
import EnterIndexPage from "../EnterIndexPage/EnterIndexPage.jsx";
import Invoice from "../Invoice/Invoice";
import InvoicePrint from "../InvoicePrint/InvoicePrint";
// import ManagementPriceSubject from "../Category/ManagementPriceSubject/ManagementPriceSubject";
import ManagementReading from "../Category/ManagementReading/ManagementReading";
import ManagementPriceList from "../Category/ManagementPriceList/ManagementPriceList";
import Payment from "./Payment/Payment";
import BlockClock from "../BlockClock/BlockClock";
import LogNotice from "../LogNotice/LogNotice";
import ListLocation from "../Category/List_Location/List_Location.jsx";
import ListRegionsLocation from "../Category/ListRegionsLocation/ListRegionsLocation";
<<<<<<< HEAD
import ListPriceObject from "../Category/ListPriceObject/ListPriceObject";import ListPaymentMethod from "../Category/List_Payment_Method/List_Payment_Method";
import CustomerType from "../Category/Category_Customer_Type/CustomerType";
import List_Location from "../Category/List_Location/List_Location.jsx";

=======
import ListPriceObject from "../Category/ListPriceObject/ListPriceObject";
import ListScope from "../Category/ListScope/ListScope";
import ListReasons from "../Category/ListReasons/ListReasons";
import ListCancel from "../Category/ListCancel/ListCancel";
import ListWatch from "../Category/ListWatch/ListWatch";
>>>>>>> api/priceObject
function Manager() {
  const currentPage = sessionStorage.getItem("currentPage");

  // change layout
  const sidebarMenu = useSelector(btnClickSidebarMenuSelector);

  return (
    <DefaultLayout currentPage={currentPage}>
      {sidebarMenu === constants.CONTRACT_MANAGER.key || // menu 1
      currentPage === constants.CONTRACT_MANAGER.key ? (
        <Contract />
      ) : sidebarMenu === constants.DEV_CUSTOMER.key || // sub menu 1.1
        currentPage === constants.DEV_CUSTOMER.key ? (
        <CustomerDevelop />
      ) : sidebarMenu === constants.LIST_CUSTOMER.key ||
        currentPage === constants.LIST_CUSTOMER.key ? (
        <CustomerList />
      ) : sidebarMenu === constants.RECORD_INDEX_PARENT.key ||
        currentPage === constants.RECORD_INDEX_PARENT.key ? ( // menu 2
        <h1>RECORD_INDEX_PARENT</h1>
      ) : sidebarMenu === constants.READINGS_INDEX.key ||
        currentPage === constants.READINGS_INDEX.key ? (
        <ReadingIndex />
      ) : sidebarMenu === constants.ENTER_INDEX.key ||
        currentPage === constants.ENTER_INDEX.key ? (
        <EnterIndexPage />
      ) : sidebarMenu === constants.BILL_ORDER.key ||
        currentPage === constants.BILL_ORDER.key ? (
        <Invoice />
      ) : sidebarMenu === constants.PRINT_BILL_ORDER.key ||
        currentPage === constants.PRINT_BILL_ORDER.key ? (
        <InvoicePrint />
      ) : sidebarMenu === constants.EXPORT_PRINT_BILL_ORDER.key ||
        currentPage === constants.EXPORT_PRINT_BILL_ORDER.key ? (
        <h1>EXPORT_PRINT_BILL_ORDER</h1>
      ) : sidebarMenu === constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.key ||
        currentPage === constants.CATEGORY_MANAGEMENT_PRICE_SUBJECT.key ? ( //menu 3
        // <ManagementPriceSubject />
        <ListPriceObject />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMENT_READING.key ||
        currentPage === constants.CATEGORY_MANAGEMENT_READING.key ? (
        <ManagementReading />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMENT_PRICE_LIST.key ||
        currentPage === constants.CATEGORY_MANAGEMENT_PRICE_LIST.key ? (
        <ManagementPriceList />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMENT_LRL.key ||
        currentPage === constants.CATEGORY_MANAGEMENT_LRL.key ? (
        <ListRegionsLocation />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMENT_LOCATION.key ||
        currentPage === constants.CATEGORY_MANAGEMENT_LOCATION.key ? (
<<<<<<< HEAD
        <List_Location />
      ) : sidebarMenu === constants.CATEGORY_PAYMENT_METHOD.key ||
        currentPage === constants.CATEGORY_PAYMENT_METHOD.key ? (
        <ListPaymentMethod />
      ) : sidebarMenu === constants.CATEGORY_CUSTOMER_TYPE.key ||
        currentPage === constants.CATEGORY_CUSTOMER_TYPE.key ? (
        <CustomerType />
=======
        // <h1>Danh muc vung</h1>
        <ListLocation />
      ) : sidebarMenu === constants.CATEGORY_SCOPE.key ||
        currentPage === constants.CATEGORY_SCOPE.key ? (
        <ListScope />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.key ||
        currentPage === constants.CATEGORY_MANAGEMEN_REASONS_INSTEAD.key ? (
        <ListReasons />
      ) : sidebarMenu === constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.key ||
        currentPage === constants.CATEGORY_MANAGEMEN_REASONS_CANCEL.key ? (
        <ListCancel />
      ) : sidebarMenu === constants.CATEGORY_WATCH.key ||
        currentPage === constants.CATEGORY_WATCH.key ? (
        <ListWatch />
>>>>>>> api/priceObject
      ) : sidebarMenu === constants.PAYMENT.key ||
        currentPage === constants.PAYMENT.key ? ( // menu 4
        <Payment />
      ) : sidebarMenu === constants.BLOCK_CLOCK_MANAGEMENT.key ||
        currentPage === constants.BLOCK_CLOCK_MANAGEMENT.key ? ( // menu 5
        <BlockClock />
      ) : sidebarMenu === constants.LOG_NOTICE.key ||
        currentPage === constants.LOG_NOTICE.key ? ( // menu 6
        <LogNotice />
      ) : null}
    </DefaultLayout>
  );
}
export default Manager;

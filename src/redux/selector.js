// click sidebar menu
export const btnClickSidebarMenuSelector = (state) => state.sidebarSlice.data;

// click option factory name
export const btnClickOptionFactorySelector = (state) =>
  state.reportContractSlice.factoryName;

// click tab list (Contract)
export const btnClickTabListContractSelector = (state) =>
  state.tabListContractSlice.tabList;
//click tab list  (Invoice Print)
export const btnClickTabListInvoicePrintSelector = (state) =>
  state.tabListInvoicePrintSlice.tabList;
//click tab list  (Invoice Print)
export const btnClickTabListEnterIndexPageSelector = (state) =>
  state.tabListEnterIndexPageSlice.tabListIP;

/* GET DATA */
// get all region
export const fetchApiAllRegionSelector = (state) => state.regionSlice.data;

// get all factory
export const fetchApiAllFactorySelector = (state) => state.factorySlice.data;

// get all price List Object

export const fetchApiAllPriceListObjectSelector = (state) =>
  state.priceListObjectSlice.data;

// get all area
export const fetchApiAllAreaSelector = (state) => state.areaSlice.data;

// get all reading
export const fetchApiAllReadingSelector = (state) => state.readingSlice.data;

// get all customer
export const fetchApiAllCustomerSelector = (state) =>
  state.contractSlice.dataCustomer;

// get all price obj
export const fetchApiAllPriceObjSelector = (state) => state.priceObjSlice.data;

// get all payment method
export const fetchApiAllPaymentMethodSelector = (state) =>
  state.paymentMethodSlice.data;

// get create customer
export const fetchApiCreateCustomerSelector = (state) =>
  state.contractSlice.createCustomer;

// get create info contract
export const fetchApiCreateInfoContractSelector = (state) =>
  state.contractSlice.createInfoContract;

// get all manager
export const fetchApiGetAllManagerSelector = (state) =>
  state.nguoidung.danhSachNguoiDung;

// get find by keyId customer
export const fetchApiFindByKeyIdCustomerSelector = (state) =>
  state.contractSlice.findByKeyIdCustomer;

// get all bang gia
export const fetchApiAllBangGiaSelector = (state) => state.bangGiaSlice.data;

// get all chi tiet gia
export const fetchApiAllDetailPriceSelector = (state) =>
  state.detailPriceSlice.data;
// // get all price obj
export const fetchApiAllPriceObjectSelector = (state) =>
  state.priceObjectSlice.data;

// // get all price obj
// export const fetchApiAllPriceObjectSelector = (state) =>
//   state.priceObject.ListPriceOject;

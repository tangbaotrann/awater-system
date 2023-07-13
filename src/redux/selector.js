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

// get all region
export const fetchApiAllRegionSelector = (state) => state.regionSlice.data;

// get all factory
export const fetchApiAllFactorySelector = (state) => state.factorySlice.data;

// get all area
export const fetchApiAllAreaSelector = (state) => state.areaSlice.data;

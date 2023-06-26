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
  state.tabListInvoicePrintSlice.tabListIP;


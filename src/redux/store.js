import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice/sidebarSlice";
import reportContractSlice from "./slices/reportContractSlice/reportContractSlice";
import tabListContractSlice from "./slices/tabListContractSlice/tabListContractSlice";
import tabListInvoicePrintSlice from "./slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import tabListEnterIndexPageSlice from "./slices/tabListEnterIndexPageSlice/tabListEnterIndexPageSlice";
import regionSlice from "./slices/regionSlice/regionSlice";
import factorySlice from "./slices/factorySlice/factorySlice";
import priceObjectSlice from "./slices/priceObjectSlice/priceObjectSlice";
import areaSlice from "./slices/areaSlice/areaSlice";
import bangGiaSlice from "./slices/bangGiaSlice/bangGiaSlice";

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice.reducer,
    reportContractSlice: reportContractSlice.reducer,
    tabListContractSlice: tabListContractSlice.reducer,
    tabListInvoicePrintSlice: tabListInvoicePrintSlice.reducer,
    tabListEnterIndexPageSlice: tabListEnterIndexPageSlice.reducer,
    regionSlice: regionSlice.reducer,
    factorySlice: factorySlice.reducer,
    priceObjectSlice: priceObjectSlice.reducer,
    areaSlice: areaSlice.reducer,
    bangGia: bangGiaSlice.reducer,
  },
});

export default store;

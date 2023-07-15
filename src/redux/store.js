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
import readingSlice from "./slices/readingSlice/readingSlice";
import contractSlice from "./slices/contractSlice/contractSlice";
import priceObjSlice from "./slices/priceObjSlice/priceObjSlice";
import paymentMethodSlice from "./slices/paymentMethodSlice/paymentMethodSlice";

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
    readingSlice: readingSlice.reducer,
    contractSlice: contractSlice.reducer,
    priceObjSlice: priceObjSlice.reducer,
    paymentMethodSlice: paymentMethodSlice.reducer,
  },
});

export default store;

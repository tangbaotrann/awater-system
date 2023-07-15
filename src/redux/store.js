import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice/sidebarSlice";
import reportContractSlice from "./slices/reportContractSlice/reportContractSlice";
import tabListContractSlice from "./slices/tabListContractSlice/tabListContractSlice";
import tabListInvoicePrintSlice from "./slices/tabListInvoicePrintSlice/tabListInvoicePrintSlice";
import tabListEnterIndexPageSlice from "./slices/tabListEnterIndexPageSlice/tabListEnterIndexPageSlice";
import regionSlice from "./slices/regionSlice/regionSlice";
import factorySlice from "./slices/factorySlice/factorySlice";
import priceListObjectSlice from "./slices/priceListObjectSlice/priceListObjectSlice";
import areaSlice from "./slices/areaSlice/areaSlice";
import tuyenDocSlice from "./slices/DMTuyenDoc/tuyenDocSlice";
import nguoidungSlice from "./slices/NguoiDungSlice/nguoidungSlice";

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice.reducer,
    reportContractSlice: reportContractSlice.reducer,
    tabListContractSlice: tabListContractSlice.reducer,
    tabListInvoicePrintSlice: tabListInvoicePrintSlice.reducer,
    tabListEnterIndexPageSlice: tabListEnterIndexPageSlice.reducer,
    regionSlice: regionSlice.reducer,
    factorySlice: factorySlice.reducer,
    priceListObjectSlice: priceListObjectSlice.reducer,
    areaSlice: areaSlice.reducer,
    tuyendoc: tuyenDocSlice.reducer,
    nguoidung: nguoidungSlice.reducer,
  },
});

export default store;

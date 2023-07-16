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
import bangGiaSlice from "./slices/bangGiaSlice/bangGiaSlice";
import tuyenDocSlice from "./slices/DMTuyenDoc/tuyenDocSlice";
import nguoidungSlice from "./slices/NguoiDungSlice/nguoidungSlice";
import priceObjSlice from "./slices/priceObjSlice/priceObjSlice";
import paymentMethodSlice from "./slices/paymentMethodSlice/paymentMethodSlice";
import contractSlice from "./slices/contractSlice/contractSlice";
import detailPriceSlice from "./slices/detailPriceSlice/detailPriceSlice";

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
    bangGia: bangGiaSlice.reducer,
    tuyendoc: tuyenDocSlice.reducer,
    nguoidung: nguoidungSlice.reducer,
    priceObjSlice: priceObjSlice.reducer,
    paymentMethodSlice: paymentMethodSlice.reducer,
    contractSlice: contractSlice.reducer,
    detailPriceSlice: detailPriceSlice.reducer,
  },
});

export default store;

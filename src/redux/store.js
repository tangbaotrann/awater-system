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
import tabListReadingSlice from "./slices/tabListReading/tabListReaingSlice";
import readingSlice from "./slices/readingSlice/readingSlice";
import priceObjectSlice from "./slices/priceObjectSlice/priceObjectSlice";
import trangThaiChiSo from "./slices/DMTrangThaiChiSo/trangThaiChiSoSlice";
import kySlice from "./slices/DMKy/kySlice";
import wardSlice from "./slices/wardSlice/wardSlice";
import listCancelSlice from "./slices/listCancelSlice/listCancelSlice";
import citySlice from "./slices/citySlice/citySlice";
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
    ky_ghi_chi_so: kySlice.reducer,
    nguoidung: nguoidungSlice.reducer,
    priceObjSlice: priceObjSlice.reducer,
    paymentMethodSlice: paymentMethodSlice.reducer,
    contractSlice: contractSlice.reducer,
    detailPriceSlice: detailPriceSlice.reducer,
    tabListReadingSlice: tabListReadingSlice.reducer,
    readingSlice: readingSlice.reducer,
    priceObjectSlice: priceObjectSlice.reducer,
    trangThaiChiSo: trangThaiChiSo.reducer,
    wardSlice: wardSlice.reducer,
    listCancelSlice: listCancelSlice.reducer,
    tinh: citySlice.reducer,
  },
});

export default store;

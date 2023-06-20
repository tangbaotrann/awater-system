import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice/sidebarSlice";
import reportContractSlice from "./slices/reportContractSlice/reportContractSlice";
import tabListContractSlice from "./slices/tabListContractSlice/tabListContractSlice";

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice.reducer,
    reportContractSlice: reportContractSlice.reducer,
    tabListContractSlice: tabListContractSlice.reducer,
  },
});

export default store;

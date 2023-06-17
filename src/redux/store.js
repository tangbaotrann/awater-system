import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice/sidebarSlice";
import reportContractSlice from "./slices/reportContractSlice/reportContractSlice";

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice.reducer,
    reportContractSlice: reportContractSlice.reducer,
  },
});

export default store;

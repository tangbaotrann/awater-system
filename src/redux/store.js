import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./slices/sidebarSlice/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice.reducer,
  },
});

export default store;

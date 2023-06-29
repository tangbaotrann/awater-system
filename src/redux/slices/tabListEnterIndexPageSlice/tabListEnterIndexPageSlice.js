import { createSlice } from "@reduxjs/toolkit";

const tabListEnterIndexPageSlice = createSlice({
  name: "tabListInvoicePrintSlice",
  initialState: {
    tabList: null,
  },
  reducers: {
    btnClickTabListEnterIndexPage: (state, action) => {
      state.tabList = action.payload;
    },
  },
});

export default tabListEnterIndexPageSlice;

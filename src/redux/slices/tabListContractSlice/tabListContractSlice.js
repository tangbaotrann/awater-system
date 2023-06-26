import { createSlice } from "@reduxjs/toolkit";

const tabListContractSlice = createSlice({
  name: "tabListContract",
  initialState: {
    tabList: null,
  },
  reducers: {
    btnClickTabListContract: (state, action) => {
      state.tabList = action.payload;
    },
  },
});

export const { btnClickTabListContract } = tabListContractSlice.actions;
export default tabListContractSlice;

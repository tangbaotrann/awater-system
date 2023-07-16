import { createSlice } from "@reduxjs/toolkit";

const tabListContractSlice = createSlice({
  name: "tabListContractSlice",
  initialState: {
    tabList: null,
    isDeleteBtn: false,
  },
  reducers: {
    btnClickTabListContract: (state, action) => {
      state.tabList = action.payload;
    },
    btnDelete: (state, action) => {
      state.isDeleteBtn = action.payload;
    },
  },
});

export const { btnClickTabListContract, btnDelete } =
  tabListContractSlice.actions;
export default tabListContractSlice;

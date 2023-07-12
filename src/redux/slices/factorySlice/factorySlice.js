import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../../services";

const factorySlice = createSlice({
  name: "factory",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllFactory.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all factory
export const fetchApiAllFactory = createAsyncThunk(
  "factory/fetchApiAllFactory",
  async () => {
    try {
      const res = await getRequest(`nha-may/get-all`);

      console.log(res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export default factorySlice;

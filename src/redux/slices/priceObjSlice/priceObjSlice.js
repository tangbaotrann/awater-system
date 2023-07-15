import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../../services";

const priceObjSlice = createSlice({
  name: "priceObj",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllPriceObj.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all price obj
const fetchApiAllPriceObj = createAsyncThunk(
  "priceObj/fetchApiAllPriceObj",
  async () => {
    try {
      const res = await getRequest("doi-tuong-gia/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export { fetchApiAllPriceObj };

export default priceObjSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../../services";

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllPaymentMethod.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch all payment method
const fetchApiAllPaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiAllPaymentMethod",
  async () => {
    try {
      const res = await getRequest("phuong-thuc-thanh-toan/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export { fetchApiAllPaymentMethod };

export default paymentMethodSlice;

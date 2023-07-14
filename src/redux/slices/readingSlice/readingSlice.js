import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../../services";

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllReading.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all reading
const fetchApiAllReading = createAsyncThunk(
  "reading/fetchApiAllReading",
  async () => {
    try {
      const res = await getRequest("tuyen-doc/get-all");

      console.log("res all reading ->", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api add reading
const fetchApiAddReading = createAsyncThunk(
  "reading/fetchApiAddReading",
  async () => {
    try {
    } catch (error) {
      console.log({ error });
    }
  }
);

export { fetchApiAllReading, fetchApiAddReading };

export default readingSlice;

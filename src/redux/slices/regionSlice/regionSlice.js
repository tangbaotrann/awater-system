import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services";

const regionSlice = createSlice({
  name: "region",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllRegion.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all region
export const fetchApiAllRegion = createAsyncThunk(
  "region/fetchApiAllRegion",
  async () => {
    try {
      const res = await getRequest("vung/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api add region
export const fetchApiAddRegion = createAsyncThunk(
  "region/fetchApiAddRegion",
  async (values) => {
    try {
      const { id, nhaMayId, tenVung } = values;

      const res = await postRequest("vung/add", {
        id,
        nhaMayId,
        tenVung,
      });

      console.log("res add region ->", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export default regionSlice;

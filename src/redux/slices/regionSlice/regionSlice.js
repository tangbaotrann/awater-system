import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services";
import { toast } from "react-toastify";

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
const fetchApiAllRegion = createAsyncThunk(
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
const fetchApiAddRegion = createAsyncThunk(
  "region/fetchApiAddRegion",
  async (values) => {
    try {
      const { id, nhaMayId, tenVung } = values;

      const res = await postRequest("vung/add", {
        id,
        nhaMayId,
        tenVung,
      });

      toast.success("Thêm thành công vùng.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api update region
const fetchApiUpdateRegion = createAsyncThunk(
  "region/fetchApiUpdateRegion",
  async (values) => {
    try {
      const { id, nhaMayId, tenVung } = values;

      const res = await postRequest("vung/update", {
        id,
        nhaMayId,
        tenVung,
      });

      toast.success("Cập nhật vùng thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete region
const fetchApiDeleteRegion = createAsyncThunk(
  "region/fetchApiDeleteRegion",
  async (tabListbc) => {
    try {
      const { id } = tabListbc;

      const res = await postRequest(`vung/delete?id=${id}`, null);

      toast.success("Xóa vùng thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllRegion,
  fetchApiAddRegion,
  fetchApiUpdateRegion,
  fetchApiDeleteRegion,
};

export default regionSlice;

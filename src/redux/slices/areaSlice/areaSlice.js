import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../services";

const areaSlice = createSlice({
  name: "area",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAllArea.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllArea.fulfilled, (state, action) => {
        console.log("ac.pay", action.payload);
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchApiAddArea.fulfilled, (state, action) => {
        const newArea = action.payload;

        console.log("new area slice ->", newArea);
      });
  },
});

// fetch api all Area
const fetchApiAllArea = createAsyncThunk("area/fetchApiAllArea", async () => {
  try {
    const res = await getRequest("khu-vuc/get-all");

    // console.log("res all Area", res);

    return res.data.data;
  } catch (error) {
    console.log({ error });
  }
});

// fetch api add area
const fetchApiAddArea = createAsyncThunk(
  "area/fetchApiAddArea",
  async (values) => {
    try {
      const { keyId, tenKhuVuc, vungId } = values;

      const res = await postRequest("khu-vuc/add", {
        keyId,
        tenKhuVuc,
        vungId,
      });

      toast.success("Thêm thành công khu vực.");

      return res.data.data;
    } catch (error) {
      toast.error("Khu vực đã tồn tại!");
      console.log({ error });
    }
  }
);

// fetch api update area
const fetchApiUpdateArea = createAsyncThunk(
  "area/fetchApiUpdateArea",
  async ({ values, tabListbc }) => {
    try {
      const { keyId, tenKhuVuc, vungId } = values;

      const res = await putRequest(`khu-vuc/update/${tabListbc.keyId}`, {
        keyId,
        tenKhuVuc,
        vungId,
      });

      toast.success("Cập nhật khu vực thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete area
const fetchApiDeleteArea = createAsyncThunk(
  "area/fetchApiDeleteArea",
  async (tabListbc) => {
    try {
      const { keyId } = tabListbc;

      const res = await deleteRequest(`khu-vuc/delete/${keyId}`, null);

      toast.success("Xóa khu vực thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllArea,
  fetchApiAddArea,
  fetchApiUpdateArea,
  fetchApiDeleteArea,
};

export default areaSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../services";
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
      const { keyId, nhaMayId, tenVung } = values;

      const res = await postRequest("vung/add", {
        keyId,
        nhaMayId,
        tenVung,
      });

      toast.success("Thêm thành công vùng.");

      return res.data.data;
    } catch (error) {
      toast.error("Tên vùng đã tồn tại!");
      console.log({ error });
    }
  }
);

// fetch api update region
const fetchApiUpdateRegion = createAsyncThunk(
  "region/fetchApiUpdateRegion",
  async (values) => {
    try {
      const { keyId, nhaMayId, tenVung } = values;

      const res = await putRequest(`vung/update/${keyId}`, {
        keyId,
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
      const { keyId } = tabListbc;

      const res = await deleteRequest(`vung/delete/${keyId}`, null);

      toast.success("Xóa vùng thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api search region by id
const fetchApiSearchByIdRegion = createAsyncThunk(
  "region/fetchApiSearchByIdRegion",
  async (idRegion) => {
    try {
      const res = await getRequest(`vung/get-singe?id=${idRegion}`);

      console.log("res search", res.data.data);

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
  fetchApiSearchByIdRegion,
};

export default regionSlice;

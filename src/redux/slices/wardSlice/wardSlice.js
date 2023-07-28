import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../services";
import { toast } from "react-toastify";

const wardSlice = createSlice({
  name: "ward",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAllWard.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllWard.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

// fetch api all Ward
const fetchApiAllWard = createAsyncThunk("ward/fetchApiAllWard", async () => {
  try {
    const res = await getRequest("xa/get-all");

    return res.data.data;
  } catch (error) {
    console.log({ error });
  }
});

// fetch api add Ward
const fetchApiAddWard = createAsyncThunk(
  "ward/fetchApiAddWard",
  async (values) => {
    try {
      const { keyId, ten, huyenId } = values;

      const res = await postRequest("xa/add", {
        keyId,
        ten,
        huyenId,
      });

      toast.success("Thêm thành công.");

      return res.data.data;
    } catch (error) {
      toast.error("Tên phường/xã đã tồn tại!");
      console.log({ error });
    }
  }
);

// fetch api update Ward
const fetchApiUpdateWard = createAsyncThunk(
  "ward/fetchApiUpdateWard",
  async (values) => {
    try {
      const { keyId, ten, huyenId } = values;

      const res = await putRequest(`xa/update/${keyId}`, {
        keyId,
        ten,
        huyenId,
      });
      toast.success("Cập nhật thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete Ward
const fetchApiDeleteWard = createAsyncThunk(
  "ward/fetchApiDeleteWard",
  async (tabListbc) => {
    try {
      const { keyId } = tabListbc;

      const res = await deleteRequest(`xa/delete/${keyId}`, null);

      toast.success("Xóa thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api search Ward by id
const fetchApiSearchByIdWard = createAsyncThunk(
  "ward/fetchApiSearchByIdWard",
  async (idWard) => {
    try {
      const res = await getRequest(`xa/get-singe?id=${idWard}`);

      console.log("res search", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllWard,
  fetchApiAddWard,
  fetchApiUpdateWard,
  fetchApiDeleteWard,
  fetchApiSearchByIdWard,
};

export default wardSlice;

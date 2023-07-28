import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../services";
import { toast } from "react-toastify";

const listCancelSlice = createSlice({
  name: "listCancel",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAllCancel.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllCancel.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

// fetch api all Cancel
const fetchApiAllCancel = createAsyncThunk(
  "listCancel/fetchApiAllCancel",
  async () => {
    try {
      const res = await getRequest("ly-do-huy/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api add Cancel
const fetchApiAddCancel = createAsyncThunk(
  "listCancel/fetchApiAddCancel",
  async (values) => {
    try {
      const { keyId, lyDo } = values;

      const res = await postRequest("ly-do-huy/add", {
        keyId,
        lyDo,
      });

      toast.success("Thêm thành công.");

      return res.data.data;
    } catch (error) {
      toast.error("lý do hủy đã tồn tại!");
      console.log({ error });
    }
  }
);

// fetch api update Cancel
const fetchApiUpdateCancel = createAsyncThunk(
  "listCancel/fetchApiUpdateCancel",
  async (values) => {
    try {
      const { keyId, lyDo } = values;

      const res = await putRequest(`ly-do-huy/update/${keyId}`, {
        keyId,
        lyDo,
      });
      toast.success("Cập nhật thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete Cancel
const fetchApiDeleteCancel = createAsyncThunk(
  "listCancel/fetchApiDeleteCancel",
  async (tabListCancel) => {
    try {
      const { keyId } = tabListCancel;

      const res = await deleteRequest(`ly-do-huy/delete/${keyId}`, null);

      toast.success("Xóa thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api search Cancel by id
const fetchApiSearchByIdCancel = createAsyncThunk(
  "listCancel/fetchApiSearchByIdCancel",
  async (idCancel) => {
    try {
      const res = await getRequest(`ly-do-huy/get-singe?id=${idCancel}`);

      console.log("res search", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllCancel,
  fetchApiAddCancel,
  fetchApiUpdateCancel,
  fetchApiDeleteCancel,
  fetchApiSearchByIdCancel,
};

export default listCancelSlice;

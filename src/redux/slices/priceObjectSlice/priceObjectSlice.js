import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../../../services";
import { toast } from "react-toastify";
const PriceObjectSlice = createSlice({
  name: "priceObject",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllPriceObject.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all priceObject
const fetchApiAllPriceObject = createAsyncThunk(
  "priceObject/fetchApiAllPriceObject",
  async () => {
    try {
      const res = await getRequest("doi-tuong-gia/get-all");
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api add priceObject
const fetchApiAddPriceObject = createAsyncThunk(
  "priceObject/fetchApiAddPriceObject",
  async (values) => {
    try {
      const { id, keyId, moTa, donViTinh } = values;

      const res = await postRequest("doi-tuong-gia/add", {
        id,
        keyId,
        moTa,
        donViTinh,
      });
      toast.success("Thêm thành công.");
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api update priceObject
const fetchApiUpdatePriceObject = createAsyncThunk(
  "priceObject/fetchApiUpdatePriceObject",
  async (values) => {
    try {
      const { keyId, moTa, donViTinh } = values;

      const res = await putRequest(`doi-tuong-gia/update/${keyId}`, {
        keyId,
        moTa,
        donViTinh,
      });
      toast.success("Cập nhật danh mục thành công.");
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete priceObject
const fetchApiDeletePriceObject = createAsyncThunk(
  "priceObject/fetchApiDeletePriceObject",
  async (tabListPO) => {
    try {
      const { keyId } = tabListPO;

      const res = await deleteRequest(
        `doi-tuong-gia/delete/${keyId}`,
        // `doi-tuong-gia/delete?id=${id}`,
        null
      );
      toast.success("Xóa thành công.");
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllPriceObject,
  fetchApiAddPriceObject,
  fetchApiUpdatePriceObject,
  fetchApiDeletePriceObject,
};

export default PriceObjectSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../../../services";

const priceObjectSlice = createSlice({
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
  "priceObject/fetchApiAllpriceObject",
  async () => {
    try {
      const res = await getRequest("danh-sach-doi-tuong-gia/get-all");

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
      const { id, kyHieu, moTa, donViTinh } = values;

      const res = await postRequest("danh-sach-doi-tuong-gia/add", {
        id,
        kyHieu,
        moTa,
        donViTinh,
      });

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
      const { id, kyHieu, moTa, donViTinh } = values;

      const res = await putRequest(`danh-sach-doi-tuong-gia/update/${id}`, {
        id,
        kyHieu,
        moTa,
        donViTinh,
      });

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
      const { id } = tabListPO;

      const res = await deleteRequest(
        `danh-sach-doi-tuong-gia/delete/${id}`,
        // `danh-sach-doi-tuong-gia/delete?id=${id}`,
        null
      );

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

export default priceObjectSlice;

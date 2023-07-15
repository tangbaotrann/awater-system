import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "../../../services";

const priceListObjectSlice = createSlice({
  name: "priceListObject",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiAllPriceListObject.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// fetch api all priceObject
const fetchApiAllPriceListObject = createAsyncThunk(
  "priceListObject/fetchApiAllPriceListObject",
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
const fetchApiAddPriceListObject = createAsyncThunk(
  "priceListObject/fetchApiAddPriceListObject",
  async (values) => {
    try {
      const { id, keyId, moTa, donViTinh } = values;

      const res = await postRequest("danh-sach-doi-tuong-gia/add", {
        id,
        keyId,
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
const fetchApiUpdatePriceListObject = createAsyncThunk(
  "priceListObject/fetchApiUpdatePriceListObject",
  async (values) => {
    try {
      const { keyId, moTa, donViTinh } = values;

      const res = await putRequest(`danh-sach-doi-tuong-gia/update/${keyId}`, {
        keyId,
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
const fetchApiDeletePriceListObject = createAsyncThunk(
  "priceListObject/fetchApiDeletePriceListObject",
  async (tabListPO) => {
    try {
      const { keyId } = tabListPO;

      const res = await deleteRequest(
        `danh-sach-doi-tuong-gia/delete/${keyId}`,
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
  fetchApiAllPriceListObject,
  fetchApiAddPriceListObject,
  fetchApiUpdatePriceListObject,
  fetchApiDeletePriceListObject,
};

export default priceListObjectSlice;

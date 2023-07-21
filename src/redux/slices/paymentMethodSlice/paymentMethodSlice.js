import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../services";
import { toast } from "react-toastify";

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAllPaymentMethod.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllPaymentMethod.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

// fetch all payment method
const fetchApiAllPaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiAllPaymentMethod",
  async () => {
    try {
      const res = await getRequest("phuong-thuc-thanh-toan/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);
// fetch api add PaymentMethod
const fetchApiAddPaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiAddPaymentMethod",
  async (values) => {
    try {
      const { keyId, moTaPhuongThuc } = values;

      const res = await postRequest("phuong-thuc-thanh-toan/add", {
        keyId,
        moTaPhuongThuc,
      });

      toast.success("Thêm thành công thanh toán.");
      return res.data.data;
    } catch (error) {
      toast.error("Tên thanh toán đã tồn tại!");
      console.log({ error });
    }
  }
);

// fetch api update PaymentMethod
const fetchApiUpdatePaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiUpdatePaymentMethod",
  async (values) => {
    try {
      const { keyId, moTaPhuongThuc } = values;

      const res = await putRequest(`phuong-thuc-thanh-toan/update/${keyId}`, {
        keyId,
        moTaPhuongThuc,
      });
      toast.success("Cập nhật thanh toán thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api delete PaymentMethod
const fetchApiDeletePaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiDeletePaymentMethod",
  async (tabListbc) => {
    try {
      const { keyId } = tabListbc;

      const res = await deleteRequest(
        `phuong-thuc-thanh-toan/delete/${keyId}`,
        null
      );

      toast.success("Xóa thanh toán thành công.");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api search PaymentMethod by id
const fetchApiSearchByIdPaymentMethod = createAsyncThunk(
  "paymentMethod/fetchApiSearchByIdPaymentMethod",
  async (idPaymentMethod) => {
    try {
      const res = await getRequest(
        `phuong-thuc-thanh-toan/get-singe?id=${idPaymentMethod}`
      );

      console.log("res search", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);
export {
  fetchApiAllPaymentMethod,
  fetchApiAddPaymentMethod,
  fetchApiUpdatePaymentMethod,
  fetchApiDeletePaymentMethod,
  fetchApiSearchByIdPaymentMethod,
};

export default paymentMethodSlice;

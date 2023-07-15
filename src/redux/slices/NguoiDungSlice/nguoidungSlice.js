import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services";

const initialState = {
  danhSachNguoiDung: [],
  isAddedSuccess: false,
};

export const nguoidungSlice = createSlice({
  name: "tuyendoc",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNguoiDung.fulfilled, (state, action) => {
        state.danhSachNguoiDung = action.payload;
      })

      .addCase(AddNguoiDung.fulfilled, (state, action) => {
        state.isAddedSuccess = true;
      });

    // .addMatcher(
    //   (action) => action.type.endsWith('/pending'),
    //   (state) => {
    //     state.inProgress = true;
    //   }
    // )
  },
});

export const AddNguoiDung = createAsyncThunk(
  "nguoidung/AddNguoiDung",
  async (values) => {
    try {
      const { KeyId, matKhau, email } = values;

      const res = await postRequest(`nguoi-dung/add`, {
        KeyId,
        matKhau,
        email,
      });

      console.log(res);
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const getAllNguoiDung = createAsyncThunk(
  "nguoidung/getAllNguoiDung",
  async () => {
    try {
      const res = await getRequest(`nguoi-dung/get-all`);

    //   console.log('nguoi-dung/get-all', res);
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export default nguoidungSlice;

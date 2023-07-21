import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../../services";
import { message } from "antd";

const initialState = {
  danhSachtrangThaiChiSo: [],
  isAddedSuccess: false,
  isDeletedSuccess: false,
};

export const trangThaiChiSo = createSlice({
  name: "trangthaichiso",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllDMTrangThaiChiSo.fulfilled, (state, action) => {
      state.danhSachtrangThaiChiSo = action.payload;
    })

    .addCase(addDMTrangThaiChiSo.fulfilled, (state, action) => {
      state.isAddedSuccess = true;
    })

    .addCase(deleteDMTrangThaiChiSo.fulfilled, (state, action) => {
      state.isDeletedSuccess = true;
    });

    // .addMatcher(
    //   (action) => action.type.endsWith('/pending'),
    //   (state) => {
    //     state.inProgress = true;
    //   }
    // )
  },
});

export const addDMTrangThaiChiSo = createAsyncThunk(
  "trangthaichiso/addDMTrangThaiChiSo",
  async (values) => {
    try {
      const {
        KeyId,
        tenTrangThai,
        maMau,
        moTaNgan,
        soTt,
        khongChoPhepGhi,
        khongChoPhepHienThi
      } = values;

      const res = await postRequest(`trang-thai-ghi/add`, {
        KeyId,
        tenTrangThai,
        maMau,
        moTaNgan,
        soTt,
        khongChoPhepGhi,
        khongChoPhepHienThi
      });

      if(res.data.statusCode === 201) message.success({ content: 'Thêm thành công' })

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const deleteDMTrangThaiChiSo = createAsyncThunk(
  "trangthaichiso/deleteDMTrangThaiChiSo",
  async (KeyId) => {
    try {
      const res = await deleteRequest(`trang-thai-ghi/delete/${KeyId}`);
      console.log(res);

      if(res.data.statusCode === 202) message.success({ content: 'Xóa thành công' })

    } catch (error) {
      console.log({ error });
    }
  }
);

export const getAllDMTrangThaiChiSo = createAsyncThunk(
  "trangthaichiso/getAllDMTrangThaiChiSo",
  async () => {
    try {
      const res = await getRequest(`trang-thai-ghi/get-all`);

      // console.log('tuyen-doc/get-all', res);
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const updateDMTrangThaiChiSo = createAsyncThunk(
  "trangthaichiso/updateDMTrangThaiChiSo",
  async (values) => {
    try {
      const {
        KeyId,
        tenTrangThai,
        maMau,
        moTaNgan,
        soTt,
        khongChoPhepGhi,
        khongChoPhepHienThi
      } = values;

      const res = await putRequest(`trang-thai-ghi/update/${KeyId}`, {
        KeyId,
        tenTrangThai,
        maMau,
        moTaNgan,
        soTt,
        khongChoPhepGhi,
        khongChoPhepHienThi
      });

      if(res.data.statusCode === 202) message.success({ content: 'Cập nhật thành công' })
    } catch (error) {
      console.log({ error });
    }
  }
);


export default trangThaiChiSo;

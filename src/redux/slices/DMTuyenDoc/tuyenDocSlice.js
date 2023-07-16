import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../../services";
import { message } from "antd";

const initialState = {
  danhSachTuyenDoc: [],
  isAddedSuccess: false,
  isDeletedSuccess: false,
};

export const tuyenDocSlice = createSlice({
  name: "tuyendoc",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllDMTuyenDoc.fulfilled, (state, action) => {
      state.danhSachTuyenDoc = action.payload;
    })

    .addCase(addDMTuyenDoc.fulfilled, (state, action) => {
      state.isAddedSuccess = true;
    })

    .addCase(deleteDMTuyenDoc.fulfilled, (state, action) => {
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

export const addDMTuyenDoc = createAsyncThunk(
  "tuyendoc/AddDMTuyenDoc",
  async (values) => {
    try {
      const {
        KeyId,
        nhaMayId,
        nguoiQuanLyId,
        tenTuyen,
        nguoiThuTienId,
        khuVucId,
      } = values;

      const res = await postRequest(`tuyen-doc/add`, {
        KeyId,
        nhaMayId,
        nguoiQuanLyId,
        tenTuyen,
        nguoiThuTienId,
        khuVucId,
      });

      if(res.data.statusCode === 201) message.success({ content: 'Thêm thành công' })

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const deleteDMTuyenDoc = createAsyncThunk(
  "tuyendoc/deleteDMTuyenDoc",
  async (KeyId) => {
    try {
      const res = await deleteRequest(`tuyen-doc/delete/${KeyId}`);
      console.log(res);

      if(res.data.statusCode === 202) message.success({ content: 'Xóa thành công' })

    } catch (error) {
      console.log({ error });
    }
  }
);

export const getAllDMTuyenDoc = createAsyncThunk(
  "tuyendoc/getAllDMTuyenDoc",
  async () => {
    try {
      const res = await getRequest(`tuyen-doc/get-all`);

      // console.log('tuyen-doc/get-all', res);
      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export const updateTuyenDoc = createAsyncThunk(
  "tuyendoc/updateTuyenDoc",
  async (values) => {
    try {
      const {
        KeyId,
        nhaMayId,
        nguoiQuanLyId,
        tenTuyen,
        nguoiThuTienId,
        khuVucId,
      } = values;

      const res = await putRequest(`tuyen-doc/update/${KeyId}`, {
        KeyId,
        nhaMayId,
        nguoiQuanLyId,
        tenTuyen,
        nguoiThuTienId,
        khuVucId,
      });

      if(res.data.statusCode === 202) message.success({ content: 'Cập nhật thành công' })
    } catch (error) {
      console.log({ error });
    }
  }
);


export default tuyenDocSlice;

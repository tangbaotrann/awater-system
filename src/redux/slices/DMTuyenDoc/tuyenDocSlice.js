import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services";

const initialState = {
  danhSachTuyenDoc: [],
  isAddedSuccess: false,
};

export const tuyenDocSlice = createSlice({
  name: "tuyendoc",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllDMTuyenDoc.fulfilled, (state, action) => {
      state.danhSachTuyenDoc = action.payload;
    })

    .addCase(AddDMTuyenDoc.fulfilled, (state, action) => {
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

export const AddDMTuyenDoc = createAsyncThunk(
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

      // console.log(res);
      return res.data.data;
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

export default tuyenDocSlice;

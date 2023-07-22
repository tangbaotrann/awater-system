import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../../services";
import { message } from "antd";

const initialState = {
    danhSachKy: [],
    isAddedSuccess: false,
    isDeletedSuccess: false,
};

export const kySlice = createSlice(
    {
        name: "ky_ghi_chi_so",
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(getAllKy.fulfilled,
                    (state, action) => {
                        state.danhSachKy = action.payload;
                    })
                .addCase(addKy.fulfilled,
                    (state, action) => {
                        state.isAddedSuccess = true;
                    })
                .addCase(deleteKy.fulfilled,
                    (state, action) => {
                        state.isDeletedSuccess = true;
                    });
        },
    }
);

// GET ALL
export const getAllKy = createAsyncThunk(
    "ky_ghi_chi_so/getAllKy",
    async () => {
        try {
            const res = await getRequest(`ky-ghi-chi-so/get-all`);
            return res.data.data;
        } catch (error) {
            console.log({ error });
        }
    }
);

// ADD 
export const addKy = createAsyncThunk(
    "ky_ghi_chi_so/addKy",
    async (values) => {
        try {
            const { keyId, moTa, ngaySuDungTu, ngaySuDungDen, ngayHoaDon, nhaMayId } = values

            const res = await postRequest('ky-ghi-chi-so/add', {
                keyId, moTa, ngaySuDungTu, ngaySuDungDen, ngayHoaDon, nhaMayId
            });

            if (res.data.statusCode === 201) {
                message.success("Đã thêm mới thành công");
            }
            return res.data.data;
        } catch (err) {
            console.log({ err });
        }
    }
);

// UPDATE
export const updateKy = createAsyncThunk(
    "ky_ghi_chi_so/updateKy",
    async (values) => {
        try {
            const { keyId, moTa, ngaySuDungTu, ngaySuDungDen, ngayHoaDon, nhaMayId } = values

            const res = await putRequest(`ky-ghi-chi-so/update/${keyId}`, {
                keyId, moTa, ngaySuDungTu, ngaySuDungDen, ngayHoaDon, nhaMayId
            });

            if (res.data.statusCode === 201) {
                message.success("Đã thêm mới thành công");
            }
            return res.data.data;
        } catch (err) {
            console.log({ err });
        }
    }
);

// DELETE
export const deleteKy = createAsyncThunk(
    "ky_ghi_chi_so/deleteKy",
    async (KeyId) => {
        try {
            const res = await deleteRequest(`ky-ghi-chi-so/delete/${KeyId}`);
            console.log(res);
        } catch (error) {
            console.log({ error });
        }
    }
);

export default kySlice;
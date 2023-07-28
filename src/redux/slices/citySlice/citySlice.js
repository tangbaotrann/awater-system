import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../../services";
import { message } from "antd";

const initialState = {
    listCities: [],
    isAddedSuccess: false,
    isDeletedSuccess: false,
};

export const citySlice = createSlice(
    {
        name: "tinh",
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(getAllCities.fulfilled,
                    (state, action) => {
                        state.listCities = action.payload;
                    })
                .addCase(addCity.fulfilled,
                    (state, action) => {
                        state.isAddedSuccess = true;
                    })
                .addCase(updateCity.fulfilled,
                    (state, action) => {
                        state.isDeletedSuccess = true;
                    });
        },
    }
);

export const getAllCities = createAsyncThunk(
    "tinh/getAllCity",
    async () => {
        try {
            const res = await getRequest(`tinh/get-all`);
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const addCity = createAsyncThunk(
    "tinh/addCity",
    async (values) => {
        try {
            const { keyId, ten } = values
            console.log("🚀 ~ file: citySlice.js:50 ~ values:", values)
            const res = await postRequest(`tinh/add`, {
                keyId, ten
            });
            if (res.data.statusCode === 201) {
                message.success("Đã thêm mới thành công");
            }
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const updateCity = createAsyncThunk(
    "tinh/updateCity",
    async (values) => {
        try {
            const { keyId, ten } = values;
            const res = await putRequest(`tinh/update/${keyId}`, {
                keyId, ten
            })
            if (res.data.statusCode === 201) {
                message.success("Đã cập nhật thành công");
            }
            return res.data.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const deleteCity = createAsyncThunk(
    "tinh/deleteCity",
    async (keyId) => {
        try {
            await deleteRequest(`tinh/delete/${keyId}`)
        } catch (error) {
            console.log(error);
        }
    }
);

export default citySlice;
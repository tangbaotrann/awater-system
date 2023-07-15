import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    dataCustomer: [],
    createCustomer: [],
    findByKeyIdCustomer: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiAllCustomer.fulfilled, (state, action) => {
        state.dataCustomer = action.payload;
      })
      .addCase(fetchApiCreateCustomer.fulfilled, (state, action) => {
        // find and add
        state.createCustomer = action.payload;
      })
      .addCase(fetchApiFindByKeyIdCustomer.fulfilled, (state, action) => {
        state.findByKeyIdCustomer = action.payload;
      });
  },
});

// fetch api create Customer
const fetchApiCreateCustomer = createAsyncThunk(
  "contract/fetchApiCreateContract",
  async (values) => {
    try {
      const {
        keyIdOfCustomer,
        nhaMayId,
        nguonNuoc,
        loaiKhachHang,
        tenKhachHang,
        tenThuongGoi,
        soHo,
        email,
        dienThoai,
        soCmnd,
        noiCapCmnd,
        maSoThue,
        soGcn,
        ghiChu,
        doiTuong,
        soKhau,
        nguoiDaiDien,
        ngayCapCmnd,
      } = values;

      const res = await postRequest("khach-hang/add", {
        keyId: keyIdOfCustomer,
        nhaMayId,
        nguonNuoc,
        loaiKhachHang,
        tenKhachHang,
        tenThuongGoi,
        soHo,
        email,
        dienThoai,
        soCmnd,
        ngayCapCmnd,
        noiCapCmnd,
        maSoThue,
        soGcn,
        ghiChu,
        doiTuong,
        soKhau,
        nguoiDaiDien,
      });

      console.log("res create customer ->", res.data);

      return res.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api find by keyId customer
const fetchApiFindByKeyIdCustomer = createAsyncThunk(
  "contract/fetchApiFindByKeyIdCustomer",
  async (keyId) => {
    try {
      const res = await getRequest(`khach-hang/get-single/${keyId}`);

      console.log("res find by id customer ->", res.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api create info contract
const fetchApiCreateInfoContract = createAsyncThunk(
  "contract/fetchApiCreateInfoContract",
  async ({ dataContract, id }) => {
    console.log("dataContract slice", dataContract);
    console.log("customer id slice", id);

    try {
      const {
        keyIdOfContract,
        doiTuongGiaId,
        // khachHangId,
        tuyenDocId,
        nhaMayId,
        phuongThucThanhToanId,
        khuVucThanhToan,
        ngayKyHopDong,
        ngayLapDat,
        ghiChuOfContract,
        diachi,
        kinhDo,
        viDo,
        ngayCoHieuLuc,
        mucDichSuDung,
      } = dataContract;

      // const { id } = customer;

      const res = await postRequest("hop-dong/add", {
        keyId: keyIdOfContract,
        doiTuongGiaId,
        khachHangId: id,
        tuyenDocId,
        nhaMayId,
        phuongThucThanhToanId,
        khuVucThanhToan,
        ngayKyHopDong,
        ngayLapDat,
        ghiChu: ghiChuOfContract,
        diachi,
        kinhDo,
        viDo,
        ngayCoHieuLuc,
        mucDichSuDung,
      });

      console.log("res create contract ->", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// fetch api load all customer
const fetchApiAllCustomer = createAsyncThunk(
  "contract/fetchApiAllCustomer",
  async () => {
    try {
      const res = await getRequest("khach-hang/get-all");

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export {
  fetchApiAllCustomer,
  fetchApiFindByKeyIdCustomer,
  fetchApiCreateCustomer,
  fetchApiCreateInfoContract,
};

export default contractSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import moment from "moment";

import { getRequest, postRequest, putRequest } from "../../../services";

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    dataCustomer: [],
    isLoading: false,
    createCustomer: [],
    createInfoContract: [],
    findByKeyIdCustomer: null,
  },
  extraReducers: (builder) => {
    builder
      // customer
      .addCase(fetchApiAllCustomer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchApiAllCustomer.fulfilled, (state, action) => {
        state.dataCustomer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchApiCreateCustomer.fulfilled, (state, action) => {
        // find and add
        state.createCustomer = action.payload;
      })
      .addCase(fetchApiFindByKeyIdCustomer.fulfilled, (state, action) => {
        state.findByKeyIdCustomer = action.payload;
      })
      // info contract
      .addCase(fetchApiCreateInfoContract.fulfilled, (state, action) => {
        state.createInfoContract = action.payload;
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

      // format field
      const formatNgayCapCmnd = moment(ngayCapCmnd).format("YYYY-MM-DD");

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
        ngayCapCmnd: formatNgayCapCmnd,
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
      toast.error(error.response.message);
      console.log({ error });
    }
  }
);

// fetch api update Customer
const fetchApiUpdateCustomer = createAsyncThunk(
  "contract/fetchApiUpdateCustomer",
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

      const res = await putRequest(`khach-hang/update/${keyIdOfCustomer}`, {
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
        noiCapCmnd,
        maSoThue,
        soGcn,
        ghiChu,
        doiTuong,
        soKhau,
        nguoiDaiDien,
        ngayCapCmnd,
      });

      console.log("res update customer ->", res.data);

      toast.success("Cập nhật khách hàng thành công.");

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
    try {
      const {
        keyIdOfContract,
        doiTuongGiaId,
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

      console.log("res create contract ->", res.data);

      return res.data;
    } catch (error) {
      toast.error(error.response.message);
      console.log({ error });
    }
  }
);

// fetch api create detail clock
const fetchApiCreateClockDetail = createAsyncThunk(
  "contract/fetchApiCreateClockDetail",
  async ({ dataContract, id }) => {
    try {
      const {
        keyIdOfClockDetail,
        donViHC,
        loaiDongHo,
        nguoiQuanLyId,
        phamVi,
        seriDongHo,
        seriChi,
        trangThaiSuDung,
        lyDoHuy,
        chiSoDau,
        chiSoCuoi,
        soThuTu,
        dongHoChaId,
      } = dataContract;

      const res = await postRequest("dong-ho-nuoc/add", {
        keyId: keyIdOfClockDetail,
        donViHC,
        loaiDongHo,
        nguoiQuanLyId,
        phamVi,
        seriDongHo,
        seriChi,
        trangThaiSuDung,
        lyDoHuy,
        chiSoDau,
        chiSoCuoi,
        soThuTu,
        hopDongId: id,
        dongHoChaId,
      });

      console.log("res create block detail", res.data);
      toast.success("Tạo hợp đồng thành công.");

      return res.data;
    } catch (error) {
      toast.error(error.response.message);
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

      console.log("res all cus ->", res.data.data);

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
  fetchApiUpdateCustomer,
  fetchApiCreateInfoContract,
  fetchApiCreateClockDetail,
};

export default contractSlice;

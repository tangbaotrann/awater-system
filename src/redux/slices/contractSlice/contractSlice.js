import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postRequest } from "../../../services";
import { toast } from "react-toastify";
import axios from "axios";

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    data: [],
  },
});

// fetch api create Customer
const fetchApiCreateCustomer = createAsyncThunk(
  "contract/fetchApiCreateContract",
  async (values) => {
    try {
      const {
        id,
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
        id,
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

      console.log("res create customer ->", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

// create form data -> info contract
const createFormData = (values) => {
  const {
    Id,
    DoiTuongGiaId,
    KhachHangId,
    TuyenDocId,
    NhaMayId,
    PhuongThucThanhToanId,
    KhuVucThanhToan,
    NgayKyHopDong,
    NgayLapDat,
    GhiChu,
    Diachi,
    KinhDo,
    ViDo,
    NgayCoHieuLuc,
    MucDichSuDung,
  } = values;

  const formData = new FormData();

  // append form
  formData.append("Id", Id);
  formData.append("DoiTuongGiaId", DoiTuongGiaId);
  formData.append("KhachHangId", KhachHangId);
  formData.append("TuyenDocId", TuyenDocId);
  formData.append("NhaMayId", NhaMayId);
  formData.append("PhuongThucThanhToanId", PhuongThucThanhToanId);
  formData.append("KhuVucThanhToan", KhuVucThanhToan);
  formData.append("NgayKyHopDong", NgayKyHopDong);
  formData.append("NgayLapDat", NgayLapDat);
  formData.append("GhiChu", GhiChu);
  formData.append("Diachi", Diachi);
  formData.append("KinhDo", KinhDo);
  formData.append("ViDo", ViDo);
  formData.append("NgayCoHieuLuc", NgayCoHieuLuc);
  formData.append("MucDichSuDung", MucDichSuDung);

  return formData;
};

// fetch api create info contract
const fetchApiCreateInfoContract = createAsyncThunk(
  "contract/fetchApiCreateInfoContract",
  async (values) => {
    try {
      let formData = createFormData(values);

      const res = await axios.post(
        "http://45.119.84.227:6688/api/hop-dong/add",
        formData,
        {
          headers: {
            // Accept: "application/json, text/plain, */*",
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("res create contract ->", res.data.data);

      return res.data.data;
    } catch (error) {
      console.log({ error });
    }
  }
);

export { fetchApiCreateCustomer, fetchApiCreateInfoContract };

export default contractSlice;

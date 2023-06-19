import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { message } from "antd";

// Handle export file Excel (.xlsx)
const exportToExcel = (tableId, savePath) => {
  const worksheet = XLSX.utils.table_to_sheet(document.getElementById(tableId));
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  if (savePath === "DEV_CUSTOMER") {
    saveAs(dataBlob, "BAO_CAO_PHAT_TRIEN_KHACH_HANG_MOI.xlsx");
  } else {
    saveAs(dataBlob, "BANG_KE_DANH_SACH_KHACH_HANG.xlsx");
  }
  message.success("Xuất thành công file với định dạng .xlsx.");
};

export { exportToExcel };

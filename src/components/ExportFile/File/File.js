import { Button, message } from "antd";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { exportToExcel } from "../../../utils/exportFile";
import { btnClickSidebarMenuSelector } from "../../../redux/selector";

function File() {
  const menuSidebar = useSelector(btnClickSidebarMenuSelector);

  // handle export file to excel (.xlsx)
  const handleExportToExcel = () => {
    exportToExcel("table", menuSidebar);
  };

  const handleExportToPdf = async () => {
    const doc = new jsPDF();

    // Lấy nội dung HTML của các phần tử bạn muốn lưu
    const reportCus = document.querySelector(".title-report-cus");
    const tblReportCus = document.querySelector(".container-tbl-report-cus");
    const footerSignature = document.querySelector(".footer-signature");

    // Chuyển đổi HTML thành hình ảnh dùng định dạng base64
    const reportCusImgData = await elementToBase64(reportCus);
    const tblReportCusImgData = await elementToBase64(tblReportCus);
    const footerSignatureImgData = await elementToBase64(footerSignature);

    // Thêm hình ảnh vào tài liệu PDF
    doc.addImage(reportCusImgData, "JPEG", 10, 10);
    doc.addImage(tblReportCusImgData, "JPEG", 10, 400);
    doc.addImage(footerSignatureImgData, "JPEG", 10, 200);

    // Lưu tài liệu PDF
    doc.save("report.pdf");
    message.success("Xuất thành công file với định dạng .pdf");
  };

  // Hàm chuyển đổi canvas thành dữ liệu hình ảnh base64
  const elementToBase64 = async (element) => {
    const canvas = await html2canvas(element);
    return canvas.toDataURL("image/jpeg", 1.0);
  };

  return (
    <div className="wrapper-file">
      <Button onClick={handleExportToPdf}>Pdf</Button>
      <Button onClick={handleExportToExcel}>Excel</Button>
    </div>
  );
}

export default File;

export const initialData = Array.from({ length: 100 }, (_, i) => {
  return {
    key: i + 1,
    order: i + 1,
    readingLine: `Tuyến đọc ${i + 1}`,
    reader: `Cán bộ đọc ${i + 1}`,
    sessionName: `Tên phiên ${i + 1}`,
    createdDate: `Ngày tạo ${i + 1}`,
    serialNumber: `Sê ri ${i + 1}`,
    startInvoiceNumber: `Số hóa đơn BĐ ${i + 1}`,
    endInvoiceNumber: `Số hóa đơn KT ${i + 1}`,
    contractCount: `Số lượng HĐ ${i + 1}`,
    isPrinted: `Đã in xong ${i + 1}`,
  };
});

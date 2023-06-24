export const initialData = Array.from({ length: 100 }, (_, i) => {
  return {
    key: i + 1,
    order: i + 1,
    readingLine: `Tuyến đọc ${i + 1}`,
    reader: `Cán bộ ${i + 1}`,
    sessionName: `Tên phiên ${i + 1}`,
    createdDate: `Ngày tạo ${i + 1}`,
    serialNumber: `Sê ri ${i + 1}`,
    startInvoiceNumber: `Số HĐ BĐ ${i + 1}`,
    endInvoiceNumber: `Số HĐ KT ${i + 1}`,
    contractCount: `${i + 1}`,
    isPrinted: `Đã in xong ${i + 1}`,
  };
});

export const initialData2 = Array.from({ length: 14 }, (_, i) => {
  return {
    key: i + 1,
    order: i + 1,
    serialNumber: `Sê ri ${i + 1}`,
    invoiceNumber: `Số hóa đơn ${i + 1}`,
    customerName: `Tên khách hàng ${i + 1}`,
    contractNumber: `Số hợp đồng ${i + 1}`,
    consumption: `Tiêu thụ ${i + 1}`,
    amountDue: `Thành tiền ${i + 1}`,
    vatFee: `Phí VAT ${i + 1}`,
    environmentalFee: `Phí BVMT ${i + 1}`,
    totalAmountDue: `Tổng tiền ${i + 1}`,
    printDate: `Ngày in ${i + 1}`,
    status: `Tình trạng ${i + 1}`,
    notes: `Ghi chú ${i + 1}`,
  };
});

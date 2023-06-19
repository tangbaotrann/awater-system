// data.js
export const initialData = Array.from({ length: 100 }, (_, i) => {
  return {
    key: "1",
    imageAndStatus: `Hình ảnh và trạng thái ${i}`,
    order: i,
    readingLine: `Tuyến đọc ${i}`,
    contractNumber: `Số hợp đồng ${i}`,
    clockSen: `Sen đồng hồ ${i}`,
    customerName: `Tên khách hàng ${i}`,
    address: `Địa chỉ ${i}`,
    moneyCollected: `Tiền thu ${i}`,
    oldIndex: `Chỉ số cũ ${i}`,
    newIndex: `Chỉ số mới ${i}`,
    consumption: `Tiêu thụ ${i}`,
    readingDate: `Ngày đọc ${i}`,
  }
});
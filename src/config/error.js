const handleError = (error) => {
  if (error.response) {
    // Xử lý lỗi 400 (Not Found)
    if (error.response.status === 400) {
      console.log("400 - Lỗi", error);
    }

    // Xử lý lỗi 404 (Not Found)
    if (error.response.status === 404) {
      console.log("404 - Not Found", error);
    }

    // Xử lý lỗi 500 (Internal Server Error)
    if (error.response.status === 500) {
      console.log("500 - Internal Server Error", error);
    }
  } else {
    // Lỗi không có phản hồi từ máy chủ
    console.log("Error:", error.message);
  }
};

export default handleError;

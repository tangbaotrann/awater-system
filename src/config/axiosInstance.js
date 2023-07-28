import axios from "axios";

const axiosInstance = axios.create();

// base url
axiosInstance.defaults.baseURL = "https://api-awa-v2.amazingtech.vn/api/"; // https

// headers
axiosInstance.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// all request will wait 1 seconds before timeout
// axiosInstance.defaults.timeout = 1000;

// credentials
// axiosInstance.defaults.withCredentials = true;

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response && response.data
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export { axiosInstance as axiosClient };

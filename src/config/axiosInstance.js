import axios from "axios";

const axiosInstance = axios.create();

// base url
axiosInstance.defaults.baseURL = "http://45.119.84.227:2266/api/";

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

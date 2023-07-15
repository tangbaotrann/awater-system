import axios from "axios";

const axiosInstance = axios.create();

// base url
axiosInstance.defaults.baseURL = "http://45.119.84.227:6688/api/";
// axiosInstance.defaults.baseURL = "https://localhost:5000/api/";
>>>>>>>>> Temporary merge branch 2
// headers
axiosInstance.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// all request will wait 1 seconds before timeout
// axiosInstance.defaults.timeout = 1000;

// credentials
// axiosInstance.defaults.withCredentials = true;

export { axiosInstance as axiosClient };

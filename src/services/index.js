import { axiosClient } from "../config/axiosInstance";
import handleError from "../config/error";

// [GET]
const getRequest = async (url) => {
  try {
    const res = await axiosClient.get(`${url}`);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

// [POST]
const postRequest = async (url, payload) => {
  try {
    const res = axiosClient.post(`${url}`, payload);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

// [DELETE]
const deleteRequest = async (url) => {
  try {
    const res = axiosClient.delete(`${url}`);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

// [PUT]
const putRequest = async (url, payload) => {
  try {
    const res = axiosClient.put(`${url}`, payload);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

// [PATCH]
const patchRequest = async (url, payload) => {
  try {
    const res = axiosClient.patch(`${url}`, payload);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export { getRequest, postRequest, deleteRequest, putRequest, patchRequest };

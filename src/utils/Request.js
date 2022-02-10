import instance from "../plugin/axios";
import Toast from "./toast";

/**
 * Generic axios request wrapper
 * @param {*} method i.e post, get, patch, delete
 * @param {*} url i.e BaseURL + Api-url
 * @param {*} body: formData-Object
 * @returns response only if status is 'OK'
 */

const request = (method = "GET", url, data) =>
  instance({
    method,
    url,
    data,
  })
    .then((response) => {
      if (response.status === 200) {
        Toast("", response.data.message, "success", 3500);
        return response.data;
      }
    })
    .catch((error) => {
      Toast(error.response.data.code, error.response.data.error, "error", 3500);
    });

export default request;
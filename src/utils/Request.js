import instance from "../plugins/axios";

/**
 * Generic axios request wrapper
 * @param {*} method i.e post, get, patch, delete
 * @param {*} url i.e BaseURL + Api-url
 * @param {*} body: formData-Object
 * @returns response only if status is 'OK'
 */

const request = (method = "GET", url, data) => new Promise((resolve, reject) => {  instance({
  method,
  url,
  data,
})
  .then((response) => {
    resolve(response.data);
  })
  .catch((err) => {
    reject(err.response.data);
  });})


export default request;

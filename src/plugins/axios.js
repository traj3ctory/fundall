import axios from "axios";
const token = localStorage.getItem("human_id");

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}` || "",
  },
});

export default instance;

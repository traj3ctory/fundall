import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("human_id")}` || "",
  },
});

export default instance;

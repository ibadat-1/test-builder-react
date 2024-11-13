import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://9eb20ed5035b782e.mokky.dev",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

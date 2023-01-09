import axios from "axios";
import { getFBToken } from "../firebase/FBToken";

const api = axios.create({
  baseURL: `${process.env.URL}/api/private`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
    console.log(process.env.URL, "host");
    const appToken = await getFBToken();
    config.headers.AuthToken = appToken;
    return config;
  },
  function (error) {
    console.warn(error);
    return Promise.reject(error);
  }
);

export default api;

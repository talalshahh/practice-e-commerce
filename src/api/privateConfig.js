import { getFBToken } from "../firebase/FBToken";
import host from "../host.json";
import axios from "axios";

const api = axios.create({
  baseURL: `${host.baseURL}/private`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
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

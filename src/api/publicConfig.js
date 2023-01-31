import axios from "axios";

import host from "../host.json";

const api = axios.create({
  baseURL: `${host.baseURL}`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default api;

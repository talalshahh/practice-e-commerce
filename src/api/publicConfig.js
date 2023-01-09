import axios from "axios";

import host from "../host.json";

export const publicApi = axios.create({
  baseURL: `${host.URL}/api`,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

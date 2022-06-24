import axios from "axios";

export const baseURL = "";

export const Axios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

Axios.interceptors.request.use(function (config) {
  // const accessToken = cookieStorage.getItem("JWTTOKEN");
  // config.headers.Authorization = accessToken ? accessToken : null;

  return config;
});

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const baseURL =
  process.env.REACT_APP_BASEURL ?? "http://localhost:8081/api/v1";

export const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

Axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response;
  },
  (err) => Promise.reject(err)
);

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken !== null) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

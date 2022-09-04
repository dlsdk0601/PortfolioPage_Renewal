import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { basicApiUrl } from "../ex/config";

const baseURL = `${basicApiUrl}api/v1/`;

export const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    const accessToken = sessionStorage.getItem("accessToken");
    if (!!accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

Axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response.data;
  },
  (err) => Promise.reject(err)
);

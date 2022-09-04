// 대부분 get 방식일텐데, setting이 필요할까 ??
// react-query 고민중
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { basicApiUrl } from "../ex/config";

const baseURL = `${basicApiUrl}api/v1/`;

export const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

Axios.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // 대부분 get 방식일꺼라서, header setting 필요 x
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

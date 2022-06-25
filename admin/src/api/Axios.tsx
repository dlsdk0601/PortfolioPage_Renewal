import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

type CustomResponseFormat<T = any> = {
  response: T;
  refreshToken: string;
};

interface CustomInterceptor extends AxiosInstance {
  interceptor: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const baseURL = process.env.REACT_APP_BASEURL;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
};

export const Axios = axios.create({
  baseURL,
  headers,
  timeout: 1000,
  withCredentials: true,
});

Axios.interceptors.response.use(function (response) {
  const { data, status } = response;

  return data;
});

Axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  const accessToken = sessionStorage.getItem("JWTTOKEN");
  if (accessToken !== null) {
    config.headers = { ...headers, Authorization: accessToken };
  }
  return config;
});

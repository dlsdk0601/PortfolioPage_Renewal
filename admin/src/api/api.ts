import { Axios } from "./Axios";
import { ILoginReq, ILoginRes, ResType } from "./schema";

const api = {
  login: (loginData: ILoginReq): Promise<ResType<ILoginRes>> =>
    Axios.post("/login", loginData),
};

export default api;

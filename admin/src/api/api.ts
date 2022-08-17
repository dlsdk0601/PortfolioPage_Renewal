import { Axios } from "./Axios";
import { ILoginReq, ILoginRes, ResType } from "./schema";

const api = {
  login: async (loginData: ILoginReq): Promise<ResType<ILoginRes>> =>
    (await Axios.post("/login", loginData)).data,
};

export default api;

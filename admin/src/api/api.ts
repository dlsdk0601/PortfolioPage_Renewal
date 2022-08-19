import { Axios } from "./Axios";
import { ILoginReq, ILoginRes, IUserData, ResType } from "./schema";

const api = {
  login: async (loginData: ILoginReq): Promise<ResType<ILoginRes>> =>
    (await Axios.post("/login", loginData)).data,

  userData: async (): Promise<ResType<IUserData>> =>
    (await Axios.get("/authification")).data,
};

export default api;

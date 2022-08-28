import { Axios } from "./Axios";
import { ILoginReq, ILoginRes, IUserData, ResType } from "./schema";

const api = {
  login: async (loginData: ILoginReq): Promise<ResType<ILoginRes>> =>
    await Axios.post("/login", loginData),

  userData: async (): Promise<ResType<IUserData>> =>
    await Axios.get("/authification"),

  fileTest: async (requset: FormData): Promise<ResType<FormData>> =>
    await Axios.post("/create-portfolio", requset),
};

export default api;

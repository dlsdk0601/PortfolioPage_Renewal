import { Axios } from "./Axios";
import { ILoginReq, ILoginRes, IUserData, ResType } from "./schema";

const api = {
  login: async (loginData: ILoginReq): Promise<ResType<ILoginRes>> =>
    await Axios.post("/login", loginData),

  userData: async (): Promise<ResType<IUserData>> =>
    await Axios.get("/authification"),

  fileTest: async ({ base64 }: { base64: string }): Promise<ResType<string>> =>
    await Axios.post("/create-portfolio", base64),
};

export default api;

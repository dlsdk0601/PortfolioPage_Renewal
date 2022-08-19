import { atom, selector } from "recoil";
import api from "../api/api";
import { IUserData } from "../api/schema";
import { isBlank, isResSuccess } from "../ex/ex";

export const loginState = atom<boolean>({
  key: "login",
  default: false,
});

export const userData = atom<IUserData>({
  key: "userData",
  default: {
    id: "",
    name: "",
    role: null,
  },
});

export const userDataFetch = selector<IUserData>({
  key: "loginFetch",
  get: async ({ get }) => {
    const res = await api.userData();
    if (isResSuccess(res) && !isBlank(res.data)) {
      return res.data;
    }

    return {
      id: "",
      name: "",
      role: null,
    };
  },
  set: ({ set }, newValue) => {
    set(userData, newValue);
    set(loginState, true);
  },
});

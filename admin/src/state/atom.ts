import { atom, selector } from "recoil";
import { IUserData } from "../api/schema";

export const loginState = atom<boolean>({
  key: "login",
  default: false,
});

export const userData = atom<IUserData>({
  key: "userData",
  default: {
    id: "",
    name: "",
    role: "",
  },
});

export const loginFetch = selector<boolean>({
  key: "loginFetch",
  get: ({ get }) => {
    const loginStatus = get(loginState);
    return loginStatus;
  },
  set: ({ set }, accessToken) => {
    if (!accessToken) {
      set(loginState, false);
    }
    set(loginState, true);
  },
});

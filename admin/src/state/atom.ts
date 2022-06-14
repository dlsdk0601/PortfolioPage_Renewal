import { atom } from "recoil";

export const loginState = atom<boolean>({
  key: "login",
  default: false,
});

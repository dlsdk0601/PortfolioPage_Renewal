import { atom, selector } from "recoil";
import api from "../api/api";
import { IUserData } from "../api/schema";
import { isBlank, isResSuccess } from "../ex/ex";

export const userData = atom<IUserData>({
  key: "userData",
  default: {
    id: "",
    name: "",
    role: null,
    token: null,
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
      token: null,
    };
  },
  set: ({ set }, newValue) => {
    set(userData, newValue);
  },
});

export const portfolio = atom({
  key: "portfolio",
  default: {
    title: "",
    fromDate: Date | null,
    toDate: Date | null,
    githubLink: "",
    siteUrl: "",
    participation: "",
    skill: "",
    mainFunction: "",
    detail: "",
    thumnail: "",
    banner: "",
    slideImg1: "",
    slideImg2: "",
    slideImg3: "",
    slideImg4: "",
  },
});

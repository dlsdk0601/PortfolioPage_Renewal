export const ERROR_TEXT = {
  notFindUserId: "아이디가 존재하지 않습니다.",
  wrongPassword: "비밀번호가 틀렸습니다.",
  saveFailToken: "토큰 저장 실패",
  notFindUserData: "유저 데이터를 찾지 못했습니다.",
  notAuthenticated: "Not authenticated",
  saveFailDB: "DB에 저장 실패",
};

export const ERROR_CUSTOM_CODE = {
  notFindUserId: 601,
  wrongPassword: 602,
  saveFailToken: 603,
  notFindUserData: 606,
  notAuthenticated: 401,
  saveFailDB: 600,
};

export const STATUS_CODE = {
  success: 200,
  fail: 500,
};

export const LINK_URL = {
  originLink: "http://localhost:3000", // 나중에 env 파일에 추가하고 배포하면 originLink 리펙토링
};

export const LIMIT_DATA = "50mb";

export const ROUTER = {
  version: "/api/v1",
  auth: "/auth",
  portfolio: "portfolio",
  register: "/register",
  signIn: "/sign-in",
  userInfo: "/user-info",
  cretePortfolio: "/create-portfolio",
};

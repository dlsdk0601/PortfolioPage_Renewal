import { BaseSyntheticEvent } from "react";
import { isNull, isUndefined, isArray, isEmpty, isObject } from "lodash";

export function preventDefault<T extends BaseSyntheticEvent>(
  callBackFunction: (e: T) => any
): (e: T) => void {
  return (e) => {
    e.preventDefault();
    callBackFunction(e);
  };
}

export const isBlank = (value: any): value is null | undefined => {
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (isNull(value)) {
    return true;
  }

  if (isUndefined(value)) {
    return true;
  }

  if (isArray(value) && isEmpty(value)) {
    return true;
  }

  if (isObject(value) && isEmpty(value)) {
    return true;
  }

  return false;
};

// export const isResSuccess = (res: ResType<any>): boolean => {
//   if (!res) {
//     return false;
//   }

//   if (res.code === 200) {
//     return true;
//   }

//   return false;
// };

// export const errorTextHandle = (code?: number): string => {
//   if (!code || code === 1000) {
//     return "서버통신에 실패하였습니다. 잠시 후 다시 이용해주세요.";
//   }

//   if (code === 601) {
//     return "아이디가 잘못됐습니다.";
//   }

//   if (code === 602) {
//     return "비밀번호가 잘못됐습니다.";
//   }

//   if (code === 603) {
//     return "토큰 저장 실패했습니다.";
//   }

//   if (code === 504) {
//     return "아이디를 입력해주세요.";
//   }

//   if (code === 505) {
//     return "비밀번호 형식이 잘못됐습니다.";
//   }

//   return "";
// };

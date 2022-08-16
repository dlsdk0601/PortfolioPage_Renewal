import { BaseSyntheticEvent } from "react";
import { isNull, isUndefined, isArray, isEmpty, isObject } from "lodash";
import { ResType } from "../api/schema";

export function preventDefault<T extends BaseSyntheticEvent>(
  callBackFunction: (e: T) => any
): (e: T) => void {
  return (e) => {
    e.preventDefault();
    callBackFunction(e);
  };
}

export const isBlank = (value: any): value is null | undefined => {
  if (value.trim() === "") {
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

export const isResSuccess = (res: ResType<any>): boolean => {
  if (!res) {
    return false;
  }

  if (res.code === 200) {
    return true;
  }

  return false;
};

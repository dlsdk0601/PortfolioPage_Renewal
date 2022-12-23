/* schema.d.ts 라는 파일은 원래 json-schema-to-typescript 라이브러리를 통해 generated 되는 파일을 참고되는 파일이다. */

// 모든 interface는 여기서 관리한다.

export interface IResponseJson<T> {
  data: T | null;
  code: number;
  msg: string | null;
  result: boolean;
  error: Error | null;
}

export interface ICustomError extends Error {
  code: number;
}

export interface ICustomRequest extends Request {
  userId: string;
}

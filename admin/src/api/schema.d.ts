/* schema.d.ts 라는 파일은 원래 json-schema-to-typescript 라이브러리를 통해 generated 되는 파일을 참고되는 파일이다. */

// 모든 interface는 여기서 관리한다.

export interface ResType<T> {
  code: number;
  result: boolean;
  msg: string | null;
  data: T | null;
}

export interface IPortfolioList {
  num: number;
  name: string;
  sitename: string;
  subs: string;
  part: string;
  mission: string;
  exp: string;
  skill: string;
  func: string;
  git: string;
  sitepage: string;
  howlong: string;
  responsive: string;
  color: string;
  img1: string;
  img2: string;
  img3: string;
  capture: string;
}

export interface ITestimonialList {
  num: number;
  tes_name: string;
  tes_text: string;
  tex_real: string;
  tes_oneline: string;
  photo: string;
}
export interface ILoginReq {
  id: string;
  password: string;
}

export interface ILoginRes {
  name?: string;
  id?: string;
  email?: string;
  password?: string;
  role?: number;
  token: string;
  tokenExp?: number;
}

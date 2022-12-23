import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextFunction, Request } from "express";
import User, { IUserSchema } from "../models/User";
import { resJsonType } from "../utils/resType";
import config from "../config";
import { ICustomError, ICustomRequest } from "../utils/schema";

const loginService = async (
  body: {
    id: string;
    password: string;
  },
  next: NextFunction,
) => {
  try {
    const { id, password } = body;

    // 요청된 아이디을 db에서 찾기
    const userInfo: IUserSchema | null = await User.findOne({ id });

    // 유저 정보가 없다면
    if (!userInfo) {
      const error = new Error("아이디가 존재하지 않습니다.") as ICustomError;
      error.code = 601;
      throw error;
    }

    // 아이디가 db에 있으면 비밀번호 확인
    const check = await bcrypt.compare(password, userInfo.password);

    if (!check) {
      const error = new Error("비밀번호가 틀렸습니다.") as ICustomError;
      error.code = 602;
      throw error;
    }

    // 비밀번호 맞으면 토근 생성
    const { _id: userId } = userInfo;
    const secret = config.JWT_SECRET;
    const token = jwt.sign({ userId }, secret, { expiresIn: "3d" });
    userInfo.token = token;

    const userInfoSave: IUserSchema | null = await userInfo.save();

    if (!userInfoSave) {
      const error = new Error("토큰 저장 실패") as ICustomError;
      error.code = 603;
      throw error;
    }

    const resJson = resJsonType<IUserSchema>(userInfo, 200);

    return resJson;
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

const getUserDataService = async (req: ICustomRequest, next: NextFunction) => {
  try {
    const userId = req.userId;
  } catch (err) {
    next(err);
  }
};

export default {
  loginService,
};

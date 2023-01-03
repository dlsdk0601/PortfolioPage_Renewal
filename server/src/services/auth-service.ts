import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request } from "express";
import { validationResult } from "express-validator";
import User, { IUserSchema } from "../models/User";
import { resJsonType } from "../utils/resType";
import config from "../config";
import { ICustomError } from "../utils/schema";
import { ERROR_CUSTOM_CODE, ERROR_TEXT, STATUS_CODE } from "../utils/constant";

const registerService = async (req: Request) => {
  try {
    const error = validationResult(req);
    console.log("errorSS");
    console.log(error);

    if (!error.isEmpty()) {
      const err = new Error("validation failed.") as ICustomError;
      err.code = 422;
      err.data = error.array();
      throw err;
    }

    const user = new User(req.body);

    // 스키마를 만들고 model로 감쌌는데 결국 하나의 class를 만든것이고,
    // user는 우리가 만든 User의 인스턴스가 되는거임.
    // 때문에 서버통신에서 각 해당 값들 잘 넘겨줘야함.
    user.save((err: Error | null, userInfo: IUserSchema) => {
      if (err) {
        const error = new Error(ERROR_TEXT.saveFailDB) as ICustomError;
        error.code = ERROR_CUSTOM_CODE.saveFailDB;
        throw error;
      }

      return resJsonType<IUserSchema>(userInfo, 200);
    });
  } catch (err) {
    console.log("err");
    console.log(err);
    throw err;
  }
};

const loginService = async (body: { id: string; password: string }) => {
  try {
    const { id, password } = body;

    // 요청된 아이디을 db에서 찾기
    const userInfo: IUserSchema | null = await User.findOne({ id });

    // 유저 정보가 없다면
    if (!userInfo) {
      const error = new Error(ERROR_TEXT.notFindUserId) as ICustomError;
      error.code = ERROR_CUSTOM_CODE.notFindUserId;
      throw error;
    }

    // 아이디가 db에 있으면 비밀번호 확인
    const check = await bcrypt.compare(password, userInfo.password);

    if (!check) {
      const error = new Error(ERROR_TEXT.wrongPassword) as ICustomError;
      error.code = ERROR_CUSTOM_CODE.wrongPassword;
      throw error;
    }

    // 비밀번호 맞으면 토근 생성
    const { _id: userId } = userInfo;
    const secret = config.JWT_SECRET;
    const token = jwt.sign({ userId }, secret, { expiresIn: "3d" });
    userInfo.token = token;

    const userInfoSave: IUserSchema | null = await userInfo.save();

    if (!userInfoSave) {
      const error = new Error(ERROR_TEXT.saveFailToken) as ICustomError;
      error.code = ERROR_CUSTOM_CODE.saveFailToken;
      throw error;
    }

    const resJson = resJsonType<IUserSchema>(userInfo, 200);

    return resJson;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserDataService = async (req: Request) => {
  try {
    const userId = req.userId;

    const userData: IUserSchema | null = await User.findOne({ _id: userId });

    if (!userData) {
      const error = new Error(ERROR_TEXT.notFindUserData) as ICustomError;
      error.code = ERROR_CUSTOM_CODE.notFindUserData;
      throw error;
    }

    return resJsonType<IUserSchema>(userData, STATUS_CODE.success);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default {
  loginService,
  getUserDataService,
  registerService,
};

import { Response, Request, NextFunction } from "express";
import User, { IUserSchema } from "../models/User";
import { resJsonType } from "../utils/resType";
import authService from "../services/auth-service";

// register
const register = (req: Request, res: Response) => {
  // req.body를 사용할 수 잇는것은 body-parser 때문임
  const user = new User(req.body);

  // 스키마를 만들고 model로 감쌌는데 결국 하나의 class를 만든것이고,
  // user는 우리가 만든 User의 인스턴스가 되는거임.
  // 때문에 서버통신에서 각 해당 값들 잘 넘겨줘야함.
  user.save((err: Error | null, userInfo: IUserSchema) => {
    if (err) {
      const resJson = resJsonType<null>(null, 600, "DB에 유저 저장 실패", err);
      return res.json(resJson);
    }

    const resJson = resJsonType<IUserSchema>(userInfo, 200);
    return res.json(resJson);
  });
};

// login
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = authService.loginService(req.body, next);
    return res.status(200).json(data);
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

// userData
const userData = async (req: Request, res: Response) => {
  const { headers } = req;

  const token = headers?.authorization;

  if (!token) {
    const resJson = resJsonType<null>(null, 605, "토큰 정보가 잘못돼었습니다.");
    return res.json(resJson);
  }

  const userData: IUserSchema | null = await User.findOne({ token });

  if (!userData) {
    const resJson = resJsonType<null>(null, 606, "해당 유저 정보가 없습니다.");
    return res.json(resJson);
  }

  const resJson = resJsonType<IUserSchema>(userData, 200);
  return res.json(resJson);
};

export default {
  register,
  login,
  userData,
};

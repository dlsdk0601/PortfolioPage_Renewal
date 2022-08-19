import { Response, Request } from "express";
import { IUserSchema } from "../models/User";
import User from "../models/User";
import bcrypt from "bcrypt";
import config from "../config";
import jwt from "jsonwebtoken";
import { resJsonType } from "../utils/resType";

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
const login = async (req: Request, res: Response) => {
  const {
    body: { id, password },
  } = req;

  // 요청된 아이디을 db에서 찾기
  const userInfo: IUserSchema | null = await User.findOne({ id });

  // 유저 정보가 없다면
  if (!userInfo) {
    const resJson = resJsonType<null>(null, 601, "아이디가 존재하지 않습니다.");
    return res.json(resJson);
  }

  // 아이디가 db에 있으면 비밀번호 확인
  const check = await bcrypt.compare(password, userInfo.password);

  if (!check) {
    const resJson = resJsonType<null>(null, 602, "비밀번호가 틀렸습니다.");
    return res.json(resJson);
  }

  // 비밀번호 맞으면 토근 생성
  const { _id: userId } = userInfo;
  const secret = config.JWT_SECRET || "";
  const token = jwt.sign({ userId }, secret, { expiresIn: "3d" });
  userInfo.token = token;

  const userInfoSave: IUserSchema | null = await userInfo.save();

  if (!userInfoSave) {
    const resJson = resJsonType<null>(null, 603, "토큰 저장 실패");
    return res.json(resJson);
  }

  const resJson = resJsonType<IUserSchema>(userInfo, 200);
  return res.json(resJson);
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

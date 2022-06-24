import express from "express";
import db, { AnyExpression } from "mongoose";
import dotenv from "dotenv";
import User, { IUserSchema } from "../models/User";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

// 환경변수
dotenv.config();

// express 및 포트번호
const app = express();

// app 설정

// cookie-parser 사용
app.use(cookie());

// --  apllication/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

// -- application/json 을 분석해서 가져옴
app.use(bodyParser.json());

const ERROROBJECT: { success: boolean; message: string } = {
  success: false,
  message: "통신에 실패했습니다.",
};

// 몽구스 옵션 타입
type IMongooseOption = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  useCreateIndex: boolean;
  useFindAndModify: boolean;
};

// 몽구스
const options: IMongooseOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

db.connect(
  `mongodb+srv://dlsdk0601:${process.env.NODE_MONGOOSEPASSWORD}@portfolio.dacwcma.mongodb.net/?retryWrites=true&w=majority`
)
  .then(() => console.log("good"))
  .catch((err) => console.log(err));

// register API
app.post("/register", (req, res) => {
  // req.body를 사용할 수 잇는것은 body-parser 때문임
  const user = new User(req.body);

  // 스키마를 만들고 model로 감쌌는데 결국 하나의 class를 만든것이고,
  // user는 우리가 만든 User의 인스턴스가 되는거임.
  // 때문에 서버통신에서 각 해당 값들 잘 넘겨줘야함.
  user.save((err: Error | null, userInfo: IUserSchema) => {
    if (err) return res.json({ result: false, err });

    return res.status(200).json({
      result: true,
      userInfo,
    });
  });
});

// login API
app.post("/login", async (req, res) => {
  const {
    body: { id, password },
  } = req;

  // 요청된 아이디을 db에서 찾기
  const userInfo: IUserSchema | null = await User.findOne({ id });

  // 유저 정보가 없다면
  if (!userInfo) {
    return res.json({
      result: false,
      message: "아이디가 존재하지 않습니다.",
    });
  }

  // 아이디가 db에 있으면 비밀번호 확인
  const check = await bcrypt.compare(password, userInfo.password);

  if (!check) {
    return res.json({
      result: false,
      message: "비밀번호가 틀렸습니다.",
    });
  }

  // 비밀번호 맞으면 토근 생성
  const { _id: userId } = userInfo;
  const secret = process.env.NODE_JWT_SECRET || "";
  const token = jwt.sign({ userId }, secret, { expiresIn: "3d" });
  userInfo.token = token;

  const userInfoSave: IUserSchema | null = await userInfo.save();

  if (!userInfoSave) {
    return res.json({
      result: false,
      message: "토큰 저장 실패",
    });
  }

  res.cookie("JWTTOKEN", token, {
    maxAge: 1000 * 60 * 60 * 24 * 3,
  });

  return res.json({
    result: true,
    message: "로그인 성공",
  });
});

app.get("/select", (req, res) => {
  const {
    body: { id },
  } = req;
  User.findOne({ id }, async (err: Error | null, userInfo: IUserSchema) => {
    if (err) {
      return res.json({
        message: "로그인 성공",
      });
    }
    return res.json({
      loginSuccess: true,
      message: "로그인 성공",
      userInfo,
    });
  });
});

app.listen(process.env.NODE_PORTNUMBER, () =>
  console.log(`let's go http://localhost:${process.env.NODE_PORTNUMBER}`)
);

import express from "express";
import db from "mongoose";
import dotenv from "dotenv";
import User, { IUserSchema } from "../models/User";
import bodyParser from "body-parser";

// 환경변수
dotenv.config();

// express 및 포트번호
const app = express();

// app 설정
// --  apllication/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

// -- application/json 을 분석해서 가져옴
app.use(bodyParser.json());

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

app.post("/register", (req, res) => {
  // req.body를 사용할 수 잇는것은 body-parser 때문임
  const user = new User(req.body);

  // 스키마를 만들고 model로 감쌌는데 결국 하나의 class를 만든것이고,
  // user는 우리가 만든 User의 인스턴스가 되는거임.
  // 때문에 서버통신에서 각 해당 값들 잘 넘겨줘야함.
  user.save((err: string, userInfo: IUserSchema) => {
    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: true,
      userInfo,
    });
  });
});

app.listen(process.env.NODE_PORTNUMBER, () =>
  console.log(`let's go http://localhost:${process.env.NODE_PORTNUMBER}`)
);

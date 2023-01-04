import db from "mongoose";
import bcrypt from "bcrypt";

const slatRounds = 10;

export interface IUserSchema extends db.Document {
  name?: string;
  id: string;
  email?: string;
  password: string;
  role?: string;
  token?: string;
  tokenExp?: number;
}

const userSchema = new db.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  id: {
    type: String,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: String,
    default: "ADMIN", // 일반 유저 (관리자는 1)
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  createdAt: {
    type: Date,
  },
});

// save라는 함수를 실행하기 직전 실행되는 함수
userSchema.pre<IUserSchema>("save", async function (next) {
  const user: IUserSchema = this;
  const password = user.password ?? "";

  // 정보가 변경되지 않았다면, 바로 next 실행
  if (!user.isModified("password")) {
    return next();
  }

  // salt 생성
  const salt = await bcrypt.genSalt(slatRounds);

  // 암호화된 비번 생성
  const hashedPW = await bcrypt.hash(password, salt);

  // 유저 인스턴스에 암호화된 비밀번호 대입
  user.password = hashedPW;

  // register callback 실행
  next();
});

const User = db.model<IUserSchema>("User", userSchema);

// 다른곳에서 쓸수 있게 모듈로 export
export default User;

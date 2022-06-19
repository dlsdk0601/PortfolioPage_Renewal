import db from "mongoose";

export interface IUserSchema {
  name?: string;
  email?: string;
  password?: string;
  role?: number;
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
    type: Number,
    default: 0, //일반 유저 (관리자는 1)
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = db.model("User", userSchema);

// 다른곳에서 쓸수 있게 모듈로 export
export default User;

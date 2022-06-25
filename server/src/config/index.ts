import dotenv from "dotenv";

// 환경변수
const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("couldn't find .env file");
}

export default {
  JWT_SECRET: process.env.NODE_JWT_SECRET,
  PORT: process.env.NODE_PORTNUMBER,
};

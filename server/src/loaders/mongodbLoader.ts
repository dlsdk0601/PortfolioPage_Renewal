import db from "mongoose";
import envConfig from "../config/index";

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

export default function mongodbLoader() {
  db.connect(
    `mongodb+srv://dlsdk0601:${envConfig.MONGODB_PASSWORD}@portfolio.dacwcma.mongodb.net/portfolio`
  )
    .then(() => console.log("✅ mongoDB Connection Successful"))
    .catch((err) => console.log("❌mongoDB Connection Failed", err));
}

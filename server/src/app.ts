import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/index";
import mongodbLoader from "./loaders/mongodbLoader";
import api from "./routes";

// express 및 포트번호
const app = express();

// app 설정

// cors 오류 방지
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

// --  apllication/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
// base64를 받게 되면, 용량이 어마어마해서 늘려놓음
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// -- application/json 을 분석해서 가져옴
// base64를 받게 되면, 용량이 어마어마해서 늘려놓음
app.use(bodyParser.json({ limit: "50mb" }));

mongodbLoader();

// route
app.use("/api/v1", api);

app.listen(config.PORT, () => {
  const dir = "./uploads";
  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }
  console.log("✅ server Connection Successful");
});

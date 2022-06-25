import express from "express";
import config from "./config";
import bodyParser from "body-parser";
import cors from "cors";
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
  })
);

// --  apllication/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

// -- application/json 을 분석해서 가져옴
app.use(bodyParser.json());

mongodbLoader();

// route
app.use(api);

app.listen(config.PORT, () => console.log(`✅ server Connection Successful`));

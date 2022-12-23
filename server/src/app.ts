import express, { ErrorRequestHandler, NextFunction, Request } from "express";
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

app.use(((err, req, res, next) => {
  console.log(err);
  const code = err.code ?? 0;
  const status = 500;
  const msg = err?.message ?? "";
  const data = err?.data ?? null;

  return res.status(status).json({ msg, data, code, result: false, error: err });
}) as ErrorRequestHandler);

app.listen(config.PORT, () => {
  const dir = "./uploads";
  console.log("✅ server Connection Successful");
});

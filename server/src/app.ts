import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/index";
import mongodbLoader from "./loaders/mongodbLoader";
import api from "./routes";
import { LIMIT_DATA, LINK_URL, ROUTER, STATUS_CODE } from "./utils/constant";

// express 및 포트번호
const app = express();

// app 설정

// cors 오류 방지
app.use(
  cors({
    origin: LINK_URL.originLink,
    credentials: true,
  }),
);

// --  apllication/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져옴
// base64를 받게 되면, 용량이 어마어마해서 늘려놓음
app.use(bodyParser.urlencoded({ limit: LIMIT_DATA, extended: true }));

// -- application/json 을 분석해서 가져옴
// base64를 받게 되면, 용량이 어마어마해서 늘려놓음
app.use(bodyParser.json({ limit: LIMIT_DATA }));

mongodbLoader();

// route
app.use(ROUTER.version, api);

app.use(((err, req, res) => {
  console.log("here1");
  console.log(err);
  const code = err.code ?? STATUS_CODE.fail;
  const msg = err?.message ?? "";
  const data = err?.data ?? null;

  return res.status(STATUS_CODE.fail).json({ msg, data, code, result: false, error: err });
}) as ErrorRequestHandler);

app.listen(config.PORT, () => {
  const dir = "./uploads";
  console.log("✅ server Connection Successful");
});

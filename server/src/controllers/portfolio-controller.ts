import { Response, Request } from "express";
import { resJsonType } from "../utils/resType";

// 포트폴리오 생성
const createPortfolio = (req: Request, res: Response) => {
  const { body } = req;

  // console.log("body==");
  // console.log(body);
  const test = Buffer.from(body.base64, "base64").toString("utf8");
  console.log("test===");
  console.log(test);

  const resJson = resJsonType<null>(null, 200);
  return res.json(resJson);
};
// const updatePortfolio = () => {};
// const deletePortfolio = () => {};
// const selectPortfolio = () => {};

export default {
  createPortfolio,
  // updatePortfolio,
  // deletePortfolio,
  // selectPortfolio,
};

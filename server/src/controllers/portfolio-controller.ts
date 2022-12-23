import { Response, Request } from "express";
import { resJsonType } from "../utils/resType";

// 포트폴리오 생성
const createPortfolio = (req: Request, res: Response) => {
  const { body } = req;

  const test = Buffer.from(body.base64, "base64").toString("utf8");

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

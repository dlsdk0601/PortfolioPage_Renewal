import { resJsonType } from "../utils/resType";

const createPortfolio = (req: Request, res: Response) => {

  const resJson = resJsonType<null>(null, 200)
  return resJson;
};
const updatePortfolio = () => {};
const deletePortfolio = () => {};
const selectPortfolio = () => {};

export default {
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  selectPortfolio,
};

import { Response, Request, NextFunction } from "express";
import { ValidationError } from "express-validator";
import authService from "../services/auth-service";
import { STATUS_CODE } from "../utils/constant";
import { ICustomError } from "../utils/schema";

// register
const register = async (req: Request, res: Response) => {
  try {
    const data = await authService.registerService(req);
    return res.status(STATUS_CODE.success).json(data);
  } catch (error) {
    // CHECK :: try catch에서 err 타입이 any에서 unknown으로 바껴서
    // 타입 설정을 한번 걸쳐준다
    const err = error as ICustomError;

    const code = err.code ?? STATUS_CODE.fail;
    const msg = err?.message ?? "";
    const errorData = err?.data[0] ?? null;

    return res
      .status(STATUS_CODE.fail)
      .json({ msg, data: null, code, result: false, error: errorData });
  }
};

// login
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = authService.loginService(req.body);
    return res.status(STATUS_CODE.success).json(data);
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

// userData
const userData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.getUserDataService(req);
    return res.status(STATUS_CODE.success).json(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default {
  register,
  login,
  userData,
};

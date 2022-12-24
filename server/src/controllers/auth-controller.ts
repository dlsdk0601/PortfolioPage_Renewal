import { Response, Request, NextFunction } from "express";
import authService from "../services/auth-service";
import { STATUS_CODE } from "../utils/constant";

// register
const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.registerService(req);
    return res.status(STATUS_CODE.success).json(data);
  } catch (err) {
    console.log(err);
    next(err);
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

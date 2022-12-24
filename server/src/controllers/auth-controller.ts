import { Response, Request, NextFunction } from "express";
import User, { IUserSchema } from "../models/User";
import { resJsonType } from "../utils/resType";
import authService from "../services/auth-service";

// register
const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.registerService(req);
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// login
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = authService.loginService(req.body);
    return res.status(200).json(data);
  } catch (err: any) {
    console.log(err);
    next(err);
  }
};

// userData
const userData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await authService.getUserDataService(req);
    return res.status(200).json(data);
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

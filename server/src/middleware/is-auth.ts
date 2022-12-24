import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ICustomError } from "../utils/schema";
import envConfig from "../config";
import { ERROR_CUSTOM_CODE, ERROR_TEXT } from "../utils/constant";

dotenv.config();

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.Authorization ?? "";

  if (!authHeader || typeof authHeader !== "string") {
    const error = new Error(ERROR_TEXT.notAuthenticated) as ICustomError;
    error.code = ERROR_CUSTOM_CODE.notAuthenticated;
    throw error;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = jwt.verify(token, envConfig.JWT_SECRET);

    if (!decodedToken || typeof decodedToken === "string") {
      const error = new Error(ERROR_TEXT.notAuthenticated) as ICustomError;
      error.code = ERROR_CUSTOM_CODE.notAuthenticated;
      throw error;
    }

    req.userId = decodedToken?.userId ?? "";

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default isAuth;

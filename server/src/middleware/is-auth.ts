import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { NextFunction, Request, RequestParamHandler } from "express";
import { ICustomError, ICustomRequest } from "../utils/schema";
import envConfig from "../config";

dotenv.config();

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  const authHeader: string = req?.headers?.Authorization ?? undefined;

  if (!authHeader) {
    const err = new Error("Not authenticated") as ICustomError;
    err.code = 401;
    throw err;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = jwt.verify(token, envConfig.JWT_SECRET);

    if (!decodedToken || typeof decodedToken === "string") {
      const err = new Error("Not authenticated") as ICustomError;
      err.code = 401;
      throw err;
    }

    req.userId = decodedToken?.userId ?? "";

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default isAuth;

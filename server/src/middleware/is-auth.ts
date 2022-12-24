import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { ErrorRequestHandler, NextFunction, Request, RequestParamHandler } from "express";
import { ICustomError } from "../utils/schema";
import envConfig from "../config";
import { errorCode, errorText } from "../utils/constant";

dotenv.config();

const isAuth = ((_, req, res, next) => {
  const authHeader = req.headers.Authorization ?? "";

  if (!authHeader || typeof authHeader !== "string") {
    const error = new Error(errorText.notAuthenticated) as ICustomError;
    error.code = errorCode.notAuthenticated;
    throw error;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = jwt.verify(token, envConfig.JWT_SECRET);

    if (!decodedToken || typeof decodedToken === "string") {
      const error = new Error(errorText.notAuthenticated) as ICustomError;
      error.code = errorCode.notAuthenticated;
      throw error;
    }

    req.userId = decodedToken?.userId ?? "";

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}) as ErrorRequestHandler;

export default isAuth;

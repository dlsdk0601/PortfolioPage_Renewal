import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { ErrorRequestHandler, NextFunction, Request, RequestParamHandler } from "express";
import { ICustomError } from "../utils/schema";
import envConfig from "../config";

dotenv.config();

const isAuth = ((_, req, res, next) => {
  const authHeader = req.headers.Authorization ?? "";

  if (!authHeader || typeof authHeader !== "string") {
    const error = new Error("Not authenticated") as ICustomError;
    error.code = 401;
    throw error;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = jwt.verify(token, envConfig.JWT_SECRET);

    if (!decodedToken || typeof decodedToken === "string") {
      const error = new Error("Not authenticated") as ICustomError;
      error.code = 401;
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

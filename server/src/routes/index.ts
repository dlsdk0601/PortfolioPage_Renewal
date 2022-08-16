import express from "express";
import { authRouter } from "./auth/auth";

const api = express.Router();

api.use("v1", authRouter);

export default api;

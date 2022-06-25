import express from "express";
import { authRouter } from "./auth/auth";

const api = express.Router();

api.use(authRouter);

export default api;

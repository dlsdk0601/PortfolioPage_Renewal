import express from "express";
import { authRouter } from "./auth/auth";
import { portfolioRouter } from "./portfolio/portfolio";

const api = express.Router();

api.use("/v1", authRouter);
api.use("/v1", portfolioRouter);

export default api;

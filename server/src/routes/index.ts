import express from "express";
import { authRouter } from "./auth/auth";
import { portfolioRouter } from "./portfolio/portfolio";

const api = express.Router();

api.use("/auth", authRouter);
api.use("/portfolio", portfolioRouter);

export default api;

import express from "express";
import { authRouter } from "./auth/auth";
import { portfolioRouter } from "./portfolio/portfolio";
import { ROUTER } from "../utils/constant";

const api = express.Router();

api.use(ROUTER.auth, authRouter);
api.use(ROUTER.portfolio, portfolioRouter);

export default api;

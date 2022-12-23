import express from "express";
import { body } from "express-validator";
import authController from "../../controllers/auth-controller";
import isAuth from "../../middleware/is-auth";

const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/user-info", isAuth, authController.userData);

export { authRouter };

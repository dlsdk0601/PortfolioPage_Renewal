import express from "express";
import { body } from "express-validator";
import authController from "../../controllers/auth-controller";
import isAuth from "../../middleware/is-auth";

const authRouter = express.Router();

authRouter.post(
  "/register",
  [
    body("name").not().isEmpty(),
    body("id").isLength({ max: 10 }).not().isEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
  ],
  authController.register,
);
authRouter.post("/login", authController.login);
authRouter.get("/user-info", isAuth, authController.userData);

export { authRouter };

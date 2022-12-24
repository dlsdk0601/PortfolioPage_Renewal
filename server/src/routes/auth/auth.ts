import express from "express";
import { body } from "express-validator";
import authController from "../../controllers/auth-controller";
import isAuth from "../../middleware/is-auth";
import { ROUTER } from "../../utils/constant";

const authRouter = express.Router();

authRouter.post(
  ROUTER.register,
  [
    body("name").not().isEmpty(),
    body("id").isLength({ max: 10 }).not().isEmpty(),
    body("email").isEmail().normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
  ],
  authController.register,
);

authRouter.post(ROUTER.signIn, authController.login);

authRouter.get(ROUTER.userInfo, isAuth, authController.userData);

export { authRouter };

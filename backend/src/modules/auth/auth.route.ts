import { Router } from "express";
import z from "zod";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";

const router = Router();

const authController = new AuthController();

const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

router.post("/login", validateRequest(LoginSchema), authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", authController.getNewAccessToken);
router.get("/validate", checkAuth, authController.validateUser);

export const authRoutes = router;

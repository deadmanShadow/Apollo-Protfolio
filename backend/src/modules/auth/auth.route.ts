import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";
import { loginSchema } from "./auth.validation";

const router = Router();

const authController = new AuthController();

router.post("/login", validateRequest(loginSchema), authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", authController.getNewAccessToken);
router.get("/validate", checkAuth, authController.validateUser);

export const authRoutes = router;

import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserController } from "./user.controller";
import { UserUpdateAPISchema } from "./user.validation";

const router = Router();

const userController = new UserController();

router.get("/about-me", userController.aboutMe);

router.patch(
  "/update",
  checkAuth,
  multerUpload.single("picture"),
  validateRequest(UserUpdateAPISchema),
  userController.updateUser
);
router.get("/dashboard", checkAuth, userController.dashboard);

export const userRoutes = router;

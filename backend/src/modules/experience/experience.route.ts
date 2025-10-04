import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { ExperienceController } from "./experience.controller";
import {
  ExperienceCreateAPISchema,
  ExperienceUpdateAPISchema,
} from "./experinece.validation";

const router = Router();

const experienceController = new ExperienceController();

router.post(
  "/create",
  checkAuth,
  validateRequest(ExperienceCreateAPISchema),
  experienceController.create
);

router.patch(
  "/update/:id",
  checkAuth,
  validateRequest(ExperienceUpdateAPISchema),
  experienceController.updateExperience
);

router.delete("/delete/:id", checkAuth, experienceController.deleteExperience);
router.get("/:id", experienceController.getSingleExperience);

export const experienceRoutes = router;

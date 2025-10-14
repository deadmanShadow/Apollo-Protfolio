import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { ProjectController } from "./project.controller";
import {
  ProjectCreateAPISchema,
  ProjectUpdateAPISchema,
} from "./project.validation";

const router = Router();

const projectController = new ProjectController();

router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);

//update routes
router.post(
  "/create",
  checkAuth,
  multerUpload.single("thumbnail"),
  validateRequest(ProjectCreateAPISchema),
  projectController.create
);

router.patch(
  "/:id",
  checkAuth,
  multerUpload.single("thumbnail"),
  validateRequest(ProjectUpdateAPISchema),
  projectController.updateProject
);

router.delete("/:id", checkAuth, projectController.deleteProject);

export const projectRoutes = router;

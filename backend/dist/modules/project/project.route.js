"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const project_controller_1 = require("./project.controller");
const project_validation_1 = require("./project.validation");
const router = (0, express_1.Router)();
const projectController = new project_controller_1.ProjectController();
router.get("/all", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);
//update routes
router.post("/create", checkAuth_1.checkAuth, multer_config_1.multerUpload.single("thumbnail"), (0, validateRequest_1.validateRequest)(project_validation_1.ProjectCreateAPISchema), projectController.create);
router.patch("/:id", checkAuth_1.checkAuth, multer_config_1.multerUpload.single("thumbnail"), (0, validateRequest_1.validateRequest)(project_validation_1.ProjectUpdateAPISchema), projectController.updateProject);
router.delete("/:id", checkAuth_1.checkAuth, projectController.deleteProject);
exports.projectRoutes = router;

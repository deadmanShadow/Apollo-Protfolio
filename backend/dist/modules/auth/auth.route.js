"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const zod_1 = __importDefault(require("zod"));
const checkAuth_1 = require("../../middlewares/checkAuth");
const validateRequest_1 = require("../../middlewares/validateRequest");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
const authController = new auth_controller_1.AuthController();
const LoginSchema = zod_1.default.object({
    email: zod_1.default.email(),
    password: zod_1.default.string(),
});
router.post("/login", (0, validateRequest_1.validateRequest)(LoginSchema), authController.login);
router.post("/logout", authController.logout);
router.post("/refresh-token", authController.getNewAccessToken);
router.get("/validate", checkAuth_1.checkAuth, authController.validateUser);
exports.authRoutes = router;

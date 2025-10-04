"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({ message: "Email is required" })
        .email("Invalid email address"),
    password: zod_1.z
        .string({ message: "Password is required" })
        .min(6, "Password must be at least 6 characters"),
});

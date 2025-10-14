"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateAPISchema = exports.ProjectCreateAPISchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.ProjectCreateAPISchema = zod_1.default.object({
    title: zod_1.default.string(),
    thumbnail: zod_1.default.string().optional(),
    projectLink: zod_1.default.string(),
    liveSite: zod_1.default.string().optional(),
    description: zod_1.default.string(),
    features: zod_1.default.string(),
});
exports.ProjectUpdateAPISchema = zod_1.default.object({
    title: zod_1.default.string().optional(),
    thumbnail: zod_1.default.string().optional(),
    projectLink: zod_1.default.string().optional(),
    liveSite: zod_1.default.string().optional(),
    description: zod_1.default.string().optional(),
    features: zod_1.default.string().optional(),
});

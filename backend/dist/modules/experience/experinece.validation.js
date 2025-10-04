"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateAPISchema = exports.ExperienceCreateAPISchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.ExperienceCreateAPISchema = zod_1.default.object({
    company: zod_1.default.string(),
    position: zod_1.default.string(),
    startDate: zod_1.default.date(),
    endDate: zod_1.default.date().optional(),
});
exports.ExperienceUpdateAPISchema = zod_1.default.object({
    company: zod_1.default.string().optional(),
    position: zod_1.default.string().optional(),
    startDate: zod_1.default.date().optional(),
    endDate: zod_1.default.date().optional(),
});

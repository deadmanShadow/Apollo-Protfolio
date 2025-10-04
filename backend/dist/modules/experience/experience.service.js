"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const http_status_codes_1 = require("http-status-codes");
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../helpers/AppError"));
class ExperienceService {
    create(userId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const experienceData = Object.assign(Object.assign({}, payload), { userId });
            const result = yield db_1.prisma.workExperience.create({ data: experienceData });
            return result;
        });
    }
    //get single experience
    getSingleExperience(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const experience = yield db_1.prisma.workExperience.findUnique({
                where: { id },
            });
            if (!experience)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Experience not found!");
            return experience;
        });
    }
    //update
    updateExperience(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const experience = yield db_1.prisma.workExperience.findUnique({
                where: { id },
            });
            if (!experience)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Experience not found!");
            const updatedExperience = yield db_1.prisma.workExperience.update({
                where: { id: experience.id },
                data: payload,
            });
            return updatedExperience;
        });
    }
    //delete
    deleteExperience(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const experience = yield db_1.prisma.workExperience.findUnique({
                where: { id },
            });
            if (!experience)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Experience not found!");
            yield db_1.prisma.workExperience.delete({
                where: { id: experience.id },
            });
            return null;
        });
    }
}
exports.ExperienceService = ExperienceService;

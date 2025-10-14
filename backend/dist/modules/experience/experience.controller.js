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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const experience_service_1 = require("./experience.service");
const experienceService = new experience_service_1.ExperienceService();
class ExperienceController {
    constructor() {
        //create experience
        this.create = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const decodedToken = req.user;
            const result = yield experienceService.create(decodedToken.id, req.body);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.CREATED,
                message: "Experience Created Successfully!",
                data: result,
            });
        }));
        //get single experience
        this.getSingleExperience = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield experienceService.getSingleExperience(Number(id));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Experience retrieved Successfully!",
                data: result,
            });
        }));
        this.getAllExperiences = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield experienceService.getAllExperiences();
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Experiences retrieved Successfully!",
                meta: result.meta,
                data: result.data,
            });
        }));
        //update experience
        this.updateExperience = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield experienceService.updateExperience(Number(id), req.body);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Experience updated Successfully!",
                data: result,
            });
        }));
        //update experience
        this.deleteExperience = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield experienceService.deleteExperience(Number(id));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Experience deleted Successfully!",
                data: result,
            });
        }));
    }
}
exports.ExperienceController = ExperienceController;

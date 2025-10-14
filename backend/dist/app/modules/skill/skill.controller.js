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
exports.SkillController = void 0;
const skill_service_1 = require("./skill.service");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const uploadImage_1 = require("../../middleware/uploadImage");
const createSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let imageUrl = req.body.image;
    if (req.file) {
        imageUrl = yield (0, uploadImage_1.uploadToCloudinary)(req.file.buffer, req.file.originalname);
    }
    const skillData = Object.assign(Object.assign({}, req.body), { adminId: (_a = req.body.adminId) === null || _a === void 0 ? void 0 : _a.trim(), image: imageUrl });
    const result = yield skill_service_1.SkillService.createSkill(skillData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Skill created successfully",
        data: result,
    });
}));
const getAllSkills = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.query;
    const result = yield skill_service_1.SkillService.getAllSkills(type);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Skills retrieved successfully",
        data: result,
    });
}));
const getTechnicalSkills = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getTechnicalSkills();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Technical skills retrieved successfully",
        data: result,
    });
}));
const getSoftSkills = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getSoftSkills();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Soft skills retrieved successfully",
        data: result,
    });
}));
const getSingleSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.getSingleSkill(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Skill retrieved successfully",
        data: result,
    });
}));
const updateSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.SkillService.updateSkill(Number(req.params.id), req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Skill updated successfully",
        data: result,
    });
}));
const deleteSkill = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield skill_service_1.SkillService.deleteSkill(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Skill deleted successfully",
        data: null,
    });
}));
exports.SkillController = {
    createSkill,
    getAllSkills,
    getTechnicalSkills,
    getSoftSkills,
    getSingleSkill,
    updateSkill,
    deleteSkill,
};

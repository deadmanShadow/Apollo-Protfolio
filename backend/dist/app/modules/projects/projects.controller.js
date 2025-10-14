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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const projects_service_1 = require("./projects.service");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const uploadImage_1 = require("../../middleware/uploadImage");
const createProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let imageUrl;
    if (req.file) {
        imageUrl = yield (0, uploadImage_1.uploadToCloudinary)(req.file.buffer, req.file.originalname);
    }
    const _b = req.body || {}, { features, technologies } = _b, otherData = __rest(_b, ["features", "technologies"]);
    const projectData = Object.assign(Object.assign({}, otherData), { adminId: (_a = otherData === null || otherData === void 0 ? void 0 : otherData.adminId) === null || _a === void 0 ? void 0 : _a.trim(), features: features ? (Array.isArray(features) ? features : [features]) : [], technologies: technologies ? (Array.isArray(technologies) ? technologies : [technologies]) : [] });
    // Only add image if we have one
    if (imageUrl) {
        projectData.image = imageUrl;
    }
    const result = yield projects_service_1.ProjectService.createProject(projectData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Project created successfully",
        data: result,
    });
}));
const getAllProjects = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectService.getAllProjects();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Projects retrieved successfully",
        data: result,
    });
}));
const getSingleProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectService.getSingleProject(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Project retrieved successfully",
        data: result,
    });
}));
const updateProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let imageUrl;
    if (req.file) {
        imageUrl = yield (0, uploadImage_1.uploadToCloudinary)(req.file.buffer, req.file.originalname);
    }
    const _a = req.body || {}, { features, technologies } = _a, otherData = __rest(_a, ["features", "technologies"]);
    const updateData = Object.assign(Object.assign({}, otherData), { features: features ? (Array.isArray(features) ? features : [features]) : [], technologies: technologies ? (Array.isArray(technologies) ? technologies : [technologies]) : [] });
    if (imageUrl) {
        updateData.image = imageUrl;
    }
    const result = yield projects_service_1.ProjectService.updateProject(Number(id), updateData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Project updated successfully",
        data: result,
    });
}));
const deleteProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield projects_service_1.ProjectService.deleteProject(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Project deleted successfully",
        data: null,
    });
}));
exports.ProjectController = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
};

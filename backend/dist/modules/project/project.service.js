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
exports.ProjectService = void 0;
const http_status_codes_1 = require("http-status-codes");
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../helpers/AppError"));
class ProjectService {
    //get all projects
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.prisma.project.findMany();
            return {
                meta: { total: result.length },
                data: result,
            };
        });
    }
    //get single projects
    getSinglelProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield db_1.prisma.project.findUnique({
                where: { id: projectId },
            });
            if (!project)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Project not found!");
            return project;
        });
    }
    //create project
    create(userId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectData = Object.assign(Object.assign({}, payload), { userId });
            const result = yield db_1.prisma.project.create({ data: projectData });
            return result;
        });
    }
    //update project
    updateProject(projectId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield db_1.prisma.project.findUnique({
                where: { id: projectId },
            });
            if (!project)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Project not found!");
            const updatedProject = yield db_1.prisma.project.update({
                where: { id: projectId },
                data: payload,
            });
            return updatedProject;
        });
    }
    //delete project
    deleteProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield db_1.prisma.project.findUnique({
                where: { id: projectId },
            });
            if (!project)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Project not found!");
            yield db_1.prisma.project.delete({
                where: { id: projectId },
            });
            return null;
        });
    }
}
exports.ProjectService = ProjectService;

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
exports.UserService = void 0;
const http_status_codes_1 = require("http-status-codes");
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../helpers/AppError"));
class UserService {
    aboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield db_1.prisma.user.findFirst({
                select: {
                    name: true,
                    email: true,
                    picture: true,
                    phone: true,
                    bio: true,
                    skills: true,
                    experiences: {
                        orderBy: { startDate: "desc" },
                    },
                },
            });
            return userInfo;
        });
    }
    updateUser(userId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (payload.password) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Remove password from payload and use specific endpoint for password update");
            }
            const updatedUser = yield db_1.prisma.user.update({
                where: { id: userId },
                data: payload,
                select: {
                    name: true,
                    email: true,
                    picture: true,
                    phone: true,
                    bio: true,
                    skills: true,
                },
            });
            return updatedUser;
        });
    }
    dashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            const totalProject = yield db_1.prisma.project.count();
            const totalExperience = yield db_1.prisma.workExperience.count();
            const totalBlogs = yield db_1.prisma.blog.count();
            const totalPublishedBlog = yield db_1.prisma.blog.count({
                where: { published: true },
            });
            const totalUnpublishedBlog = yield db_1.prisma.blog.count({
                where: { published: false },
            });
            const recentBlogs = yield db_1.prisma.blog.findMany({
                orderBy: {
                    createdAt: "desc",
                },
                take: 2,
            });
            return {
                projects: {
                    total: totalProject,
                },
                experiences: {
                    total: totalExperience,
                },
                blogs: {
                    total: totalBlogs,
                    published: totalPublishedBlog,
                    unpublished: totalUnpublishedBlog,
                    recentBlogs,
                },
            };
        });
    }
}
exports.UserService = UserService;

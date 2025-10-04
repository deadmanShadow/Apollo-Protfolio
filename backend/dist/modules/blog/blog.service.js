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
exports.BlogService = void 0;
const http_status_codes_1 = require("http-status-codes");
const db_1 = require("../../config/db");
const AppError_1 = __importDefault(require("../../helpers/AppError"));
class BlogService {
    getAllBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.prisma.blog.findMany();
            return {
                meta: { total: result.length },
                data: result,
            };
        });
    }
    getSingleBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield db_1.prisma.blog.findUnique({ where: { id } });
            if (!blog)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Blog not found!");
            //increase view
            yield db_1.prisma.blog.update({
                where: { id },
                data: { view: { increment: 1 } },
            });
            return blog;
        });
    }
    // create blog
    createBlog(userId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogData = Object.assign(Object.assign({}, payload), { userId });
            const blog = yield db_1.prisma.blog.create({
                data: blogData,
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            picture: true,
                        },
                    },
                },
            });
            return blog;
        });
    }
    //update blog
    updateBlog(blogId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield db_1.prisma.blog.findUnique({ where: { id: blogId } });
            if (!blog) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Blog not found!");
            }
            const updatedBlog = yield db_1.prisma.blog.update({
                where: { id: blog.id },
                data: payload,
            });
            return updatedBlog;
        });
    }
    //delete blog
    deleteBlog(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield db_1.prisma.blog.findUnique({ where: { id: blogId } });
            if (!blog) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Blog not found!");
            }
            yield db_1.prisma.blog.delete({
                where: { id: blog.id },
            });
            return null;
        });
    }
}
exports.BlogService = BlogService;

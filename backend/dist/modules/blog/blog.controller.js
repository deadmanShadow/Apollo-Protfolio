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
exports.BlogController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const blog_service_1 = require("./blog.service");
const blogService = new blog_service_1.BlogService();
class BlogController {
    constructor() {
        this.getAllBlogs = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield blogService.getAllBlogs();
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "All blogs retrieved Successfully!",
                meta: result.meta,
                data: result.data,
            });
        }));
        this.getSingleBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const blogId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
            const result = yield blogService.getSingleBlog(Number(blogId));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Blog retrieved Successfully!",
                data: result,
            });
        }));
        //create blog
        this.createBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const decodedToken = req.user;
            const result = yield blogService.createBlog(decodedToken.id, req.body);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.CREATED,
                message: "Blog created Successfully!",
                data: result,
            });
        }));
        //update blog
        this.updateBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield blogService.updateBlog(Number(id), req.body);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Blog updated Successfully!",
                data: result,
            });
        }));
        //delete blog
        this.deleteBlog = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield blogService.deleteBlog(Number(id));
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Blog deleted Successfully!",
                data: result,
            });
        }));
    }
}
exports.BlogController = BlogController;

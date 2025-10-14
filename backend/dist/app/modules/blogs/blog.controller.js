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
const blog_service_1 = require("./blog.service");
const catchAsync_1 = require("../../../utils/catchAsync");
const sendResponse_1 = require("../../../utils/sendResponse");
const uploadImage_1 = require("../../middleware/uploadImage");
const createBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let photoUrl = req.body.photo;
    if (req.file) {
        photoUrl = yield (0, uploadImage_1.uploadToCloudinary)(req.file.buffer, req.file.originalname);
    }
    const blogData = {
        concept: req.body.concept,
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        adminId: req.body.adminId,
        photo: photoUrl,
    };
    const result = yield blog_service_1.BlogService.createBlog(blogData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
}));
const getAllBlogs = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getAllBlogs();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blogs retrieved successfully",
        data: result,
    });
}));
const getSingleBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogService.getSingleBlog(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog retrieved successfully",
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let photoUrl = req.body.photo;
    if (req.file) {
        photoUrl = yield (0, uploadImage_1.uploadToCloudinary)(req.file.buffer, req.file.originalname);
    }
    const updateData = Object.assign({ concept: req.body.concept, title: req.body.title, description: req.body.description, link: req.body.link, adminId: req.body.adminId }, (photoUrl && { photo: photoUrl }));
    const result = yield blog_service_1.BlogService.updateBlog(Number(req.params.id), updateData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
}));
const deleteBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield blog_service_1.BlogService.deleteBlog(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully",
        data: null,
    });
}));
exports.BlogController = {
    createBlog,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};

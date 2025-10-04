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
exports.UserController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const user_service_1 = require("./user.service");
const userService = new user_service_1.UserService();
class UserController {
    constructor() {
        //about me
        this.aboutMe = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield userService.aboutMe();
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "About me Information retrieved!",
                data: userInfo,
            });
        }));
        //update user
        this.updateUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const decodedToken = req.user;
            const payload = Object.assign(Object.assign({}, req.body), { picture: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
            const userInfo = yield userService.updateUser(decodedToken.id, payload);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "User Information updated successfully!",
                data: userInfo,
            });
        }));
    }
}
exports.UserController = UserController;

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
exports.AuthController = void 0;
const http_status_codes_1 = require("http-status-codes");
const env_1 = require("../../config/env");
const AppError_1 = __importDefault(require("../../helpers/AppError"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const setCookies_1 = require("../../utils/setCookies");
const auth_service_1 = require("./auth.service");
const authService = new auth_service_1.AuthService();
class AuthController {
    constructor() {
        this.login = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const loginInfo = yield authService.login(req.body);
            (0, setCookies_1.setAuthCookies)(res, loginInfo);
            return (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Login successful!",
                data: loginInfo,
            });
        }));
        this.logout = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.clearCookie("accessToken", {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === "production",
                sameSite: env_1.env.NODE_ENV === "production" ? "none" : "lax",
            });
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: env_1.env.NODE_ENV === "production",
                sameSite: env_1.env.NODE_ENV === "production" ? "none" : "lax",
            });
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "Logout successful",
                data: null,
            });
        }));
        this.getNewAccessToken = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "No refresh token recieved from cookies");
            }
            const accessToken = yield authService.getNewAccessToken(refreshToken);
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "New Access Token Retrived successfully",
                data: accessToken,
            });
        }));
        this.validateUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            (0, sendResponse_1.sendResponse)(res, {
                success: true,
                statusCode: http_status_codes_1.StatusCodes.OK,
                message: "User validation successful",
                data: req.user,
            });
        }));
    }
}
exports.AuthController = AuthController;

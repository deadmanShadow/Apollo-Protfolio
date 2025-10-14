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
exports.authService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const env_1 = require("../../../config/env");
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const jwt_1 = require("../../../utils/jwt");
const prisma = new client_1.PrismaClient();
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });
    console.log("Found user data:", userData);
    if (!userData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    // check is password correct
    const isCorrectPassword = yield bcrypt_1.default.compare(payload.password, userData.password);
    if (!isCorrectPassword) {
        throw new Error("password incorrect");
    }
    const jwtPayload = {
        email: userData.email,
        role: userData.role,
    };
    const accessToken = (0, jwt_1.generateToken)(jwtPayload, env_1.envVars.JWT_ACCESS_SECRET, env_1.envVars.JWT_ACCESS_EXPIRES);
    const refreshToken = (0, jwt_1.generateToken)(jwtPayload, env_1.envVars.JWT_REFRESH_SECRET, env_1.envVars.JWT_REFRESH_EXPIRES);
    return {
        accessToken,
        refreshToken,
        user: {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
        },
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let decodedData;
    try {
        decodedData = (0, jwt_1.verifyToken)(token, env_1.envVars.JWT_REFRESH_SECRET);
    }
    catch (error) {
        throw new Error("you are not authorized");
    }
    const userData = yield prisma.user.findUnique({
        where: {
            email: decodedData === null || decodedData === void 0 ? void 0 : decodedData.email,
            role: client_1.UserRole.ADMIN,
        },
    });
    if (!userData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "admin Does not exist");
    }
    const accessToken = (0, jwt_1.generateToken)({
        email: userData.email,
        role: userData.role,
    }, env_1.envVars.JWT_ACCESS_SECRET, env_1.envVars.JWT_ACCESS_EXPIRES);
    return {
        accessToken,
        refreshToken,
    };
});
exports.authService = {
    loginUser,
    refreshToken,
};

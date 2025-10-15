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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../../../config/db");
const env_1 = require("../../../config/env");
const AppError_1 = __importDefault(require("../../../helpers/AppError"));
const jwtToken_1 = require("../../../utils/jwtToken");
class AuthService {
    constructor() {
        this.getNewAccessToken = (refreshToken) => __awaiter(this, void 0, void 0, function* () {
            const verifiedRefreshToken = (0, jwtToken_1.verifyToken)(refreshToken, env_1.envVars.JWT_SECRET);
            const user = yield db_1.prisma.user.findUnique({
                where: {
                    id: verifiedRefreshToken.id,
                },
            });
            if (!user)
                throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "User does not exist");
            const jwtPayload = {
                id: user.id,
                name: user.name,
                email: user.email,
            };
            const accessToken = jsonwebtoken_1.default.sign(jwtPayload, env_1.envVars.JWT_SECRET, {
                expiresIn: env_1.envVars.JWT_ACCESS_TOKEN_EXPIRES,
            });
            return { accessToken };
        });
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.prisma.user.findUnique({
                where: { email: payload.email },
            });
            if (!user) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "User does not exist!");
            }
            const passwordMatched = yield bcryptjs_1.default.compare(payload.password, user.password);
            if (!passwordMatched) {
                throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Password is incorrect!");
            }
            const jwtPayload = {
                id: user.id,
                name: user.name,
                email: user.email,
            };
            const accessToken = jsonwebtoken_1.default.sign(jwtPayload, env_1.envVars.JWT_SECRET, {
                expiresIn: env_1.envVars.JWT_ACCESS_TOKEN_EXPIRES,
            });
            const refreshToken = jsonwebtoken_1.default.sign(jwtPayload, env_1.envVars.JWT_SECRET, {
                expiresIn: env_1.envVars.JWT_REFRESH_TOKEN_EXPIRES,
            });
            const { password: pass } = user, userInfo = __rest(user, ["password"]);
            return {
                accessToken,
                refreshToken,
                user: userInfo,
            };
        });
    }
}
exports.AuthService = AuthService;

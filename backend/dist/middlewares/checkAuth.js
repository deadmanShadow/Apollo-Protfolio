"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const http_status_codes_1 = require("http-status-codes");
const env_1 = require("../config/env");
const AppError_1 = __importDefault(require("../helpers/AppError"));
const jwtToken_1 = require("../utils/jwtToken");
const checkAuth = (req, res, next) => {
    var _a, _b;
    try {
        const accessToken = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken) || ((_b = req.headers) === null || _b === void 0 ? void 0 : _b.authorization);
        if (!accessToken)
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "No token recieved");
        const verifiedToken = (0, jwtToken_1.verifyToken)(accessToken, env_1.env.JWT_SECRET);
        req.user = verifiedToken;
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.checkAuth = checkAuth;

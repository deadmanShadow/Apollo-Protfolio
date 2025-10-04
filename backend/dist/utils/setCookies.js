"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthCookies = void 0;
const env_1 = require("../config/env");
const setAuthCookies = (res, token) => {
    if (token.accessToken) {
        res.cookie("accessToken", token.accessToken, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: env_1.env.NODE_ENV === "production" ? "none" : "lax",
        });
    }
    if (token.refreshToken) {
        res.cookie("refreshToken", token.refreshToken, {
            httpOnly: true,
            secure: env_1.env.NODE_ENV === "production",
            sameSite: env_1.env.NODE_ENV === "production" ? "none" : "lax",
        });
    }
};
exports.setAuthCookies = setAuthCookies;

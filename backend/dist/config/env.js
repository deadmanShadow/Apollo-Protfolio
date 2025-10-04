"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ quiet: true });
const loadEnvVars = () => {
    const requiredVars = [
        "PORT",
        "DATABASE_URL",
        "NODE_ENV",
        "SUPER_USER_NAME",
        "SUPER_USER_EMAIL",
        "SUPER_USER_PASSWORD",
        "HASH_SALT_ROUND",
        "JWT_SECRET",
        "JWT_ACCESS_TOKEN_EXPIRES",
        "JWT_REFRESH_TOKEN_EXPIRES",
        "CLOUDINARY_CLOUD_NAME",
        "CLOUDINARY_API_KEY",
        "CLOUDINARY_API_SECRET",
    ];
    requiredVars.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    });
    return Object.assign({}, ...requiredVars.map((key) => ({
        [key]: process.env[key],
    })));
};
exports.env = loadEnvVars();

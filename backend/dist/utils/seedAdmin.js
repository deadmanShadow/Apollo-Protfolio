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
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../config/db");
const env_1 = require("../config/env");
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Connecting to database...");
        yield db_1.prisma.$connect();
        console.log("Database connected successfully");
        const isExistAdmin = yield db_1.prisma.admin.findFirst({
            where: {
                role: client_1.UserRole.ADMIN,
            },
        });
        if (isExistAdmin) {
            console.log("Admin already exists");
            return;
        }
        console.log("Creating admin user...");
        const hashedPassword = yield bcryptjs_1.default.hash(env_1.envVars.ADMIN_PASSWORD, Number(env_1.envVars.BCRYPT_SALT_ROUND));
        const admin = yield db_1.prisma.admin.create({
            data: {
                name: "Abdullah Raihan Shamil",
                email: env_1.envVars.ADMIN_EMAIL,
                password: hashedPassword,
                role: client_1.UserRole.ADMIN,
            },
        });
        console.log("Admin created successfully:", {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
        });
    }
    catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
    finally {
        yield db_1.prisma.$disconnect();
    }
});
seedAdmin();

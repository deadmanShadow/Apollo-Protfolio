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
exports.seedAdmin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../config/db");
const env_1 = require("../config/env");
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield db_1.prisma.user.findUnique({
            where: { email: env_1.env.SUPER_USER_EMAIL },
        });
        if (user) {
            console.log("Super User already exists!");
            return;
        }
        console.log("Creating Admin.....");
        console.log(env_1.env.SUPER_USER_PASSWORD, env_1.env.HASH_SALT_ROUND);
        const hashedPassword = yield bcryptjs_1.default.hash(env_1.env.SUPER_USER_PASSWORD, Number(env_1.env.HASH_SALT_ROUND));
        const payload = {
            name: env_1.env.SUPER_USER_NAME,
            email: env_1.env.SUPER_USER_EMAIL,
            password: hashedPassword,
        };
        const superUser = yield db_1.prisma.user.create({ data: payload });
        console.log("Super User Created.... \n ");
        console.log(superUser);
    }
    catch (err) {
        console.log(err);
    }
});
exports.seedAdmin = seedAdmin;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const routes_1 = require("./app/routes");
const notFound_1 = __importDefault(require("./utils/notFound"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
// Default route for testing
app.get("/", (_req, res) => {
    res.send("API is running");
});
app.use("/api/v1", routes_1.router);
app.use(notFound_1.default);
// Global Error Handler
app.use(globalErrorHandler_1.default);
exports.default = app;

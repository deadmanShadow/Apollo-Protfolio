"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_route_1 = require("../modules/blog/blog.route");
const experience_route_1 = require("../modules/experience/experience.route");
const project_route_1 = require("../modules/project/project.route");
const user_route_1 = require("../modules/user/user.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    { path: "/user", route: user_route_1.userRoutes },
    { path: "/auth", route: auth_route_1.authRoutes },
    { path: "/blog", route: blog_route_1.blogRoutes },
    { path: "/experience", route: experience_route_1.experienceRoutes },
    { path: "/project", route: project_route_1.projectRoutes },
];
moduleRoutes.map((route) => {
    exports.router.use(route.path, route.route);
});

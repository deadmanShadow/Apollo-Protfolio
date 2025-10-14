"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const projects_route_1 = require("../modules/projects/projects.route");
const skill_route_1 = require("../modules/skill/skill.route");
const experience_route_1 = require("../modules/experience/experience.route");
const blog_route_1 = require("../modules/blogs/blog.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.authRoutes,
    },
    {
        path: "/projects",
        route: projects_route_1.ProjectRoutes,
    },
    {
        path: "/skills",
        route: skill_route_1.SkillRoutes,
    },
    {
        path: "/experiences",
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: "/blogs",
        route: blog_route_1.BlogRoutes,
    },
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});

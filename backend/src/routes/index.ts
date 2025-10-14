import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { blogRoutes } from "../modules/blog/blog.route";
import { experienceRoutes } from "../modules/experience/experience.route";
import { projectRoutes } from "../modules/project/project.route";
import { userRoutes } from "../modules/user/user.route";

export const router = Router();

const moduleRoutes = [
  { path: "/user", route: userRoutes },
  { path: "/auth", route: authRoutes },
  { path: "/blog", route: blogRoutes },
  { path: "/experience", route: experienceRoutes },
  { path: "/project", route: projectRoutes },
];

moduleRoutes.map((route) => {
  router.use(route.path, route.route);
});

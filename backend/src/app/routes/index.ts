import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blogs/blog.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { ProjectRoutes } from "../modules/projects/projects.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },

  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { BlogController } from "./blog.controller";
import { BlogCreateAPISchema, BlogUpdateAPISchema } from "./blog.validation";

const router = Router();

const blogController = new BlogController();

router.post(
  "/create",
  checkAuth,
  validateRequest(BlogCreateAPISchema),
  blogController.createBlog
);

router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getSingleBlog);

router.patch(
  "/:id",
  checkAuth,
  validateRequest(BlogUpdateAPISchema),
  blogController.updateBlog
);
router.delete("/:id", checkAuth, blogController.deleteBlog);

export const blogRoutes = router;

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const blogService = new BlogService();

export class BlogController {
  getAllBlogs = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const query = req.query;
      const result = await blogService.getAllBlogs(
        query as Record<string, string>
      );

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "All blogs retrieved Successfully!",
        meta: result.meta,
        data: result.data,
      });
    }
  );

  getSingleBlog = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const blogId = req.params?.id;

      const result = await blogService.getSingleBlog(Number(blogId));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Blog retrieved Successfully!",
        data: result,
      });
    }
  );

  //create blog
  createBlog = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const decodedToken = req.user;

      const result = await blogService.createBlog(decodedToken.id, req.body);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "Blog created Successfully!",
        data: result,
      });
    }
  );

  //update blog
  updateBlog = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const result = await blogService.updateBlog(Number(id), req.body);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Blog updated Successfully!",
        data: result,
      });
    }
  );

  //delete blog
  deleteBlog = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const result = await blogService.deleteBlog(Number(id));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Blog deleted Successfully!",
        data: result,
      });
    }
  );
}

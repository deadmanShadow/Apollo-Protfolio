import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const projectService = new ProjectService();

export class ProjectController {
  //all project
  getAllProjects = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const result = await projectService.getAllProjects();

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "All projects retrieved Successfully!",
        meta: result.meta,
        data: result.data,
      });
    }
  );

  //single project
  getSingleProject = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const result = await projectService.getSinglelProject(Number(id));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Project retrieved Successfully!",

        data: result,
      });
    }
  );

  //create
  create = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const decodedToken = req.user;

      const payload = {
        ...req.body,
        thumbnail: req.file?.path,
      };

      const result = await projectService.create(decodedToken.id, payload);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "Project Created Successfully!",
        data: result,
      });
    }
  );

  //update
  updateProject = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const payload = {
        ...req.body,
        thumbnail: req.file?.path,
      };
      const result = await projectService.updateProject(Number(id), payload);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Project Updated Successfully!",
        data: result,
      });
    }
  );

  //delete
  deleteProject = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const result = await projectService.deleteProject(Number(id));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Project Deleted Successfully!",
        data: result,
      });
    }
  );
}

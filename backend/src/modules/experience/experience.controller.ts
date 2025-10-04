import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ExperienceService } from "./experience.service";

const experienceService = new ExperienceService();

export class ExperienceController {
  //create experience
  create = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const decodedToken = req.user;

      const result = await experienceService.create(decodedToken.id, req.body);
      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "Experience Created Successfully!",

        data: result,
      });
    }
  );

  //get single experience
  getSingleExperience = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const result = await experienceService.getSingleExperience(Number(id));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Experience retrieved Successfully!",
        data: result,
      });
    }
  );

  //update experience
  updateExperience = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const result = await experienceService.updateExperience(
        Number(id),
        req.body
      );

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Experience updated Successfully!",

        data: result,
      });
    }
  );

  //update experience
  deleteExperience = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const result = await experienceService.deleteExperience(Number(id));

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Experience deleted Successfully!",
        data: result,
      });
    }
  );
}

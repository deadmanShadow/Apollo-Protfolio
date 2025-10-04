import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { env } from "../../config/env";
import AppError from "../../helpers/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { setAuthCookies } from "../../utils/setCookies";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class AuthController {
  login = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const loginInfo = await authService.login(req.body);

      setAuthCookies(res, loginInfo);

      return sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Login successful!",
        data: loginInfo,
      });
    }
  );

  logout = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: env.NODE_ENV === "production" ? "none" : "lax",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: env.NODE_ENV === "production",
        sameSite: env.NODE_ENV === "production" ? "none" : "lax",
      });

      sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Logout successful",
        data: null,
      });
    }
  );

  getNewAccessToken = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) {
        throw new AppError(
          StatusCodes.BAD_REQUEST,
          "No refresh token recieved from cookies"
        );
      }

      const accessToken = await authService.getNewAccessToken(refreshToken);

      sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "New Access Token Retrived successfully",
        data: accessToken,
      });
    }
  );

  validateUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "User validation successful",
        data: req.user,
      });
    }
  );
}

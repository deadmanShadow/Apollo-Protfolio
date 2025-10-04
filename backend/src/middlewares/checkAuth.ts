import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { env } from "../config/env";
import AppError from "../helpers/AppError";
import { verifyToken } from "../utils/jwtToken";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies?.accessToken || req.headers?.authorization;
    if (!accessToken)
      throw new AppError(StatusCodes.UNAUTHORIZED, "No token recieved");

    const verifiedToken = verifyToken(
      accessToken,
      env.JWT_SECRET
    ) as JwtPayload;

    req.user = verifiedToken;

    next();
  } catch (err) {
    next(err);
  }
};

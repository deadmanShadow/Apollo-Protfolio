import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequest = (zodSchema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = req.body?.data ? JSON.parse(req.body?.data) : req.body;
      req.body = await zodSchema.parseAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
};

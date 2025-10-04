import { NextFunction, Request, Response } from "express";

interface AsyncHander {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export const catchAsync = (fn: AsyncHander) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

import { Request, Response, NextFunction } from "express";
import { CategorySchema } from "../model";
import sendStatus from "./../utils/response";
export const postCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategorySchema.create(req.body);

    sendStatus(res, 201, category);
  } catch (err) {
    next(err);
  }
};

export const getAllCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategorySchema.find();
    sendStatus(res, 200, category);
  } catch (err) {
    next(err);
  }
};

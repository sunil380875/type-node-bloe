import { Request, Response, NextFunction } from "express";
import { CategorySchema } from "../model";
import sendStatus from "./../utils/response";
import { NotFound } from "http-errors";
export const postCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategorySchema.create(req.body);
    if (!category) throw new NotFound("Data is not found");

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
    if (!category) throw new NotFound("Data is not found");
    sendStatus(res, 200, category);
  } catch (err) {
    next(err);
  }
};
export const updateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategorySchema.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!category) throw new NotFound("Data is not updated");
    sendStatus(res, 200, category);
  } catch (err) {
    next(err);
  }
};
export const deleteCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await CategorySchema.findByIdAndDelete(req.params.id);
    if (!category) throw new NotFound("Data is not deleted");
    sendStatus(res, 200, category);
  } catch (err) {
    next(err);
  }
};

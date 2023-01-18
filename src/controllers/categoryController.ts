import { Request, Response, NextFunction, Errback } from "express";
import { CategoryName } from "../model/categoryModel";
import sendStatus from "./../utils/responce";

export const postCategoryName = async (req: Request, res: Response) => {
  try {
    const category = await CategoryName.create(req.body);

    sendStatus(res, 201, category);
  } catch (err: any) {
    console.log(err.message);
  }
};

export const getAllCategoryname = async (req: Request, res: Response) => {
  try {
    const category = await CategoryName.find();
    sendStatus(res, 200, category);
  } catch (err: any) {
    console.log(err.message);
  }
};

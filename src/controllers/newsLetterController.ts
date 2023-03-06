import { NextFunction, Request, Response } from "express";
import { NewsLetterSubscribeSchema } from "../model";
import sendResponse from "../utils/response";
import { NotFound } from "http-errors";

export const subscribeNewsLetter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subscribeLetter = await NewsLetterSubscribeSchema.create(req.body);
    if (!subscribeLetter) throw new NotFound("Data is not found");
    sendResponse(res, subscribeLetter, "Successfully create a data");
  } catch (err) {
    next(err);
  }
};
export const subscribeNewsLetterGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subscribeLetter = await NewsLetterSubscribeSchema.find();
    if (!subscribeLetter) throw new NotFound("Data is not found");
    sendResponse(res, subscribeLetter, "Successfully get all data");
  } catch (err) {
    next(err);
  }
};
export const subscribeNewsLetterUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subscribeLetter = await NewsLetterSubscribeSchema.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!subscribeLetter) throw new NotFound("Data is not found");
    sendResponse(res, subscribeLetter, "Successfully update a data");
  } catch (err) {
    next(err);
  }
};
export const subscribeNewsLetterDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subscribeLetter = await NewsLetterSubscribeSchema.findByIdAndDelete(
      req.params.id
    );
    if (!subscribeLetter) throw new NotFound("Data is not found");
    sendResponse(res, subscribeLetter, "Successfully delete a data");
  } catch (err) {
    next(err);
  }
};

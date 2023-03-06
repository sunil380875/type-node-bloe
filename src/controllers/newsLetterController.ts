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
    sendResponse(res, 201, subscribeLetter);
  } catch (err) {
    next(err);
  }
};

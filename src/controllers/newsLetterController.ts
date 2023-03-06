import { NextFunction, Request, Response } from "express";
import { NewsLetterSubscribeSchema } from "../model";
import sendResponse from "../utils/response";

export const subscribeNewsLetter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const subscribeLetter = await NewsLetterSubscribeSchema.create(req.body);
    sendResponse(res, 201, subscribeLetter);
  } catch (err) {
    next(err);
  }
};

import { Request, Response } from "express";
import { NewsLetterSubscribe } from "../model/subscribenewsletter";
import sendResponse from "../utils/responce";

export const subscribeNewsLetter = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const subscribeLetter = await NewsLetterSubscribe.create(req.body);
    sendResponse(res, 201, subscribeLetter);
  } catch (err) {
    console.log(err);
  }
};

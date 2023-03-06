import express, { Request, Response } from "express";
import SendResponse from "../utils/response";

import { CommentSchema } from "../model";
export const getAllComment = async (req: Request, res: Response) => {
  try {
    const comment = await CommentSchema.find();
    SendResponse(res, 200, comment);
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (req: Request, res: Response) => {
  try {
    const comments = await CommentSchema.create(req.body);
    SendResponse(res, 201, comments);
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    await CommentSchema.findByIdAndDelete(req.params.id);
    SendResponse(res, 204, "");
  } catch (err) {
    console.log(err);
  }
};

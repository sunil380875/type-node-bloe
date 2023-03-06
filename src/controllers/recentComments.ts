import { NextFunction, Request, Response } from "express";
import SendResponse from "../utils/response";
import { NotFound } from "http-errors";

import { CommentSchema } from "../model";
export const getAllComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comment = await CommentSchema.find();
    if (!comment) throw new NotFound("No comment found");
    SendResponse(res, comment, "Successfully get data");
  } catch (err) {
    next(err);
  }
};

export const postComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const comments = await CommentSchema.create(req.body);
    if (!comments) throw new NotFound("No comments found");
    SendResponse(res, comments, "Successfully create a comments");
  } catch (err) {
    next(err);
  }
};
export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateComments = await CommentSchema.findByIdAndDelete(req.params.id);
    SendResponse(res, updateComments, "Successfully update a Comment");
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CommentSchema.findByIdAndDelete(req.params.id);
    SendResponse(res, "", "Successfully delete a Comment");
  } catch (err) {
    next(err);
  }
};

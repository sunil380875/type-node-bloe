import express, { Request, Response } from "express";
import SendResponse from "./../utils/responce";

import { Comment } from "../model/recentCommentsModel";
export const getAllComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.find();
    SendResponse(res, 200, comment);
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.create(req.body);
    SendResponse(res, 201, comments);
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    SendResponse(res, 204, "");
  } catch (err) {
    console.log(err);
  }
};

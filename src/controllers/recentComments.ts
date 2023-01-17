import express, { Request, Response } from "express";
import SendResponse from "./../utils/responce";

import { Comment } from "../model/recentCommentsModel";
export const getAllComment = (req: Request, res: Response) => {};

export const postComment = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.create(req.body);
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = () => {};

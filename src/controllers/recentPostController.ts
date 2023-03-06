import { RecentPostSchema } from "../model";
import { NextFunction, Request, Response } from "express";
import sendStatus from "../utils/response";

export const recentPostContent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, author, date, photo, content } = req.body;
    const posts = await RecentPostSchema.create({
      title,
      author,
      date,
      photo,
      content,
    });
    sendStatus(res, 201, posts);
  } catch (err) {
    next(err);
  }
};

export const getRecentPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recentPost = await RecentPostSchema.find();

    sendStatus(res, 200, recentPost);
  } catch (err) {
    next(err);
  }
};
export const editPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recentPosts = await RecentPostSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    sendStatus(res, 200, recentPosts);
  } catch (err) {
    next(err);
  }
};

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await RecentPostSchema.findByIdAndDelete(req.params.id);
    sendStatus(res, 204, "");
  } catch (err) {
    next(err);
  }
};

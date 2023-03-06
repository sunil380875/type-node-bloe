import { RecentPostSchema } from "../model";
import { NextFunction, Request, Response } from "express";
import sendStatus from "../utils/response";
import { NotFound } from "http-errors";

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
    if (!posts) throw new NotFound("Post is not created");
    sendStatus(res, posts, "Successfully created a posts");
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
    if (!recentPost) throw new NotFound("Post is not Found");

    sendStatus(res, recentPost, "Successfully get a posts");
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
    if (!recentPosts) throw new NotFound("Posts is not updated");
    sendStatus(res, recentPosts, "Successfully edit the posts");
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
    const deletePosts = await RecentPostSchema.findByIdAndDelete(req.params.id);

    if (!deletePost) throw new NotFound("Posts is not deleted");
    sendStatus(res, deletePosts, "Successfully delete the posts");
  } catch (err) {
    next(err);
  }
};

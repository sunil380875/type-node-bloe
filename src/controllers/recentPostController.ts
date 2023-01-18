import { RecentPost } from "../model/recentPostsModel";
import { Request, Response } from "express";
import sendStatus from "../utils/responce";

export const recentPostContent = async (req: Request, res: Response) => {
  try {
    const { title, auther, date, photo, content } = req.body;
    const posts = await RecentPost.create({
      title,
      auther,
      date,
      photo,
      content,
    });
    sendStatus(res, 201, posts);
  } catch (err) {
    console.log(err);
  }
};

export const getRecentPost = async (req: Request, res: Response) => {
  try {
    const recentPost = await RecentPost.find();

    sendStatus(res, 200, recentPost);
  } catch (err) {
    console.log(err);
  }
};
export const editPost = async (req: Request, res: Response) => {
  try {
    const recentPosts = await RecentPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    sendStatus(res, 200, recentPosts);
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await RecentPost.findByIdAndDelete(req.params.id);
    sendStatus(res, 204, "");
  } catch (err) {
    console.log(err);
  }
};

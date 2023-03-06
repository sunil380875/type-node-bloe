import { Request, Response, NextFunction } from "express";
import { BlogSchema } from "../model";

import sendStatus from "../utils/response";

export const getAllBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let query = BlogSchema.find().populate("category");
    //pagination
    let page: number;
    let limit: number;
    page = Number(req.query.page) || 1;
    limit = Number(req.query.limit) || 100;

    const skips = (page - 1) * limit;
    query = query.skip(skips).limit(limit);
    const blog = await query;
    sendStatus(res, 200, blog);
  } catch (err) {
    next(err);
  }
};

export const getaBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogSchema.findById(req.params.id);

    sendStatus(res, 200, blog);
  } catch (err) {
    next(err);
  }
};

export const postBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const text = { ...req.file };
    const photo = text.filename;
    const file = { ...req.body, photo };
    // console.log(file);
    const blog = await BlogSchema.create(file);
    //console.log(blog);
    sendStatus(res, 201, blog);
  } catch (err) {
    next(err);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BlogSchema.findByIdAndDelete(req.params.id);

    sendStatus(res, 204, "");
  } catch (err) {
    next(err);
  }
};
export const updateBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });

    sendStatus(res, 200, blog);
  } catch (err) {
    next(err);
  }
};

export const updateBlogPhoto = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogSchema.findByIdAndUpdate(req.params.id, req.file, {
      new: true,
    });

    sendStatus(res, 200, blog);
  } catch (err) {
    next(err);
  }
};

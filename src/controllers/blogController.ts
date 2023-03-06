import { Request, Response, NextFunction } from "express";
import { BlogSchema } from "../model";

import sendStatus from "../utils/response";
import MediaStoreService from "../utils/storage-services";
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
    sendStatus(res, blog, "Successfully get the data");
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

    sendStatus(res, blog, "Successfully get the data");
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
    const avatarRawData = req?.files?.photo
      ? ((await new MediaStoreService().upload({
          file: req?.files?.photo,
          dir: "User",
        })) as {
          key: string;
          Location: string;
        })
      : undefined;

    const blog = await BlogSchema.create({
      ...req.body,
      photo: avatarRawData?.key,
      photoPath: avatarRawData?.Location,
    });
    sendStatus(res, blog, "Successfully create a blog");
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

    sendStatus(res, blog, "Successfully update a blog");
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

    sendStatus(res, " ", "Successfully delete a blog");
  } catch (err) {
    next(err);
  }
};

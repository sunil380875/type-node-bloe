import { Request, Response, NextFunction, Errback } from "express";
import { Query, QuerySelector } from "mongoose";
import Blog from "./../model/blodModel";
import sendStatus from "./../utils/responce";
export const getAllBlog = async (req: Request, res: Response) => {
  try {
    ////filter
    const queryObj = { ...req.query };
    const excludeField = ["limit"];
    excludeField.forEach((el) => delete queryObj[el]);
    let query = Blog.find(queryObj);

    //pagination
    let page: number;
    let limit: number;
    page = Number(req.query.page) || 1;
    limit = Number(req.query.limit) || 100;

    const skips = (page - 1) * limit;
    query = query.skip(skips).limit(limit);
    const blog = await query;

    sendStatus(res, 200, blog);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getaBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);

    sendStatus(res, 200, blog);
  } catch (err) {
    console.log(err);
  }
};

export const postBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await Blog.create(req.body);
    sendStatus(res, 201, blog);
  } catch (err: any) {
    console.log(err.message);
    next();
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    sendStatus(res, 204, "");
  } catch (error) {
    console.log(error);
  }
};
export const updateBlogs = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true,
    });

    sendStatus(res, 200, blog);
  } catch (error) {
    console.log(error);
  }
};

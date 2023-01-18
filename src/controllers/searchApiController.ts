import Blog from "./../model/blogModel";
import sendResponce from "./../utils/responce";
import { Request, Response } from "express";

export const searchApi = async (req: Request, res: Response) => {
  const searchResult = await Blog.find({
    $or: [
      { createdBy: { $regex: req.params.key, $options: "i" } },

      { shortDescription: { $regex: req.params.key, $options: "i" } },
      { photo: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.status(200).json({
    data: {
      searchResult,
    },
  });
};

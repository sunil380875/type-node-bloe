import { BlogSchema } from "../model";
import { Request, Response } from "express";
import { NotFound } from "http-errors";

export const searchApi = async (req: Request, res: Response) => {
  const searchResult = await BlogSchema.find({
    $or: [
      { createdBy: { $regex: req.params.key, $options: "i" } },

      { shortDescription: { $regex: req.params.key, $options: "i" } },
      { photo: { $regex: req.params.key, $options: "i" } },
    ],
  });
  if (!searchResult) throw new NotFound("No result found");
  res.status(200).json({
    data: {
      success: {
        message: "Success",
        data: searchResult,
      },
    },
  });
};

import mongoose, { Schema } from "mongoose";
import { Model, model } from "mongoose";
import BlogType from "../types/blogs";

const blogSchema = new Schema(
  {
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "CategoryName",
      },
    ],
    createdBy: {
      type: String,
      required: true,
      default: "Admin",
    },
    shortDescription: {
      type: String,
    },
    inPhotoTitle: {
      type: String,
    },
    photo: {
      type: String,
    },
    Description: String,
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export = Blog;

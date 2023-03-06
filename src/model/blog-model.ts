import { Schema } from "mongoose";
import { Model, model } from "mongoose";
import { BLOG_TYPE } from "../types";

const blogSchema = new Schema<BLOG_TYPE, Model<BLOG_TYPE>>(
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

const BlogSchema = model<BLOG_TYPE, Model<BLOG_TYPE>>("Blog", blogSchema);

export default BlogSchema;

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
    ceatedAt: {
      type: Date,
      default: Date.now(),
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
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export = Blog;

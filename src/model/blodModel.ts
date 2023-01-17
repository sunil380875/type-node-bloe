import mongoose, { Schema } from "mongoose";
import { Model, model } from "mongoose";
import BlogType from "./../types/blogs";
const blogSchema = new Schema<BlogType, Model<BlogType>>({
  category: {
    type: String,
    required: true,
  },
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
});

const Blog = mongoose.model("Blog", blogSchema);

export = Blog;

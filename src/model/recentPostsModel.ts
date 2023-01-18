import { Model, Schema, model } from "mongoose";
import recentPosts from "../types/recentPost";

const recentPostsSchema = new Schema<recentPosts, Model<recentPosts>>(
  {
    title: {
      type: String,
      required: true,
    },
    auther: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    photo: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const RecentPost = model("RecentPost", recentPostsSchema);

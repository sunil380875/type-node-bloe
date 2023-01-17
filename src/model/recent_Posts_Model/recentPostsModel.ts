import { Model, Schema, model } from "mongoose";
import recentPosts from "../../types/recent_posts/recentPost";

const recentPostsSchema = new Schema<recentPosts, Model<recentPosts>>({
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
});

export const RecentPost = model("RecentPost", recentPostsSchema);

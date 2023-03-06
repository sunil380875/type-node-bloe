import { Model, Schema, model } from "mongoose";
import { RECENT_POSTS_TYPE } from "../types";

const recentPostsSchema = new Schema<
  RECENT_POSTS_TYPE,
  Model<RECENT_POSTS_TYPE>
>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
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
const RecentPostSchema = model<RECENT_POSTS_TYPE, Model<RECENT_POSTS_TYPE>>(
  "RecentPost",
  recentPostsSchema
);

export default RecentPostSchema;

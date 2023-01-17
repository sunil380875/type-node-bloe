import { Model, model, Schema } from "mongoose";
import RecentComments from "./../types/recentComments";

const commentSchema = new Schema<RecentComments, Model<RecentComments>>({
  comments: String,
});

export const Comment = model("Comment", commentSchema);

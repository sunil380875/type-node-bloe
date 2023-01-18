import { Model, model, Schema } from "mongoose";
import RecentComments from "./../types/recentComments";
import validators from "validator";
import { url } from "inspector";

const commentSchema = new Schema<RecentComments, Model<RecentComments>>({
  comments: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: validators.isEmail,
    required: true,
  },
  websites: String,
});

export const Comment = model("Comment", commentSchema);

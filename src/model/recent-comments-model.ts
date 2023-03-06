import { Model, model, Schema } from "mongoose";
import { RECENT_COMMENTS_TYPE } from "../types";
import validators from "validator";

const commentSchema = new Schema<
  RECENT_COMMENTS_TYPE,
  Model<RECENT_COMMENTS_TYPE>
>(
  {
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
  },
  {
    timestamps: true,
  }
);

const CommentSchema = model<RECENT_COMMENTS_TYPE, Model<RECENT_COMMENTS_TYPE>>(
  "Comment",
  commentSchema
);
export default CommentSchema;

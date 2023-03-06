import { Model, model, Schema } from "mongoose";
import validators from "validator";
import { NEWS_LETTER_TYPE } from "../types";

const newsLetterSchema = new Schema<NEWS_LETTER_TYPE, Model<NEWS_LETTER_TYPE>>(
  {
    email: {
      type: String,
      validate: validators.isEmail,
    },
  },
  {
    timestamps: true,
  }
);

const NewsLetterSubscribeSchema = model<
  NEWS_LETTER_TYPE,
  Model<NEWS_LETTER_TYPE>
>("NewsLetterSubscribe", newsLetterSchema);
export default NewsLetterSubscribeSchema;

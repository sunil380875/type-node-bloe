import { Model, model, Schema } from "mongoose";
import validators from "validator";
import subscribeNewsLetter from "./../types/subscribenewsletter";

const newsLetterSchema = new Schema<
  subscribeNewsLetter,
  Model<subscribeNewsLetter>
>({
  email: {
    type: String,
    validate: validators.isEmail,
  },
});

export const NewsLetterSubscribe = model(
  "NewsLetterSubscribe",
  newsLetterSchema
);

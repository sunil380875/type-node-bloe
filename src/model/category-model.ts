import { Schema, model, Model } from "mongoose";
import { CATEGORY_TYPE } from "../types";

const categorySchema = new Schema<CATEGORY_TYPE, Model<CATEGORY_TYPE>>(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CategorySchema = model("CategoryName", categorySchema);

export default CategorySchema;

import mongoose, { Schema, model, Model } from "mongoose";
import CategoryType from "././../types/categoryModelType";

const categorySchema = new Schema<CategoryType, Model<CategoryType>>({
  name: String,
});

export const CategoryName = model("CategoryName", categorySchema);

import { Document, Schema } from "mongoose";
import CATEGORY_TYPE from "../types";
interface BLOG_TYPE extends Document {
  category: CATEGORY_TYPE;
  createdBy: string;
  createdAt: Date;
  shortDescription: string;
  inPhotoTitle: string;
  photo: string;
  photoPath: string;
  Description: string;
}

export default BLOG_TYPE;

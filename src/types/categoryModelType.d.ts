import { Document } from "mongoose";

interface categoryType extends Document {
  name: string;
}

export default categoryType;

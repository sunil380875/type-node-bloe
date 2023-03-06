import { Document } from "mongoose";

interface NEWS_LETTER_TYPE extends Document {
  email: string;
}

export default NEWS_LETTER_TYPE;

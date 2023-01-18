import { Document } from "mongoose";

interface newsLetter extends Document {
  email: {
    type: string;
  };
}

export default newsLetter;

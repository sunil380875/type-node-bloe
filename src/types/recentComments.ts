import { Document } from "mongoose";

interface RecentComments extends Document {
  comments: string;
}

export default RecentComments;

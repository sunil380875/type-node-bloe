import { Document } from "mongoose";
import { Url } from "url";

interface RecentComments extends Document {
  comments: string;
  name: string;
  email: string;
  websites: string;
}

export default RecentComments;

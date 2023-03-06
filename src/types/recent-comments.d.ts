import { Document } from "mongoose";
import { Url } from "url";

interface RECENT_COMMENTS_TYPE extends Document {
  comments: string;
  name: string;
  email: string;
  websites: string;
}

export default RECENT_COMMENTS_TYPE;

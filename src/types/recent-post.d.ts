import { Document } from "mongoose";

interface RECENT_POSTS extends document {
  title: string;
  author: string;
  date: Date;
  photo: string;
  content: string;
}

export default RECENT_POSTS;

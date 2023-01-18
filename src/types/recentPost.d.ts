import { Document } from "mongoose";

interface RecentPosts extends document {
  title: string;
  auther: string;
  date: Date;
  photo: string;
  content: string;
}

export = RecentPosts;

import express from "express";
import {
  recentPostContent,
  getRecentPost,
  editPost,
  deletePost,
} from "../controllers/recent_posts/recentPostController";
const router = express.Router();

router
  .get("/getrecentpost", getRecentPost)
  .post("/recentpost", recentPostContent);

router
  .patch("/updateposts/:id", editPost)
  .delete("/deleteposts/:id", deletePost);

export default router;

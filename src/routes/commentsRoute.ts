import express from "express";
import {
  getAllComment,
  postComment,
  deleteComment,
} from "../controllers/recentComments";

const router = express.Router();

router.get("/getallcomment", getAllComment);
router.post("/postcomment", postComment);
router.delete("/deletecomment/:id", deleteComment);

export default router;

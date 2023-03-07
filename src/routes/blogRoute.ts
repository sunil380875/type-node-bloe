import express, { Router } from "express";
import {
  getAllBlog,
  postBlog,
  updateBlogs,
  deleteBlog,
  getaBlog,
} from "../controllers/blogController";

const router: Router = express.Router();

router.get("/getallblog", getAllBlog);
router.post("/postablog", postBlog);

router.get("getablog/:id", getaBlog);

router.put("/updateblog/:id", updateBlogs);
router.delete("/deleteblog/:id", deleteBlog);
//router.patch("/updateblogphoto/:id", updateBlogPhoto);
export = router;

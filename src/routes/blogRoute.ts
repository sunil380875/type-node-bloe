import express, { Router } from "express";
import {
  getAllBlog,
  postBlog,
  updateBlogs,
  deleteBlog,
  getaBlog,
  updateBlogPhoto,
} from "../controllers/blogController";
import upload from "../utils/multerStorage";

const router: Router = express.Router();

router
  .get("/getallblog", getAllBlog)
  .post("/postablog", upload.single("photo"), postBlog);

router.get("getablog/:id", getaBlog);

router
  .patch("/updateblog/:id", updateBlogs)
  .delete("/deleteblog/:id", deleteBlog);
router.patch("/updateblogphoto/:id", upload.single("photo"), updateBlogPhoto);
export = router;

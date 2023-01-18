import express from "express";
import {
  postCategoryName,
  getAllCategoryname,
} from "../controllers/categoryController";
const router = express.Router();

router.post("/", postCategoryName).get("/", getAllCategoryname);

export default router;

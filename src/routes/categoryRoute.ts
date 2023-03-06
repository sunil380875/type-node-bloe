import express from "express";
import {
  postCategoryController,
  getAllCategoryController,
} from "../controllers/categoryController";
const router = express.Router();

router.post("/", postCategoryController);
router.get("/", getAllCategoryController);

export default router;

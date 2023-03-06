import express from "express";
import {
  postCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController";
const router = express.Router();

router.post("/category/created", postCategoryController);
router.get("/category/get", getAllCategoryController);
router.put("/category/update/:id", updateCategoryController);
router.delete("/category/delete/:id", deleteCategoryController);

export default router;

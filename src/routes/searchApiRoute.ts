import express from "express";
import { searchApi } from "../controllers/searchApiController";
const router = express.Router();

router.get("/search/:key", searchApi);

export default router;

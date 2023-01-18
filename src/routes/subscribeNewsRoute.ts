import express from "express";
import { subscribeNewsLetter } from "../controllers/newsLetterController";
const router = express.Router();

router.post("/subscribeletter", subscribeNewsLetter);

export default router;

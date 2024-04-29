import express from "express";
import {
  getMovieController,
  getMovieTimingsController,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/:id", getMovieController);
router.get("/timings/:id", getMovieTimingsController);

export default router;

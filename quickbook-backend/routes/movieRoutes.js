import express from "express";
import {
  getMovieController,
  getMovieTimingsController,
  searchMovieController,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/timings/:id", getMovieTimingsController);
router.get("/search", searchMovieController);
router.get("/:id", getMovieController);
export default router;

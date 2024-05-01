import express from "express";
import {
  getVenueSeatsController,
  bookSeatsController,
} from "../controllers/venueController.js";

const router = express.Router();

router.get("/:id", getVenueSeatsController);
router.put("/book-seats", bookSeatsController);
export default router;

import express from "express";
import {
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getCombinedTour,
} from "../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/createTour", createTour);

// get tour
router.get('/getTour', getTour)

// update tour
router.put("/updateTour/:id", updateTour);

// delete tour
router.delete("/deleteTour/:id", deleteTour);

// create single tour
router.post("/getSingleTour/:id", getSingleTour);

// create combination tour
router.post("/getCombinedTour/:id", getCombinedTour);

export default router;

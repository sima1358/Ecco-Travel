import express from "express";
import {
  createTour,
  getListOfTours,
  updateTour,
  deleteTour,
  getSingleTour
} from "../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/createTour", createTour);

// get tour
router.get('/getListOfTours', getListOfTours)

// update tour
router.put("/updateTour/:id", updateTour);

// delete tour
router.delete("/deleteTour/:id", deleteTour);

// create single tour
router.get("/getSingleTour/:id", getSingleTour);



export default router;

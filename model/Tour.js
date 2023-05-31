import { Schema, model } from "mongoose";

const tourSchema = new Schema({
  originCity: { type: String, required: true },
  destinationCity: { type: String, required: true },
  departureDate: { type: Date, default: Date },
  arrivalDate: { type: Date, default: Date },
  passengers: { type: Number, required: true },
  budget: { type: Number, required: true },
});

const Tour = model("tour", tourSchema);

export default Tour;

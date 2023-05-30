import Tour from "../model/Tour.js";
import { StatusCodes } from "http-status-codes";

// create new tour
/**
 *
 */
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    return res
      .status(StatusCodes.OK)
      .json({ message: "Successfully Created", data: savedTour });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Failed to create; Try again" });
  }
};


// get tour
/**
 *
 */
export const getTour = async (req, res) => {
      
    try {
      const tour = await Tour.find();
  
      return res
        .status(StatusCodes.OK)
        .json({ message: "Successfully find", tour });
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Failed to find the tour; Try again" });
    }
  };

// update
/**
 *
 * @param {*} req
 * @param {*} res
 */

// $set" is a commonly used operator in database systems, particularly in document-oriented databases like MongoDB. It specifies that the fields/values provided in the following object should be set or updated in the target object or document.

// "req.body" refers to the data contained in the HTTP request body. When a client makes a request to an API or web server, they can include data in the request body. The "req.body" property is commonly used in server-side frameworks to access this data.

//In this case we ask to find all products that have a matching _id inside the array.
export const updateTour = async (req, res) => {

  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
        // is an update object specifying that the fields and values contained in the req.body object should be set or updated in the document. req.body refers to the data sent in the request body, usually in JSON format.
      },
      { new: true }
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: "Successfully Updated", data: updateTour });
  } catch (error) {
    res
      .status(StatusCodes.EXPECTATION_FAILED)
      .json({ message: "it is not possible to update tour" });
  }
};

// delete
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const deleteTour = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(StatusCodes.EXPECTATION_FAILED)
      .json({ message: "Delete failed" });
  }
};

// get single tour
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getSingleTour = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json({ message: "it is not possible to get single tour" });
  }
};

// get combined tour
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getCombinedTour = async (req, res) => {
  try {
  } catch (error) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "it is not possible to get combined tour" });
  }
};

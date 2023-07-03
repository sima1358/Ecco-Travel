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
export const getListOfTours = async (req, res) => {
      // for pagination
      const page = parseInt(req.query.page);

    try {
      const tours = await Tour.find({}).skip(page*10).limit(10);
  
      return res
        .status(StatusCodes.OK)
        .json({success: true, count: tours.length, message: "Successfully find", data:tours });
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Tours not found; Try again" });
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
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
        // is an update object specifying that the fields and values contained in the req.body object should be set or updated in the document. req.body refers to the data sent in the request body, usually in JSON format.
      },
      { new: true }
    //   is an option passed to the findByIdAndUpdate() method, indicating that the updated document should be returned as a result of the operation. By default, the method would return the document as it was before the update.
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: "Successfully Updated", data: updatedTour });
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
    const id = req.params.id;
    try {
      const deletedTour = await Tour.findByIdAndDelete(id);

        return res
        .status(StatusCodes.OK)
        .json({ message: "Successfully Deleted", data: deletedTour });
    }   
  catch (error) {
    res
      .status(StatusCodes.EXPECTATION_FAILED)
      .json({ message: "Delete failed" });
  }
 }

// get single tour
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
      const tour = await Tour.findById(id);

        return res
        .status(StatusCodes.OK)
        .json({ message: "Successfully find", data: tour });
    }   
  catch (error) {
    res
      .status(StatusCodes.SERVICE_UNAVAILABLE)
      .json({ message: "it is not possible to get single tour" });
  }
};



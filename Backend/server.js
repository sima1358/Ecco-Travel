import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import {configureJwtStrategy} from './passport-config.js'

// routes
import tourRoute from './routes/tourRoute.js'
//import  userRoute  from './routes/userRoute.js'

//loads .env file contents into process.env (environment variables)
dotenv.config();

const app = express();

 
// configureJwtStrategy(passport)

// middleware
//allows us to parse json information from http body to req.body 
app.use(express.json());
app.use(cors());
// middleware to parse cookies and add those cookies to req.cookies
app.use(cookieParser());

// register routes
app.use('/tour', tourRoute);
//app.use('/user', userRoute);

//connecting to the database
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });


  //listening for requests on port 3001
app.listen(7000, () => {
    console.log("Server is listening for HTTP requests on port 7000");
})
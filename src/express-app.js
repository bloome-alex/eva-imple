require('dotenv').config();
import express from 'express';

import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";

export const expressApp = express();

//Middlewares
expressApp.use(express.json())
expressApp.use(express.static('web'))

//Routes
// expressApp.use(mediaRoute)
// expressApp.use(statusRoute)

//Error handler Middleware
expressApp.use(ErrorHandlerMiddleware);

export default expressApp

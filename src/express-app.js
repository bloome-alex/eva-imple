require('dotenv').config();

import express from 'express';
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware";

import defaultRoute from "./routes/DefaultRoute"
import statusRoute from "./routes/StatusRoute";

export const expressApp = express();

//Middlewares
expressApp.use(express.json())

//Routes
expressApp.use(statusRoute)

//Error handler Middleware
expressApp.use(ErrorHandlerMiddleware);

export default expressApp

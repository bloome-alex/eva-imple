"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressApp = exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _ErrorHandlerMiddleware = _interopRequireDefault(require("./middlewares/ErrorHandlerMiddleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
const expressApp = (0, _express.default)();

//Middlewares
exports.expressApp = expressApp;
expressApp.use(_express.default.json());
expressApp.use(_express.default.static('web'));

//Routes
// expressApp.use(mediaRoute)
// expressApp.use(statusRoute)

//Error handler Middleware
expressApp.use(_ErrorHandlerMiddleware.default);
var _default = expressApp;
exports.default = _default;
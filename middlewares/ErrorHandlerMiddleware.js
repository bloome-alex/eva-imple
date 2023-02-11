"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorHandlerMiddleware = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ErrorHandlerMiddleware = (err, req, res, next) => {
  const status = err.status && validateStatusCode(err.status) ? err.status : 500;
  res.status(status);
  res.send(err.message);
};
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
function validateStatusCode(statusCode) {
  return _http.default.STATUS_CODES.hasOwnProperty(statusCode);
}
var _default = ErrorHandlerMiddleware;
exports.default = _default;
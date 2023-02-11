"use strict";

var _expressApp = _interopRequireDefault(require("./express-app"));
var _apolloServer = _interopRequireDefault(require("./apollo-server"));
var _graphqlUpload = require("graphql-upload");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
const mongoConnect = require('./mongo-db');
mongoConnect();
_expressApp.default.use((0, _graphqlUpload.graphqlUploadExpress)({
  maxFileSize: 1000000000,
  maxFiles: 10
}));
_apolloServer.default.applyMiddleware({
  app: _expressApp.default
});
try {
  const PORT = process.env.PORT ? process.env.PORT : "5000";
  const URL = process.env.API_URL ? process.env.API_URL : "http://localhost" + PORT;
  const server = _expressApp.default.listen(PORT, () => {
    console.log(`info -> Web Server started: ${URL}`);
    console.log(`info -> Graphql Server ready: ${URL}${_apolloServer.default.graphqlPath}`);
  });
  server.setTimeout(420000);
} catch (error) {
  console.log('error -> ', err.message, err);
}
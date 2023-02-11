"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.apolloServer = void 0;
var _apolloServerExpress = require("apollo-server-express");
var _modulesMerge = require("./modules-merge");
//Apollo Server
const apolloServer = new _apolloServerExpress.ApolloServer({
  uploads: false,
  typeDefs: _modulesMerge.typeDefs,
  resolvers: _modulesMerge.resolvers
});
exports.apolloServer = apolloServer;
var _default = apolloServer;
exports.default = _default;
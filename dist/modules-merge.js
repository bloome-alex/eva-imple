"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;
var _mergeGraphqlSchemas = require("merge-graphql-schemas");
var _graphql = require("./modules/base/graphql");
//BASE RESOLVERS

//BASE TYPES

const resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)([_graphql.resolvers]);
exports.resolvers = resolvers;
const typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)([_graphql.types]);
exports.typeDefs = typeDefs;
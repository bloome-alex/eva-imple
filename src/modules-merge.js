import {mergeTypes, mergeResolvers} from 'merge-graphql-schemas';

//BASE RESOLVERS
import {resolvers as baseResolvers } from './modules/base/graphql'

//BASE TYPEDEFS
import {types as baseTypes} from './modules/base/graphql'



export const resolvers = mergeResolvers([
    baseResolvers,
])

export const typeDefs = mergeTypes([
    baseTypes,
])

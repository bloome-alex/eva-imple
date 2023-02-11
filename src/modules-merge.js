import {mergeTypes, mergeResolvers} from 'merge-graphql-schemas';

//BASE RESOLVERS
import {resolvers as baseResolvers } from './modules/base/graphql'

//USER RESOLVERS
import {resolvers as userResolvers} from './modules/user/graphql'

//BASE TYPEDEFS
import {types as baseTypes} from './modules/base/graphql'

//USER TYPEDEFS
import {types as userTypes} from './modules/user/graphql'

export const resolvers = mergeResolvers([
    baseResolvers,
    userResolvers
])

export const typeDefs = mergeTypes([
    baseTypes,
    userTypes
])

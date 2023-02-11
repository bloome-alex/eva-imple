import {ApolloServer} from 'apollo-server-express'
import {resolvers, typeDefs} from './modules-merge'

//Apollo Server
export const apolloServer = new ApolloServer({
    uploads: false,
    typeDefs,
    resolvers
});

export default  apolloServer

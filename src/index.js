require('dotenv').config();
import expressApp from './express-app'
import apolloServer from './apollo-server'
import defaultRoute from "./routes/DefaultRoute";

const mongoConnect = require('./mongo-db')
import {graphqlUploadExpress} from "graphql-upload";

//Connect to MongoDb
mongoConnect()

//Midleware fix fs.capacitor
expressApp.use(graphqlUploadExpress({maxFileSize: 1000000000, maxFiles: 10}));

//Link ApolloServer with ExpressApp
apolloServer.applyMiddleware({app: expressApp})

//Default route to frontend web on monorepo strategy
expressApp.use(defaultRoute)

const PORT = process.env.APP_PORT ? process.env.PORT : "5000"

const server = expressApp.listen(PORT, () => {
    console.log(`Web Server started: ${PORT}`)
    console.log(`Graphql Server ready: ${PORT}${apolloServer.graphqlPath}`)
})
server.setTimeout(420000);


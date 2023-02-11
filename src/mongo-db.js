const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongoConnect = async function(){

    if(!process.env.MONGO_URI){
        console.error("MongoDB connection error: process.env.MONGO_URI not found")
        throw new Error("process.env.MONGO_URI not found")
    }

    try{
        await connectToMongo(process.env.MONGO_URI)
        const db = mongoose.connection;

        db.on('error', function (){
            console.error.bind(console, 'connection error:')
            console.log("info: Reconnecting with MongoDB")
            setTimeout(() => connectToMongo(process.env.MONGO_URI), 3000)
        });

        db.once('open', function() {
            console.log("info: MongoDB Open")
        });

        const {ObjectId} = mongoose.Types;
        ObjectId.prototype.valueOf = function () {
            return this.toString();
        };

    }
    catch (error){
        console.log("error -> Connection to Mongo error: "+error)
        throw new Error("Connection to Mongo error: "+error)
    }


}

const connectToMongo = function (mongoUri){

    return new Promise((resolve, reject) => {

        mongoose.Promise = global.Promise;

        mongoose.connect(mongoUri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false

            })
            .then(() => {
                console.log("Mongoose connected")
                resolve()
            })
            .catch(error => {
                console.error("Mongoose not connected", error)
                reject(error)
            });

    })

}

module.exports = mongoConnect

require('dotenv').config();

import expressApp from './express-app'

const mongoConnect = require('./mongo-db')

mongoConnect()

expressApp.listen(process.env.PORT, ()=>{
    console.log('server listening')
})



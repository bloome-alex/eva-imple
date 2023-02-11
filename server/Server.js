import express from 'express'
import cors from 'cors'

class Server{
    constructor(){
        this.port = process.env.PORT
        this.connectToDatabase()
        this.app = express()
        this.middlewares()
        this.setStaticPages()
        this.routes()
    }

    setStaticPages(){
        this.app.use(express.static('public'))
    }

    connectToDatabase(){
        require('../database/database.js')
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.get('/api', (req, res) => res.send('API EVA MUÑOZ'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listen at port ' + this.port)
        })
    }
}

export default Server
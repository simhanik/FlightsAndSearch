const express = require('express');

const bodyParser = require('body-parser')
const {PORT} = require('./src/config/serverConfig.js')

const CityRepository =require('./src/repository/city-repository.js')

const ApiRoutes = require('./src/routes/index.js')

// this is require for the model synchronization
const db = require('./src/models/index.js')
const {Airport,City} = require('./src/models/index.js')

const setupAndStartServer = async()=> {
    // create an express object
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT, async() => {
        console.log(`Sever started on port  : ${PORT}`)

        // this is for the model synchronization
        // whenever you want to synchronize add SYNC_DB in your environment variables
        // as we need to do sync one after model creation
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true})
        }

    })
}
setupAndStartServer()

const express = require('express');

const bodyParser = require('body-parser')
const {PORT} = require('./src/config/serverConfig.js')

const CityRepository =require('./src/repository/city-repository.js')

const ApiRoutes = require('./src/routes/index.js')

const setupAndStartServer = async()=> {
    // create an express object
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT, () => {
        console.log(`Sever started on port  : ${PORT}`)

        // const repo = new CityRepository()
        // repo.createCity({name:"New Delhi"})
        
    })
}
setupAndStartServer()

const express = require('express');

const bodyParser = require('body-parser')
const {PORT} = require('./src/config/serverConfig.js')

const CityRepository =require('./src/repository/city-repository.js')

const setupAndStartServer = async()=> {
    // create an express object
    const app = express()
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, () => {
        console.log(`Sever started on port  : ${PORT}`)

        const repo = new CityRepository()
        repo.createCity({name:"New Delhi"})
        
    })
}
setupAndStartServer()

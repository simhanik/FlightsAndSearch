const express = require('express');
// require('dotenv').config()

const {PORT} = require('./src/config/serverConfig.js')

const setupAndStartServer = async()=> {
    // create an express object

    const app = express()
    

    app.listen(PORT, function(){
        console.log(`Sever started on port  : ${PORT}`)
        // console.log(process.env);
        
    })

}

setupAndStartServer()

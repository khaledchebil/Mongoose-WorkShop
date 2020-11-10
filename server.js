const express = require('express')
const app = express();

const router = require('./routes/person')

const myDB = require('./config/db')

app.use(express.json())

app.use('/', router);

myDB();

const port = process.env.port||3000;

    app.listen(port,()=>{
        try{
                 console.log('server is running on port',port)
        } catch(err){
                 console.log('connection failed', err)
        }
    })
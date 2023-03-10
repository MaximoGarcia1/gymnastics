const express = require('express')
const router = require('./routes/gym.routes.js')
const app = express();
const dbConnection = require ('./database/db')
const mongoose = require('mongoose')
const cors = require('cors')

app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(express.json())
app.use(router)
dbConnection();

app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port') )
})

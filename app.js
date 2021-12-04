const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json()) 
const dotenv = require('dotenv')
const port = 3000
const connectDb=require('./config/db')
//Load Configstore
dotenv.config({path: './config/config.env'})
connectDb()
//Routes
app.use('/', require('./routes/index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
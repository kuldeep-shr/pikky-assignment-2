const express = require('express')
const bodyParser	=	require('body-parser')
const weatherRoute	=	require('./weather-report/routes/weatherRoute')

//  create our Express app
const app = express() 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routes
app.use('/api/v1',weatherRoute)

module.exports = app
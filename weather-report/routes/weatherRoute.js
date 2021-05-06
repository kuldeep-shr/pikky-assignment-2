const express = require('express')
const router = express.Router()

const {getWeatherReport} = require('../controller/checkWeather')

router.get("/get-data",getWeatherReport)

module.exports = router
const axios	=	require('axios')
const { response } = require('../../app')

exports.getWeatherReport	=	async(req,res)	=>	{
	
		let takeZipCode = req.query.zipCode
		let countryCode = req.query.countryCode
	
		const promises = takeZipCode.map( async (zipCode) => {
		const res = await axios.post(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${process.env.API_KEY}`)
			
		return await res.data
			
		})
	
		Promise.all(promises).then(datasets => {
			return res.status(200).json({
				data: datasets.map((data) => {
					return {
						location: data.name,
						Rain: data.rain ? data.rain['3h'] ? `The rainfall for today at is: ${data.rain['3h']}` : `The rainfall for today is: ${data.rain['1h']}` : `No Rain Today`
					}
				})
			})
		})
}
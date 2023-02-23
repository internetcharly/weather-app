const API_KEY = '4127c66fd35444cab9665329230402'
const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?key='

export const searchWeather = async ({ search }) => {
	if (search === '') return null
	try {
		const response = await fetch(`${BASE_URL}${API_KEY}&q=${search}`)
		const responseWeather = await response.json()

		const getTodayTemperatures = () => {
			const hours = responseWeather.forecast?.forecastday[0]?.hour || []
			return hours.map((hour) => ({
				time: hour.time,
				temp: Math.round(parseFloat(hour.temp_c)),
			}))
		}

		return responseWeather?.location
			? {
					...responseWeather,
					location: responseWeather.location.name,
					country: responseWeather.location.country,
					currentTemp: responseWeather.current.temp_c,
					todayTemp11AM: getTodayTemperatures()[11].temp,
					todayTemp1PM: getTodayTemperatures()[13].temp,
					todayTemp3PM: getTodayTemperatures()[15].temp,
					todayTemp5PM: getTodayTemperatures()[17].temp,
					todayTemp9PM: getTodayTemperatures()[19].temp,
					condition: responseWeather.current.condition.text,
					icon: responseWeather.current.condition.icon,
			  }
			: null
	} catch (error) {
		throw new Error('Error searching location')
	}
}

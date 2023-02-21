/* eslint-disable dot-notation */
import { useState } from 'react'
import { API_KEY } from '../data'
import noResults from '../mocks/no-results.json'
export function useWeatherInfo({ search }) {
	const [responseWeather, setResponseWeather] = useState({})

	const getTodayTemperatures = () => {
		const hours = responseWeather.forecast?.forecastday[0]?.hour || []
		return hours.map((hour) => ({
			time: hour.time,
			temp: Math.round(parseFloat(hour.temp_c)),
		}))
	}

	const parsedInfo = responseWeather?.location
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
		: noResults

	const getWeatherInfo = () => {
		const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json?key='
		if (search) {
			// 	setResponseWeather(response)
			fetch(`${BASE_URL}${API_KEY}&q=${search}`)
				.then((res) => res.json())
				.then((json) => setResponseWeather(json))
		} else {
			setResponseWeather(noResults)
		}
	}

	return { infoWeather: parsedInfo, getWeatherInfo }
}

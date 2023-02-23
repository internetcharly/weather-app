/* eslint-disable dot-notation */
import { useState } from 'react'
import { searchWeather } from '../data/weatherInfo'

export function useWeatherInfo({ search }) {
	const [infoWeather, setInfoWeather] = useState({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const getWeatherInfo = async () => {
		try {
			setLoading(true)
			setError(null)
			const newWeatherInfo = await searchWeather({ search })
			setInfoWeather(newWeatherInfo)
		} catch (e) {
			setError(e.message)
		} finally {
			setLoading(false)
		}
	}

	return { infoWeather, getWeatherInfo, loading }
}

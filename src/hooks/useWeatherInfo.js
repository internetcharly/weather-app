/* eslint-disable dot-notation */
import { useRef, useState } from 'react'
import { searchWeather } from '../data/weatherInfo'

export function useWeatherInfo({ search }) {
	const [infoWeather, setInfoWeather] = useState({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previousSearch = useRef(search)

	const getWeatherInfo = async () => {
		if (search === previousSearch.current) return
		try {
			setLoading(true)
			setError(null)
			previousSearch.current = search
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

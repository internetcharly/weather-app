import { useCallback, useRef, useState } from 'react'
import { searchWeather } from '../data/weatherInfo'

export function useWeatherInfo({ search }) {
	const [infoWeather, setInfoWeather] = useState({})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previousSearch = useRef(search)

	const getWeatherInfo = useCallback(async () => {
		if (search === previousSearch.current) return
		try {
			console.log('Entrando')
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
	}, [search])

	return { infoWeather, getWeatherInfo, loading }
}

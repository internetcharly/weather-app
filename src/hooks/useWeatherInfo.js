import { useCallback, useRef, useState } from 'react'
import { searchLocation } from '../data/locationInfo'
import { searchWeather } from '../data/weatherInfo'

export function useWeatherInfo({ search }) {
	const [infoWeather, setInfoWeather] = useState({})
	const [locations, setLocations] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previousSearch = useRef(search)

	const getWeatherInfo = useCallback(async () => {
		if (search === previousSearch.current) return
		try {
			setLoading(true)
			setError(null)
			previousSearch.current = search
			const newLocation = await searchLocation({ search })
			setLocations(newLocation)
			const newWeatherInfo = await searchWeather({ search })
			setInfoWeather(newWeatherInfo)
		} catch (e) {
			setError(e.message)
		} finally {
			setLoading(false)
		}
	}, [search])

	return { infoWeather, getWeatherInfo, locations, loading }
}

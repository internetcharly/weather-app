import response from '../mocks/current-location.json'
import noResults from '../mocks/no-results.json'

export function useWeatherInfo() {
	const parsedInfo = {
		...response,
		location: response.location.name,
		temperature: response.current.temp_c,
		condition: response.current.condition.text,
		icon: response.current.condition.icon,
	}

	return { infoWeather: parsedInfo }
}

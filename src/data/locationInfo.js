const API_KEY = '4127c66fd35444cab9665329230402'
const BASE_URL = 'http://api.weatherapi.com/v1/search.json?key='

export const searchLocation = async ({ search }) => {
	try {
		const response = await fetch(`${BASE_URL}${API_KEY}&q=${search}`)
		const responseLocation = await response.json()

		const locations = responseLocation?.map((location) => ({
			id: location.id,
			name: location.name,
			country: location.country,
		}))
		return locations
	} catch (e) {
		throw new Error('Location error')
	}
}

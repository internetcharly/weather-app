/* eslint-disable react/prop-types */
function WeatherInfo({ infoWeather }) {
	return (
		<div>
			<ul>
				<li>
					<h3>{infoWeather.location}</h3>
					<h4>{infoWeather.temperature}</h4>
					<div>{infoWeather.condition}</div>
					<img src={infoWeather.icon} alt={infoWeather.condition} />
				</li>
			</ul>
		</div>
	)
}

function NoWeather() {
	return <p>No location</p>
}

export function WeatherCard({ infoWeather }) {
	const hasLocation = (infoWeather) => {
		return JSON.stringify(infoWeather) === '{}'
	}

	return hasLocation ? <WeatherInfo infoWeather={infoWeather} /> : <NoWeather />
}

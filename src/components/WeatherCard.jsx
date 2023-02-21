/* eslint-disable react/prop-types */
function WeatherInfo({ infoWeather }) {
	return (
		<>
			<div className='flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200'>
				<div className='w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40'>
					<div className='flex justify-between'>
						<div className='flex flex-col'>
							<span className='text-6xl font-bold'>
								{infoWeather.currentTemp}°C
							</span>
							<span className='font-semibold mt-1 text-gray-500'>
								{infoWeather.location}, {infoWeather.country}
							</span>
						</div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							className='h-24 w-24 fill-current text-yellow-400'
							viewBox='0 0 24 24'
						>
							<path fill='none' d='M0 0h24v24H0V0z'></path>
							<path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z'></path>
						</svg>
					</div>
					<div className='flex justify-between mt-12'>
						<div className='flex flex-col items-center'>
							<span className='font-semibold text-lg'>
								{infoWeather.todayTemp11AM}°C
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								className='h-10 w-10 fill-current text-gray-400 mt-3'
								viewBox='0 0 24 24'
							>
								<path fill='none' d='M0 0h24v24H0V0z'></path>
								<path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z'></path>
							</svg>
							<span className='font-semibold mt-1 text-sm'>11:00</span>
							<span className='text-xs font-semibold text-gray-400'>AM</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-semibold text-lg'>
								{infoWeather.todayTemp1PM}°C
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								className='h-10 w-10 fill-current text-gray-400 mt-3'
								viewBox='0 0 24 24'
							>
								<path fill='none' d='M0 0h24v24H0V0z'></path>
								<path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z'></path>
							</svg>
							<span className='font-semibold mt-1 text-sm'>1:00</span>
							<span className='text-xs font-semibold text-gray-400'>PM</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-semibold text-lg'>
								{infoWeather.todayTemp3PM}°C
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								className='h-10 w-10 fill-current text-gray-400 mt-3'
								viewBox='0 0 24 24'
							>
								<path fill='none' d='M0 0h24v24H0V0z'></path>
								<path d='M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.457 5.457 0 0112.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z'></path>
							</svg>
							<span className='font-semibold mt-1 text-sm'>3:00</span>
							<span className='text-xs font-semibold text-gray-400'>PM</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-semibold text-lg'>
								{infoWeather.todayTemp5PM}°C
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								className='h-10 w-10 fill-current text-gray-400 mt-3'
								viewBox='0 0 24 24'
							>
								<path fill='none' d='M0 0h24v24H0V0z'></path>
								<path d='M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.457 5.457 0 0112.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z'></path>
							</svg>
							<span className='font-semibold mt-1 text-sm'>5:00</span>
							<span className='text-xs font-semibold text-gray-400'>PM</span>
						</div>
						<div className='flex flex-col items-center'>
							<span className='font-semibold text-lg'>
								{infoWeather.todayTemp9PM}°C
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								className='h-10 w-10 fill-current text-gray-400 mt-3'
								viewBox='0 0 24 24'
							>
								<path fill='none' d='M0 0H24V24H0z'></path>
								<path d='M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86a8 8 0 01-5.61 1.01c-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z'></path>
								<path d='M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z'></path>
							</svg>
							<span className='font-semibold mt-1 text-sm'>7:00</span>
							<span className='text-xs font-semibold text-gray-400'>PM</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

function NoWeather() {
	return <p>No location</p>
}

export function WeatherCard({ infoWeather }) {
	const hasLocation = () => {
		return infoWeather?.location
	}

	return hasLocation() ? (
		<WeatherInfo infoWeather={infoWeather} />
	) : (
		<NoWeather />
	)
}

/* eslint-disable react/prop-types */
export function LocationList({ locations, search }) {
	const hightlightLocation = () => {
		return location.name
			.split(new RegExp(`(${search})`, 'i'))
			.map((part, i) =>
				part.toLowerCase() === search.toLowerCase() ? (
					<strong key={i}>{part}</strong>
				) : (
					<span key={i}>{part}</span>
				)
			)
	}

	return (
		<div className='inline-flex flex-col justify-center relative text-gray-500'>
			<h3 className='mt-2 text-sm'>{search}</h3>
			{locations.map((location) => (
				<ul
					key={location.id}
					className='bg-white border border-gray-100 w-full mt-2 '
				>
					<li className='pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
						<svg
							className='stroke-current absolute w-4 h-4 left-2 top-2'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<b>{hightlightLocation}</b> - {location.country}
					</li>
				</ul>
			))}
		</div>
	)
}

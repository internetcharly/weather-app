import { useEffect, useState } from 'react'

export function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null)

	useEffect(() => {
		if (search === '') {
			setError('Por favor, ingrese una ubicación antes de realizar la búsqueda')
			return
		}
		setError(null)
	}, [search])

	return { search, updateSearch, error }
}

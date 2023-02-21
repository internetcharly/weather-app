import { useEffect, useRef, useState } from 'react'

export function useSearch() {
	const [search, updateSearch] = useState('')
	const [error, setError] = useState(null)
	const isFirstInput = useRef(true)

	useEffect(() => {
		if (isFirstInput.current) {
			isFirstInput.current = search === ''
			return
		}

		if (search === '') {
			setError('Por favor, ingrese una ubicación antes de realizar la búsqueda')
			return
		}
		setError(null)
	}, [search])

	return { search, updateSearch, error }
}

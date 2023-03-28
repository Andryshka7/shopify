import { useAppSelector } from './storehooks'
import products from 'products'

const UseFilteredProducts = () => {
	const { filters } = useAppSelector((store) => store)
	let filtered = [...products]

	if (filters.categories.length) {
		filtered = filtered.filter((item) => filters.categories.includes(item.category))
	}

	if (filters.price_ascending) {
		filtered = filtered.sort((a, b) => a.price - b.price)
	} else if (filters.price_decending) {
		filtered = filtered.sort((a, b) => b.price - a.price)
	}

	if (filters.alphabetical) {
		filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
	} else if (filters.alphabetical_reversed) {
		filtered = filtered.sort((a, b) => -1 * a.image.localeCompare(b.name))
	}

	return filtered
}

export default UseFilteredProducts

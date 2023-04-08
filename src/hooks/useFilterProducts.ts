import { useAppSelector } from './storehooks'

const useFilteredProducts = () => {
	const { price_sort, alphabetical_sort, categories } = useAppSelector((store) => store.filters)
	let filtered = [...useAppSelector((store) => store.products.productList)]

	if (categories.length) {
		filtered = filtered.filter((item) => categories.includes(item.category))
	}

	if (price_sort === 1) {
		filtered.sort((a, b) => a.price - b.price)
	} else if (price_sort === -1) {
		filtered.sort((a, b) => b.price - a.price)
	}

	if (alphabetical_sort === 1) {
		filtered.sort((a, b) => a.title.localeCompare(b.title))
	} else if (alphabetical_sort === -1) {
		filtered.sort((a, b) => b.title.localeCompare(a.title))
	}

	return filtered
}

export default useFilteredProducts

import { IProduct } from '../types/product'
import { useAppSelector } from './storehooks'

const asc_price = (a: IProduct, b: IProduct) => a.price - b.price
const desc_price = (a: IProduct, b: IProduct) => b.price - a.price

const asc_alph = (a: IProduct, b: IProduct) => a.title.localeCompare(b.title)
const desc_alph = (a: IProduct, b: IProduct) => b.title.localeCompare(a.title)

const useFilteredProducts = () => {
	const { price_sort, alphabetical_sort, categories } = useAppSelector((store) => store.filters)
	let filtered = useAppSelector((store) => store.products)

	if (categories.length) {
		filtered = filtered.filter((item) => categories.includes(item.category))
	}

	if (price_sort === 1) {
		filtered = filtered.sort(asc_price)
	} else if (price_sort === -1) {
		filtered = filtered.sort(desc_price)
	}

	if (alphabetical_sort === 1) {
		filtered = filtered.sort(asc_alph)
	} else if (alphabetical_sort === -1) {
		filtered = filtered.sort(desc_alph)
	}

	return filtered
}

export default useFilteredProducts

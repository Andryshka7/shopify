import { Product } from 'types/Product'

export interface ProductsState {
	loading: boolean
	productList: Product[]
}
export interface FiltersState {
	categories: string[]
	price_sort: -1 | 1 | 0
	alphabetical_sort: -1 | 1 | 0
}

export interface CartItem {
	id: number
	amount: number
}

export type CartState = CartItem[]

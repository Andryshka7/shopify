import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../types/filters'

const initialState: IFilters = {
	categories: [],
	price_sort: 0,
	alphabetical_sort: 0,
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		applyCategory: ({ categories }, action: PayloadAction<string>) => {
			const category = action.payload
			if (categories.includes(category)) {
				categories.splice(categories.indexOf(category), 1)
			} else {
				categories.push(category)
			}
		},

		applyPriceFilter: (state) => {
			state.alphabetical_sort = 0
			if (state.price_sort === 1) {
				state.price_sort = -1
			} else {
				state.price_sort = 1
			}
		},
		applyAlphabeticalFilter: (state) => {
			state.price_sort = 0
			if (state.alphabetical_sort === 1) {
				state.alphabetical_sort = -1
			} else {
				state.alphabetical_sort = 1
			}
		},
		clearCategories: (state) => {
			state.categories = []
		},
		clearFilters: () => initialState,
	},
})

export default filtersSlice.reducer
export const { applyCategory, clearCategories, applyPriceFilter, applyAlphabeticalFilter, clearFilters } =
	filtersSlice.actions

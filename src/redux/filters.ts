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
		applyCategory: (state, action: PayloadAction<string>) => {
			const category = action.payload
			const { categories } = state

			if (categories.includes(category)) {
				state.categories.splice(categories.indexOf(category), 1)
			} else {
				state.categories.push(category)
			}
		},

		clearCategories: (state) => {
			state.categories = []
		},

		applyPriceFilter: (state) => {
			if (state.price_sort === 1) {
				state.price_sort = -1
			} else {
				state.price_sort = 1
			}
		},
		applyAlphabeticalFilter: (state) => {
			if (state.alphabetical_sort === 1) {
				state.alphabetical_sort = -1
			} else {
				state.alphabetical_sort = 1
			}
		},
	},
})

export default filtersSlice.reducer
export const { applyCategory, clearCategories, applyPriceFilter, applyAlphabeticalFilter } =
	filtersSlice.actions

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from './../types/filters'

const initialState: IFilters = {
	categories: [],
	price_ascending: false,
	price_decending: false,
	alphabetical: false,
	alphabetical_reversed: false,
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		applyCategory: (state, action: PayloadAction<string>) => {
			const category = action.payload

			if (state.categories.includes(category)) {
				state.categories.splice(state.categories.indexOf(category), 1)
			} else state.categories.push(category)
		},

		clearCategories: (state) => {
			state.categories = []
		},

		applyPriceFilter: (state) => {
			if (state.price_ascending) {
				state.price_ascending = false
				state.price_decending = true
			} else {
				state.price_decending = false
				state.price_ascending = true
			}
		},
		applyAlphabeticalFilter: (state) => {
			if (state.alphabetical) {
				state.alphabetical = false
				state.alphabetical_reversed = true
			} else {
				state.alphabetical_reversed = false
				state.alphabetical = true
			}
		},
	},
})

export default filtersSlice.reducer
export const { applyCategory, clearCategories, applyPriceFilter, applyAlphabeticalFilter } =
	filtersSlice.actions

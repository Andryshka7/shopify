import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import filtersReducer from './filtersSlice'

const store = configureStore({
	reducer: {
		cart: cartReducer,
		filters: filtersReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
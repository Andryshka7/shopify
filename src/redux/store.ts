import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products'
import cartReducer from './cart'
import filtersReducer from './filters'

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		filters: filtersReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

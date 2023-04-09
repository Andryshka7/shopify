import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/products'
import cartReducer from './features/cart'
import filtersReducer from './features/filters'

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

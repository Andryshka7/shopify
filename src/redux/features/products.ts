import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Product } from 'types/Product'

interface initialProducts {
	loading: boolean
	productList: Product[]
}

const url = 'https://fakestoreapi.com/products'
const initialState: initialProducts = {
	loading: true,
	productList: [],
}

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
	const response = await fetch(url)
	const products = await response.json()
	return products
})

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (build) =>
		build.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			state.loading = false
			state.productList = payload
		}),
})

export default productsSlice.reducer

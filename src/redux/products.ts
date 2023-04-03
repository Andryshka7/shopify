import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'types/product'

interface initialProducts {
	loading: boolean
	productList: IProduct[]
}

const url = 'https://fakestoreapi.com/products'
const initialState: initialProducts = {
	loading: true,
	productList: [],
}

export const fetchProducts = createAsyncThunk<IProduct[]>('products/fetchProducts', async () => {
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

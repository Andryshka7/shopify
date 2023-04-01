import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'types/product'

const url = 'https://fakestoreapi.com/products'
const initialState: IProduct[] = []

export const fetchProducts = createAsyncThunk<IProduct[]>('products/fetchProducts', async () => {
	const response = await fetch(url)
	const products = await response.json()
	return products
})

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (build) => build.addCase(fetchProducts.fulfilled, (state, { payload }) => payload),
})

export default productsSlice.reducer
